mod server;
use crate::server::{render, single_page_app};
use actix_cors::Cors;
use actix_rt;
use actix_web::{body::Body, web, App, HttpRequest, HttpResponse, HttpServer};

use mime_guess::from_path;
use rust_embed::RustEmbed;
use std::env;
use std::sync::{Arc, Mutex};
use std::{borrow::Cow, sync::mpsc, thread};
use web_view;
use web_view::Content;
use weresocool::{
    generation::parsed_to_render::sum_all_waveforms,
    instrument::StereoWaveform,
    manager::{BufferManager, RenderManager},
    portaudio::real_time_managed,
    settings::{default_settings, Settings},
};
const SETTINGS: Settings = default_settings();

#[derive(RustEmbed)]
#[folder = "src/server/build"]
struct Asset;

const RUN_APP: bool = true;

fn assets(req: HttpRequest) -> HttpResponse {
    let path = if req.path() == "/" {
        // if there is no path, return default file
        "index.html"
    } else {
        // trim leading '/'
        &req.path()[1..]
    };
    dbg!(&path);

    // query the file from embedded asset with specified path
    match Asset::get(path) {
        Some(content) => {
            let body: Body = match content {
                Cow::Borrowed(bytes) => bytes.into(),
                Cow::Owned(bytes) => bytes.into(),
            };
            HttpResponse::Ok()
                .content_type(from_path(path).first_or_octet_stream().as_ref())
                .body(body)
        }
        None => HttpResponse::NotFound().body("404 Not Found"),
    }
}

#[actix_rt::main]
pub async fn main() -> Result<(), actix_web::Error> {
    let render_manager = Arc::new(Mutex::new(RenderManager::init_silent()));
    let render_manager_clone = Arc::clone(&render_manager);
    let buffer_manager = Arc::new(Mutex::new(BufferManager::init_silent()));
    let buffer_manager_clone = Arc::clone(&buffer_manager);

    std::env::set_var("RUST_LOG", "socool_server=info, actix_web=info");
    env_logger::init();

    let port = env::var("PORT")
        .unwrap_or_else(|_| "4599".to_string())
        .parse()
        .expect("PORT must be a number");
    println!("Listening on {}", &port);

    let (server_tx, server_rx) = mpsc::channel();

    let rm = web::Data::new(Arc::clone(&render_manager));
    let bm = web::Data::new(Arc::clone(&buffer_manager));

    thread::spawn(move || {
        let sys = actix_rt::System::new("WereSoCool Server");
        let server = HttpServer::new(move || {
            App::new()
                .app_data(rm.clone())
                .app_data(bm.clone())
                .wrap(Cors::new().finish())
                .service(web::scope("/api").route("/render", web::post().to(render)))
                .route("/compose", web::get().to(single_page_app))
                .default_service(web::get().to(assets))
        })
        .bind(("0.0.0.0", port))
        .unwrap();

        let server = server.run();

        let _ = server_tx.send(server);
        let _ = sys.run();
    });

    thread::Builder::new()
        .name("Renderer".to_string())
        .spawn(move || loop {
            let batch: Option<Vec<StereoWaveform>> = render_manager_clone
                .lock()
                .unwrap()
                .render_batch(SETTINGS.buffer_size);

            if let Some(b) = batch {
                if !b.is_empty() {
                    let stereo_waveform = sum_all_waveforms(b);
                    buffer_manager_clone.lock().unwrap().write(stereo_waveform);
                }
            }
        })?;

    thread::Builder::new()
        .name("Audio".to_string())
        .spawn(move || loop {
            let mut stream = real_time_managed(Arc::clone(&buffer_manager)).unwrap();
            stream.start().unwrap();

            println!("Stream started");

            while let true = stream.is_active().unwrap() {}

            stream.stop().unwrap();

            println!("Stream stopped");
        })?;

    let server = server_rx.recv().unwrap();

    if RUN_APP {
        web_view::builder()
            .title("WereSoCool")
            .content(Content::Url(format!("http://localhost:{}", port)))
            .size(1200, 1000)
            .resizable(true)
            .debug(true)
            .user_data(())
            .invoke_handler(|_webview, _arg| Ok(()))
            .run()
            .unwrap();
    }

    //gracefully shutdown actix web server

    let _ = server.stop(true).await;

    println!("Shutdown");

    Ok(())
}

mod server;
use crate::server::{render, single_page_app};
use actix_cors::Cors;
use actix_rt;
use actix_web::{body::Body, web, App, HttpRequest, HttpResponse, HttpServer};

use mime_guess::from_path;
use rust_embed::RustEmbed;
use std::env;
use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::{Arc, Mutex};
use std::{borrow::Cow, sync::mpsc, thread};
use weresocool::{manager::RenderManager, portaudio::real_time_render_manager};

#[derive(RustEmbed)]
#[folder = "src/server/build"]
struct Asset;

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

    std::env::set_var("RUST_LOG", "socool_server=info, actix_web=info");
    env_logger::init();

    let port = env::var("PORT")
        .unwrap_or_else(|_| "4588".to_string())
        .parse()
        .expect("PORT must be a number");
    println!("Listening on {}", &port);

    let (server_tx, server_rx) = mpsc::channel();

    let rm = web::Data::new(Arc::clone(&render_manager));

    thread::spawn(move || {
        let sys = actix_rt::System::new("WereSoCool Server");
        let server = HttpServer::new(move || {
            App::new()
                .app_data(rm.clone())
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
    let term = Arc::new(AtomicBool::new(false));
    signal_hook::flag::register(signal_hook::SIGINT, Arc::clone(&term))?;
    signal_hook::flag::register(signal_hook::SIGTERM, Arc::clone(&term))?;

    let server = server_rx.recv().unwrap();

    let mut stream = real_time_render_manager(Arc::clone(&render_manager)).unwrap();

    println!("Stream started");
    stream.start().unwrap();
    while !term.load(Ordering::Relaxed) {}
    //while let true = stream.is_active() {};

    server.stop(true).await;
    println!("Server Stopped");

    stream.stop().unwrap();
    stream.close().unwrap();
    println!("PortAudioStream stopped");

    println!("Application Shutdown");

    Ok(())
}

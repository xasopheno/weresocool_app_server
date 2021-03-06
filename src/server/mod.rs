pub mod types;
use crate::server::types::Language;
use actix_files::NamedFile;
use actix_web::{http::StatusCode, web, HttpRequest, HttpResponse};
use std::path::PathBuf;
use std::sync::{Arc, Mutex};
use weresocool::{
    //generation::{RenderReturn, RenderType},
    interpretable::InputType,
    manager::{BufferManager, RenderManager},
};

//use weresocool_error::ErrorInner;
//

pub async fn single_page_app(_req: HttpRequest) -> actix_web::Result<NamedFile> {
    let path = PathBuf::from("./src/server/build/index.html");
    Ok(NamedFile::open(path)?)
}

pub async fn render(
    render_manager: web::Data<Arc<Mutex<RenderManager>>>,
    buffer_manager: web::Data<Arc<Mutex<BufferManager>>>,
    req: web::Json<Language>,
) -> HttpResponse {
    match render_manager
        .lock()
        .unwrap()
        .prepare_render(InputType::Language(&req.language))
    {
        Ok(_) => {
            buffer_manager.lock().unwrap().inc_render_write_buffer();
            println!("Success.");
        }
        _ => {}
    }

    HttpResponse::new(StatusCode::OK)
}

#[cfg(test)]
mod tests {
    use super::*;
    use actix_web::{http::header, test, web, App};

    #[actix_rt::test]
    async fn test_index() {
        let language = Language {
            language: "{f: 100, l: 1, g: 1, p: 0}\nmain={Tm 1}\n".to_string(),
        };

        let req = test::TestRequest::post()
            .uri("/api/render")
            .header(header::CONTENT_TYPE, "application/json")
            .set_json(&language)
            .to_request();

        let mut app = test::init_service(
            App::new().service(web::resource("/api/render").route(web::post().to(render))),
        )
        .await;

        let resp = test::call_service(&mut app, req).await;
        assert!(resp.status().is_success());
    }
}

pub mod types;
use crate::server::types::{Language, RenderError, RenderSuccess};
use actix_files::NamedFile;
use actix_web::{http::StatusCode, web, HttpRequest, HttpResponse};
use std::path::PathBuf;
use weresocool::generation::{RenderReturn, RenderType};
use weresocool::interpretable::{InputType, Interpretable};
use weresocool_error::ErrorInner;

pub async fn single_page_app(_req: HttpRequest) -> actix_web::Result<NamedFile> {
    let path = PathBuf::from("./src/server/build/index.html");
    Ok(NamedFile::open(path)?)
}

pub async fn render(req: web::Json<Language>) -> HttpResponse {
    let result = InputType::Language(&req.language).make(RenderType::StereoWaveform);
    match result {
        Ok(render_return) => match render_return {
            RenderReturn::StereoWaveform(wav) => HttpResponse::Ok()
                .content_type("application/json")
                .status(StatusCode::OK)
                .json(RenderSuccess::new(wav)),
            _ => panic!(),
        },
        Err(parse_error) => {
            let inner = *parse_error.inner;
            match inner {
                ErrorInner::ParseError(error) => HttpResponse::Ok()
                    .content_type("application/json")
                    .status(StatusCode::OK)
                    .json(RenderError::new(error)),
                _ => panic!(),
            }
        }
    }
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

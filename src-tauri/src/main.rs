#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use std::io::{Read, Write};
use std::net::TcpStream;
use std::str;
use url::Url;

#[tauri::command]
fn my_custom_command() {
  println!("I was invoked from JS!");
}

#[tauri::command]
fn request(url: String) -> Result<String, String> {
  let url = Url::parse("http://example.org/").unwrap();
  let addrs = url.socket_addrs(|| None).unwrap();

  let msg = b"GET /index.html HTTP/1.0\r\n\r\n";

  let mut stream = TcpStream::connect(addrs[0]).unwrap();

  stream.write_all(msg).unwrap();
  stream.flush().unwrap();

  let mut buf = [0; 1024];
  loop {
    let count = stream.read(&mut buf).unwrap();
    if count == 0 {
      break;
    }
  }

  let response = str::from_utf8(&buf).unwrap().to_string();
  let headers = response
    .lines()
    .take_while(|line| !line.is_empty())
    .collect::<Vec<_>>();

  let body = response
    .lines()
    .skip_while(|line| !line.is_empty())
    .collect::<Vec<_>>()
    .join("\n");

  Ok(body.into())

  // Ok("this worked".into())
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![my_custom_command, request])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#[tauri::command]
fn my_custom_command() {
  println!("I was invoked from JS!");
}

#[tauri::command]
fn fetch(url: String) -> String {
  println!("Fetching {}", url);

  url.into()
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![my_custom_command, fetch])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

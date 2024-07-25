// Prevents additional console window on Windows in release, DO NOT REMOVE!! #![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
pub mod authentication;
pub mod database;
mod error;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

#[tauri::command]
/// # A simple function to give an example of how to use the invoke function in tauri-apps.
///
/// ### Examples :
/// assert!(greet("Gary"), Hello, Gary! You've been greeted from Rust!)
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    // NOTE: Here I put all the function that I wnat to be exposed to the frontend
    println!("for some reason that code is going to work !");
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, database::hello,])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

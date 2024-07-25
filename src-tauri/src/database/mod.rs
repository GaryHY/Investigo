use self::models::Client;

use super::authentication::models::Credentials;
use rusqlite::Connection;
// use uuid::Uuid;

// NOTE: Pour apres parce que je veux voir comment gerer les bools
// is_admin BOOL NOT NULL CHECK (is_admin IN (0, 1)),

pub mod case;
pub mod models;

// NOTE: I am using this link for it, all of that is just an example (https://sqldocs.org/sqlite/rust-sqlite/)
pub fn init() {
    let conn = Connection::open("db.sql").unwrap();
    conn.execute(
        "CREATE TABLE clients (
                id String PRIMARY KEY,
                name TEXT NOT NULL,
            )",
        [],
    )
    .unwrap();
    // TODO:
    // use uuid::Uuid;
    let client = Client::new();
    // 1. insert a user just to test things out
    conn.execute(
        "INSERT INTO TABLE clients VALUES (?1, ?2);",
        // &[&Client::get_id(&client), &Client::get_name(&client)],
        &[client.id, client.name],
    )
    .unwrap();
}

#[tauri::command]
pub fn hello() {
    println!("Je teste si ma structure de projet est bonne")
}

#![allow(dead_code, unused_variables)]
pub fn authenticate(creds: models::Credentials) {
    println!("I am trying to authenticate")
}

pub mod models {
    // move that if needed
    pub struct Credentials {
        pub username: String,
        pub password: String,
    }
    impl Credentials {
        pub fn new() -> Self {
            Credentials {
                username: String::new(),
                password: String::new(),
            }
        }
    }
}

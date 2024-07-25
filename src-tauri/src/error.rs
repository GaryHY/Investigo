#![allow(dead_code)]
#[derive(thiserror::Error, Debug)]
enum Error {
    #[error("Generic {0}")]
    Generic(String),

    #[error(transparent)]
    IO(#[from] std::io::Error),
}

// NOTE: Ce truc me vient de Jeremy Chone et comment il setup un projet : https://www.youtube.com/watch?v=oxx7MmN4Ib0

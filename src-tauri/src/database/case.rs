//  TODO: Je n'ai que quelque requete sql a faire
// TODO: Add the struct there to so that it make more sense

use crate::database::models::{Helper, Witness};
use std::time::Instant;
use uuid::Uuid;

pub enum EnqueteType {
    Incendie,
    Aldutere,
}

// NOTE: Get that number from looking in the database at runtime.
pub const NB: usize = 7;

pub struct Case {
    id: Uuid,
    start_date: Instant,
    // end_date: Date, // uniquement dans la BDD
    enquete_type: EnqueteType,
    tva: u16, // do not store it as a float but use them as cents
    workhours: u8,
    workhours_paid: u8, // we use int to avoid float arithmetic issue, it is stored in cents.
    clients_id: Vec<String>,
    interlocuteurs_id: Vec<String>,
    facture_id: Vec<String>,
    mandat_id: Vec<String>,
    devis_id: Vec<String>,
    pompier_id: Option<Uuid>,
    huissier_id: Option<Uuid>,
    is_closed: bool,
    helpers: Vec<Helper>,
    witnesses: Vec<Witness>,
}

impl Case {
    // to create a new case
    pub fn new(enquete_type: EnqueteType, clients_id: Vec<String>) -> Self {
        // prepare some field based on the type of case we got.
        let (pompier_id, huissier_id) = match enquete_type {
            EnqueteType::Incendie => (Some(Uuid::new_v4()), Some(Uuid::new_v4())),
            EnqueteType::Aldutere => (None, None),
        };

        // prepare the client list
        Self {
            id: Uuid::new_v4(),
            start_date: Instant::now(),
            enquete_type,
            tva: 234, // find the right value for the TVA at that specific moment.
            workhours: 0,
            workhours_paid: 0,
            clients_id,
            interlocuteurs_id: Vec::new(),
            facture_id: Vec::new(),
            mandat_id: Vec::new(),
            devis_id: Vec::new(),
            pompier_id,
            huissier_id,
            is_closed: false,
            helpers: Vec::new(),
            witnesses: Vec::new(),
        }
    }
}
pub fn create_case() {
    println!("case created")
}

pub fn read_case() {
    println!("case read")
}

// NOTE: Use a lot of option for that, since some value can be None.
pub fn update_case() {
    println!("case updated")
}

// NOTE: Use a cron job to send a notification
pub fn delete_case() {
    println!("case deleted")
}

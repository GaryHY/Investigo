#![allow(dead_code, unused_variables)]
use crate::authentication::models::Credentials;
use uuid::Uuid;

pub struct User {
    pub id: String,
    pub credentials: Credentials,
    pub is_admin: bool,
}

impl User {
    pub fn new(id: String, credentials: Credentials, is_admin: bool) -> Self {
        User {
            id: String::from("1234"),
            credentials: Credentials::new(),
            is_admin: true,
        }
    }
}

struct PersonsOfInterest {
    id: Uuid,
    lastname: String,
    firstname: String,
    case_id: Uuid,
    department: String,
    city: String,
}

impl PersonsOfInterest {
    fn new(
        lastname: String,
        firstname: String,
        case_id: Uuid,
        department: String,
        city: String,
    ) -> Self {
        PersonsOfInterest {
            id: Uuid::new_v4(),
            lastname,
            firstname,
            case_id,
            department,
            city,
        }
    }
}

struct Email {
    username: String,
    domain_name: String,
}

// NOTE:  Comment je gere les metadatas associes a la photo
struct Photo {
    id: Uuid,
    case_id: Uuid,
}

struct HelperPhoto {
    photo: Photo,
    helper_id: String,
}

// The way I am going to write this in the database
impl std::fmt::Display for Email {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}@{}", self.username, self.domain_name)
    }
}

// The different company that I work with
pub struct Client {
    pub id: Uuid,
    pub name: String,
    // interlocutors: Interlocutors, // query the interlocutors table to get that field
}

impl Client {
    pub fn new() -> Self {
        Client {
            id: Uuid::new_v4(),
            name: String::new(),
        }
    }

    pub fn get_id(&self) -> Uuid {
        self.id
    }

    pub fn get_name(&self) -> String {
        self.name
    }
}

// 1 client a plusieurs interlocuteurs donc dans la table interlocuteur je dois mettre un client_id
//   foreign key pour marquer la relation.

type Clients = [Client];
type Interlocutors = [Interlocutor];

struct Interlocutor {
    id: Uuid,
    lastname: String,
    firstname: String,
    phone: String,
    email: Email,
    client_id: Uuid,
}

pub struct Witness {
    id: Uuid,
    lastname: String,
    firstname: String,
    phone: String,
    email: Email,
    help_description: String,
    occupation: String,
    case_id: Uuid,
}

pub struct Helper {
    id: Uuid,
    firstname: String,
    lastname: String,
    company_name: String,
    workhours: u8,
    mission_description: String,
}

// NOTE: Dans la BDD je vais me creer des tables pour reprensenter les relations many to many
//- cases_witnesses
//- cases_helpers

//NOTE: Other relationship that I should translate here
//Relationship (ce qui permet de se faire une idee des keys)
// - 1 helper (intervenant_id) peut intervenir sur plusieurs enquetes (case_id)
// - 1 person_of_interest (person_of_interest_id) peut etre le sujet de plusieurs enquetes (potentiellement)
// - 1 witness (witness_id) can appear in different cases (case_id)
// - 1 case (case_id) peut avoir plusieurs clients (client_id)
// - 1 client (client_id) a plusieurs case (case_id)
// - 1 client can have multiple interlocuteur (secretaire(s), avocat direct etc..)
// - 1 photo belong to one case (1 to 1 relationship)

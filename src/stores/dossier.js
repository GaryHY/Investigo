// @ts-nocheck
import {writable} from "svelte/store"

// On va faire un SQL et un NoSQL database.
const dossier = writable({
    name: "",
    firstname: "",
    client: "",
    type: "",
    date_de_naissance: "",
    contact: {
        telephone: "",
        mail: "",
        reseaux_sociaux: {
            facebook: "",
            twitter: "",
            instagram: "",
        },
    },
    addresse: {
        ville: "",
        rue: "",
        localisation: "",
        numero: "",
        code_postal: "",
        departement: "",
    },
    related: [], 
    person_of_interest: [],
    photos: [],
    interlocuteur: {
        name: "",
        firstname: "",
        contact: {
            telephone: "",
            mail: "",
        },
    },
    // date: "15112023", En fonction du jour ou je le cree, je mettrai une valeur par default.
})

export default dossier;

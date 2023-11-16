// @ts-nocheck
// TODO: Typer ce truc apres
// interface IFolder {
//     id: string;
//     firstname: string;
//     lastname: string;
//     // TODO: Change le type du status pour avoir un truc plus strict.
//     status: string;
// }
import {writable} from "svelte/store"

// NOTE: La vraie valeure initiale des que j'aurais le backend.
// const query = "";

const mockQuery = [
    {
        id: "493232783",
        firstname: "Livio",
        lastname: "HENRY",
        status: "ok",
    },
    {
        id: "849334905",
        firstname: "Serge",
        lastname: "HENRY",
        status: "todo",
    },
    {
        id: "449385037",
        firstname: "Chantal",
        lastname: "HENRY",
        status: "ok",
    },
    {
        id: "173432383",
        firstname: "Gary",
        lastname: "HENRY",
        status: "todo",
    },
];

const query = writable(mockQuery);

export default query;

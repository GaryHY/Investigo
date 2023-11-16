
// @ts-nocheck
import {writable} from "svelte/store"

async function getInitalPhotos(){
    console.log("Je dois aller chercher les photos");
}

// TODO: Mettre ceci dans le store en valeur initiale.
// const initialPhotos = getInitalPhotos();

// TODO: Remove that when I have real photos.
const size = 150; 

const photosState = writable([
    {
        id: 1,
        img: `http://via.placeholder.com/${size}?text=1`,
        caption: "Je mets la caption de l'image 1.",
    },

    {
        id: 2,
        img: `http://via.placeholder.com/${size}?text=2`,
        caption: "Je mets la caption de l'image 2.",
    },
    {
        id: 3,
        img: `http://via.placeholder.com/${size}?text=3`,
        caption: "Je mets la caption de l'image 3.",
    },
    {
        id: 4,
        img: `http://via.placeholder.com/${size}?text=4`,
        caption: "Je mets la caption de l'image 4.",
    },
    {
        id: 5,
        img: `http://via.placeholder.com/${size}?text=5`,
        caption: "Je mets la caption de l'image 5.",
    },
    {
        id: 6,
        img: `http://via.placeholder.com/${size}?text=6`,
        caption: "Je mets la caption de l'image 6.",
    },
    {
        id: 7,
        img: `http://via.placeholder.com/${size}?text=7`,
        caption: "Je mets la caption de l'image 7.",
    },
    {
        id: 8,
        img: `http://via.placeholder.com/${size}?text=8`,
        caption: "Je mets la caption de l'image 8.",
    },
    {
        id: 9,
        img: `http://via.placeholder.com/${size}?text=9`,
        caption: "Je mets la caption de l'image 9.",
    },
    {
        id: 10,
        img: `http://via.placeholder.com/${size}?text=10`,
        caption: "Je mets la caption de l'image 10.",
    },
])

// TODO: Une fonction qui prend un path absolu de l'ordi et qui s'occupe de l'envouer dans le stockage.
// function addPhoto(path){
//
// }

export default photosState;

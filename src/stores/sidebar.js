// TODO: Use typescript and enum/union types to define the states.
import {writable} from "svelte/store"

const state = writable("mandat");
// TODO: Remettre ce qu'il y a en dessous comme valeur initiale
// const state = writable("rapport");

export default state;



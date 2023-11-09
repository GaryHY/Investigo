import {writable} from "svelte/store";

// Je garde cela parce que je veux pouvoir le typer.
const folderInfo = {};

const folder = writable(folderInfo);
export default folder

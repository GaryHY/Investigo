// @ts-nocheck
import {writable} from "svelte/store"

const activeMenu = writable({
    menu: "image",
    toggle: false,
})

export default activeMenu;

<script>
    // @ts-nocheck

    // TODO: Changer cela des que je finis avec mandat
    // let mainState = "rapport";
    let mainState = "mandat";
    import sidebarState from "../stores/sidebar";
    sidebarState.subscribe((newValue) => {
        mainState = newValue;
    });

    //////////////////////////////////////////////////
    // pagination
    // NOTE: Ce truc depend de mainState donc il devrait etre appele avec le subscribe.
    // TODO: creer un fichier pagination.js pour gerer cela.

    // Valeur initial a mettre dans le store.
    // let pageCount = 1;

    const heightPaper = "14in";
    function convertInToPx(inch) {
        console.log("Je veux un truc qui me donne autour de 96px");
        console.log("Ou l'inverse ie : ", 1 / 96);
        console.log("The device pixel ratio: ", window.devicePixelRatio);
    }
    function getPageCount() {
        const paper = document.querySelector(".paper");
        console.log(paper);
        convertInToPx(1);
        return 1;
    }

    ////////////////////////////////////////////////////

    import MainBar from "./MainBar.svelte";
    import { onMount, onDestroy } from "svelte";
    import { Editor } from "@tiptap/core";
    import StarterKit from "@tiptap/starter-kit";
    import Underline from "@tiptap/extension-underline";
    import TextAlign from "@tiptap/extension-text-align";

    import { scrollMenu } from "../scripts/menu.js";
    import Menu from "./Menu.svelte";

    import Mandat from "../Templates/Mandat.svelte";
    import Devis from "../Templates/Devis.svelte";
    import Facture from "../Templates/Facture.svelte";

    let element;
    let editor;
    onMount(() => {
        if (mainState === "rapport") {
            console.log("je mount l'editor");
            editor = new Editor({
                element: element,
                extensions: [
                    StarterKit,
                    Underline,
                    TextAlign.configure({
                        types: ["heading", "paragraph"],
                    }),
                ],
                content: "",
                onTransaction: () => {
                    editor = editor;
                },
            });
            // NOTE: Je mets un else pour le moment mais faudra le bouger surement
        } else {
            let pageCount = getPageCount();
        }
    });

    onDestroy(() => {
        if (mainState === "rapport") {
            if (editor) {
                editor.destroy();
            }
        }
    });
</script>

{#if mainState === "rapport"}
    <MainBar {editor} />
{/if}
<div class="main" on:scroll={scrollMenu}>
    <div class="paper">
        {#if mainState === "rapport"}
            <Menu />
            <div class="template">
                <img
                    class="imgtest"
                    src="http://via.placeholder.com/60?text=1"
                    alt="phototest"
                />
                <h2>Je suis dans la partie rapport en fait.</h2>
            </div>
            <div class="editortext" bind:this={element} />
        {/if}
        {#if mainState === "devis"}
            <Devis />
        {/if}

        {#if mainState === "mandat"}
            <Mandat />
        {/if}

        {#if mainState === "facture"}
            <Facture />
        {/if}
    </div>
</div>

<style>
    .paper {
        background-color: white;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
        padding: 1in;
        width: 14in;
        /* NOTE: The inital value for width and height are here. */
        aspect-ratio: 8.5 / 11;
        margin-inline: auto;
        overflow: hidden;
    }

    .editortext {
        height: 100%;
    }

    .template {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    /* NOTE: Le css de l'ancien main en fait. */
    .main {
        position: relative;
        padding: 6rem;
        background-color: #f3f3f3;
    }
</style>

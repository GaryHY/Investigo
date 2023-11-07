<script>
    // @ts-nocheck

    let mainState = "rapport";
    import sidebarState from "../stores/sidebar";
    sidebarState.subscribe((newValue) => {
        mainState = newValue;
    });

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
    if (mainState === "rapport") {
        onMount(() => {
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
        });

        onDestroy(() => {
            if (editor) {
                editor.destroy();
            }
        });
    }
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

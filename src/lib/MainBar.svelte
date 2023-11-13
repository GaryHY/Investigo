<script>
    // @ts-nocheck
    export let editor;

    // Mes import de svg
    import Pdf from "../Icons/Mainbar/Pdf.svg";
    import Audio from "../Icons/Mainbar/Audio.svg";
    import Hamburger from "../Icons/Mainbar/Hamburger.svg";
    import Italic from "../Icons/Mainbar/Italic.svg";
    import Bold from "../Icons/Mainbar/Bold.svg";
    import Underline from "../Icons/Mainbar/Underline.svg";
    import TALeft from "../Icons/Mainbar/TALeft.svg";
    import TACenter from "../Icons/Mainbar/TACenter.svg";
    import TARight from "../Icons/Mainbar/TARight.svg";
    import Print from "../Icons/Mainbar/Print.svg";
    import Save from "../Icons/Mainbar/Save.svg";
    import Undo from "../Icons/Mainbar/Undo.svg";
    import Heading1 from "../Icons/Mainbar/Heading-1.svg";
    import Heading2 from "../Icons/Mainbar/Heading-2.svg";
    import Paragraph from "../Icons/Mainbar/Paragraph.svg";

    import { openMenu } from "../scripts/menu";

    // Modal
    import Modal from "./Modal.svelte";
    import PdfModal from "../Modals/PdfModal.svelte";
    import PrintModal from "../Modals/PrintModal.svelte";
    import { openModal } from "../scripts/modal";

    function no_function() {
        console.log("Je dois implementer la fonction");
    }
</script>

{#if editor}
    <div class="main_bar">
        <div class="main_bar_group">
            <button class="mainbar__button open_modal" on:click={no_function}>
                <img class="icon" src={Save} alt="icon sauvegarder" />
                <div class="mainbar__tooltip">Sauvegarder</div>
            </button>
            <button class="mainbar__button open_modal" on:click={no_function}>
                <img class="icon" src={Undo} alt="icon pdf" />
                <div class="mainbar__tooltip">Undo</div>
            </button>
            <Modal>
                <PrintModal />
            </Modal>
            <button class="mainbar__button open_modal" on:click={openModal}>
                <img class="icon" src={Print} alt="icon print" />
                <div class="mainbar__tooltip">Imprimer</div>
            </button>
        </div>
        <div class="main_bar_group split">
            <button
                class="mainbar__button"
                on:click={() => {
                    editor.chain().focus().toggleHeading({ level: 1 }).run();
                }}
                class:active={editor.isActive("heading", { level: 1 })}
            >
                <img class="icon" src={Heading1} alt="icon print" />
                <div class="mainbar__tooltip">header h1</div>
            </button>
            <button
                class="mainbar__button"
                on:click={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()}
                class:active={editor.isActive("heading", { level: 2 })}
            >
                <img class="icon" src={Heading2} alt="icon print" />
                <div class="mainbar__tooltip">header h2</div>
            </button>
            <button
                class="mainbar__button"
                on:click={() => editor.chain().focus().setParagraph().run()}
                class:active={editor.isActive("paragraph")}
            >
                <img class="icon" src={Paragraph} alt="icon print" />
                <div class="mainbar__tooltip">Parargraphe</div>
            </button>
            <button
                class="mainbar__button"
                on:click={() => editor.chain().focus().toggleBold().run()}
                class:active={editor.isActive("bold")}
            >
                <img src={Bold} alt="bold icon" />
                <div class="mainbar__tooltip">Bold</div>
            </button>
            <button
                class="mainbar__button"
                on:click={() => editor.chain().focus().toggleItalic().run()}
                class:active={editor.isActive("italic")}
            >
                <img src={Italic} alt="italic icon" />
                <div class="mainbar__tooltip">Italic</div>
            </button>
            <button
                class="mainbar__button"
                on:click={() => editor.chain().focus().toggleUnderline().run()}
                class:active={editor.isActive("underline")}
            >
                <img src={Underline} alt="underline icon" />
                <div class="mainbar__tooltip">Underline</div>
            </button>
            <button
                class="mainbar__button"
                on:click={() =>
                    editor.chain().focus().setTextAlign("left").run()}
                class:active={editor.isActive({ textAlign: "left" })}
            >
                <img src={TALeft} alt="left align icon" />
                <div class="mainbar__tooltip">Aligner a gauche</div>
            </button>

            <button
                class="mainbar__button"
                on:click={() =>
                    editor.chain().focus().setTextAlign("center").run()}
                class:active={editor.isActive({ textAlign: "center" })}
            >
                <img src={TACenter} alt="center align icon" />
                <div class="mainbar__tooltip">Aligner au centre</div>
            </button>

            <button
                class="mainbar__button"
                on:click={() =>
                    editor.chain().focus().setTextAlign("right").run()}
                class:active={editor.isActive({ textAlign: "right" })}
            >
                <img src={TARight} alt="right align icon" />
                <div class="mainbar__tooltip">Aligner a droite</div>
            </button>
        </div>
        <div class="main_bar_group mla">
            <Modal>
                <PdfModal />
            </Modal>
            <button class="mainbar__button open_modal" on:click={openModal}>
                <img class="icon" src={Pdf} alt="icon pdf" />
                <div class="mainbar__tooltip">Apercu PDF</div>
            </button>
            <button
                class="mainbar__button open_menu audio_menu"
                on:click={openMenu}
            >
                <img class="icon" src={Audio} alt="icon audio" />
                <div class="mainbar__tooltip">Enregistrements</div>
            </button>
            <button
                class="mainbar__button open_menu image_menu"
                on:click={openMenu}
            >
                <img class="icon" src={Hamburger} alt="icon hamburger" />
                <div class="mainbar__tooltip">Apercu image</div>
            </button>
        </div>
    </div>
{/if}

<style>
    /* NOTE: En attendant d'avoir les autres boutons */
    .open_modal {
        margin-left: auto;
    }
    .main_bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-inline: 2rem;
    }

    .main_bar_group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-inline: 1rem;
    }

    .split {
        border-right: 2px solid white;
        border-left: 2px solid white;
        padding-inline: 4rem;
    }

    .mainbar__button {
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        border: none;
        background: none;
        color: white;
        position: relative;
    }

    .mainbar__button {
        border: none;
        background: none;
        /* width: 100%; */
        color: white;
        position: relative;
    }

    .mainbar__button:hover {
        background-color: #27272d;
    }

    .mainbar__tooltip {
        display: none;
        position: absolute;
        z-index: 100000;
        color: white;
        background-color: #27272d;
        bottom: -6rem;
        left: 50%;
        transform: translateX(-50%);
        padding: 1rem 2rem;
    }

    .mainbar__tooltip::before {
        content: "";
        position: absolute;
        background-color: #27272d;
        top: -8%;
        left: 50%;
        transform: translateX(-50%) rotateZ(45deg);
        width: 20px;
        aspect-ratio: 1;
    }

    .mainbar__button:hover .mainbar__tooltip {
        display: block;
    }

    .open_menu {
        padding: 1rem 1rem;
        border-radius: 0.5rem;
        border: none;
    }
    .open_modal {
        padding: 1rem 1rem;
        border-radius: 0.5rem;
        border: none;
    }

    .mainbar__button.active {
        background-color: black;
        filter: invert(1);
    }

    .mainbar__button:hover {
        background-color: #27272d;
    }

    .mainbar__tooltip {
        display: none;
        position: absolute;
        z-index: 100000;
        color: white;
        background-color: #27272d;
        bottom: -6rem;
        left: 50%;
        transform: translateX(-50%);
        padding: 1rem 2rem;
    }

    .mainbar__tooltip::before {
        content: "";
        position: absolute;
        background-color: #27272d;
        top: -8%;
        left: 50%;
        transform: translateX(-50%) rotateZ(45deg);
        width: 20px;
        aspect-ratio: 1;
    }

    .mainbar__button:hover .mainbar__tooltip {
        display: block;
    }
</style>

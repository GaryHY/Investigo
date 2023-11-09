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

    import { openMenu } from "../scripts/menu";

    // Modal
    import Modal from "./Modal.svelte";
    import PreviewModal from "../Modals/PreviewModal.svelte";
    import { openModal } from "../scripts/modal";

    const closeModal = () => {
        const modal = document.querySelector(".modal");
        if (modal != null) {
            modal.close();
        }
    };
</script>

{#if editor}
    <div class="main_bar">
        <!-- TODO: Faire une select list pour les tailles de header. -->
        <!-- TODO: Ou encore faire une analyse pour voir les niveaux de heading dont j'ai besoin. -->
        <button
            class="mainbar__button"
            on:click={() => {
                editor.chain().focus().toggleHeading({ level: 1 }).run();
            }}
            class:active={editor.isActive("heading", { level: 1 })}
        >
            H1
            <div class="mainbar__tooltip">header h1</div>
        </button>
        <button
            class="mainbar__button"
            on:click={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()}
            class:active={editor.isActive("heading", { level: 2 })}
        >
            H2
            <div class="mainbar__tooltip">header h2</div>
        </button>
        <button
            class="mainbar__button"
            on:click={() => editor.chain().focus().setParagraph().run()}
            class:active={editor.isActive("paragraph")}
        >
            P
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
            on:click={() => editor.chain().focus().setTextAlign("left").run()}
            class:active={editor.isActive({ textAlign: "left" })}
        >
            <img src={TALeft} alt="left align icon" />
            <div class="mainbar__tooltip">Aligner a gauche</div>
        </button>

        <button
            class="mainbar__button"
            on:click={() => editor.chain().focus().setTextAlign("center").run()}
            class:active={editor.isActive({ textAlign: "center" })}
        >
            <img src={TACenter} alt="center align icon" />
            <div class="mainbar__tooltip">Aligner au centre</div>
        </button>

        <button
            class="mainbar__button"
            on:click={() => editor.chain().focus().setTextAlign("right").run()}
            class:active={editor.isActive({ textAlign: "right" })}
        >
            <img src={TARight} alt="right align icon" />
            <div class="mainbar__tooltip">Aligner a droite</div>
        </button>
        <Modal>
            <PreviewModal />
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
{/if}

<div class="main_bar">
    <dialog class="modal">
        <h2>Un titre juste pour la forme</h2>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            consectetur officia excepturi laborum, dolore ullam eveniet quod eum
            maiores assumenda libero, sint nemo? Libero quod sed velit? Magnam,
            voluptates et! Eveniet non cumque id odio incidunt soluta, eum animi
            laborum facilis. Asperiores corrupti praesentium pariatur quaerat
            rem ducimus earum, corporis eius sed animi voluptas amet aspernatur
            natus dolorum placeat assumenda culpa molestiae ipsum neque soluta
            repudiandae sapiente ut maxime architecto. In commodi deserunt
            recusandae alias iste doloribus similique ullam debitis!
        </p>
        <button class="close" on:click={closeModal}>Close</button>
    </dialog>
    <button class="mainbar__button open_modal" on:click={openModal}>
        <svg
            width="26"
            height="30"
            viewBox="0 0 26 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 13V12H2V13H3ZM11 13V12H10V13H11ZM11 21H10V22H11V21ZM25 7H26V6.586L25.708 6.292L25 7ZM19 1L19.708 0.292L19.414 0H19V1ZM3 14H5V12H3V14ZM4 22V17H2V22H4ZM4 17V13H2V17H4ZM5 16H3V18H5V16ZM6 15C6 15.2652 5.89464 15.5196 5.70711 15.7071C5.51957 15.8946 5.26522 16 5 16V18C5.79565 18 6.55871 17.6839 7.12132 17.1213C7.68393 16.5587 8 15.7956 8 15H6ZM5 14C5.26522 14 5.51957 14.1054 5.70711 14.2929C5.89464 14.4804 6 14.7348 6 15H8C8 14.2044 7.68393 13.4413 7.12132 12.8787C6.55871 12.3161 5.79565 12 5 12V14ZM10 13V21H12V13H10ZM11 22H13V20H11V22ZM16 19V15H14V19H16ZM13 12H11V14H13V12ZM16 15C16 14.2044 15.6839 13.4413 15.1213 12.8787C14.5587 12.3161 13.7956 12 13 12V14C13.2652 14 13.5196 14.1054 13.7071 14.2929C13.8946 14.4804 14 14.7348 14 15H16ZM13 22C13.7956 22 14.5587 21.6839 15.1213 21.1213C15.6839 20.5587 16 19.7957 16 19H14C14 19.2652 13.8946 19.5196 13.7071 19.7071C13.5196 19.8946 13.2652 20 13 20V22ZM18 12V22H20V12H18ZM19 14H24V12H19V14ZM19 18H22V16H19V18ZM2 10V3H0V10H2ZM24 7V10H26V7H24ZM3 2H19V0H3V2ZM18.292 1.708L24.292 7.708L25.708 6.292L19.708 0.292L18.292 1.708ZM2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2V0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3H2ZM0 24V27H2V24H0ZM3 30H23V28H3V30ZM26 27V24H24V27H26ZM23 30C23.7957 30 24.5587 29.6839 25.1213 29.1213C25.6839 28.5587 26 27.7956 26 27H24C24 27.2652 23.8946 27.5196 23.7071 27.7071C23.5196 27.8946 23.2652 28 23 28V30ZM0 27C0 27.7956 0.316071 28.5587 0.87868 29.1213C1.44129 29.6839 2.20435 30 3 30V28C2.73478 28 2.48043 27.8946 2.29289 27.7071C2.10536 27.5196 2 27.2652 2 27H0Z"
                fill="#BDBDBD"
            />
        </svg>
        <div class="mainbar__tooltip">Apercu PDF</div>
    </button>
    <button class="mainbar__button open_menu" on:click={openMenu}>
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_62_9)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 7.03125C0 6.65829 0.148158 6.3006 0.411881 6.03688C0.675604 5.77316 1.03329 5.625 1.40625 5.625H28.5938C28.9667 5.625 29.3244 5.77316 29.5881 6.03688C29.8518 6.3006 30 6.65829 30 7.03125C30 7.40421 29.8518 7.7619 29.5881 8.02562C29.3244 8.28934 28.9667 8.4375 28.5938 8.4375H1.40625C1.03329 8.4375 0.675604 8.28934 0.411881 8.02562C0.148158 7.7619 0 7.40421 0 7.03125ZM0 15C0 14.627 0.148158 14.2694 0.411881 14.0056C0.675604 13.7419 1.03329 13.5938 1.40625 13.5938H28.5938C28.9667 13.5938 29.3244 13.7419 29.5881 14.0056C29.8518 14.2694 30 14.627 30 15C30 15.373 29.8518 15.7306 29.5881 15.9944C29.3244 16.2581 28.9667 16.4062 28.5938 16.4062H1.40625C1.03329 16.4062 0.675604 16.2581 0.411881 15.9944C0.148158 15.7306 0 15.373 0 15ZM1.40625 21.5625C1.03329 21.5625 0.675604 21.7107 0.411881 21.9744C0.148158 22.2381 0 22.5958 0 22.9688C0 23.3417 0.148158 23.6994 0.411881 23.9631C0.675604 24.2268 1.03329 24.375 1.40625 24.375H28.5938C28.9667 24.375 29.3244 24.2268 29.5881 23.9631C29.8518 23.6994 30 23.3417 30 22.9688C30 22.5958 29.8518 22.2381 29.5881 21.9744C29.3244 21.7107 28.9667 21.5625 28.5938 21.5625H1.40625Z"
                    fill="#BDBDBD"
                />
            </g>
            <defs>
                <clipPath id="clip0_62_9">
                    <rect width="30" height="30" fill="white" />
                </clipPath>
            </defs>
        </svg>
        <div class="mainbar__tooltip">Apercu image</div>
    </button>
</div>

<style>
    /* NOTE: En attendant d'avoir les autres boutons */
    .open_modal {
        margin-left: auto;
    }
    .main_bar {
        display: flex;
        align-items: center;
        padding-inline: 2rem;
        gap: 0.5rem;
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

    /* TODO: A ajouter des que je mets les svg */

    .mainbar__button:hover path {
        fill: white;
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

    dialog {
        width: 600px;
        padding: 2rem;
        border: none;
        border-radius: 0.5rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        /* background-color: #171717; */
        /* color: white; */
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

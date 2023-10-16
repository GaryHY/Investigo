<script>
    import { onMount, onDestroy } from "svelte";
    import { Editor } from "@tiptap/core";
    import StarterKit from "@tiptap/starter-kit";

    // TODO: C'est deux elements devraient etre dans un store pour que je puisse les etudier en paix.

    let element;
    let editor;

    onMount(() => {
        editor = new Editor({
            element: element,
            extensions: [StarterKit],
            content: "<p>Hello World! 🌍️ </p>",
            onTransaction: () => {
                // force re-render so `editor.isActive` works as expected
                editor = editor;
            },
        });
    });

    onDestroy(() => {
        if (editor) {
            editor.destroy();
        }
    });

    // NOTE: Le javascript de l'ancienne mainbar en fait.
    import PreviewModal from "../Modals/PreviewModal.svelte";

    const openMenu = () => {
        const menu = document.querySelector(".menu");
        if (menu != null) {
            const isVisible = menu.getAttribute("data-visible");
            isVisible === "true"
                ? menu.setAttribute("data-visible", "false")
                : menu.setAttribute("data-visible", "true");
        }
    };

    const openModal = () => {
        const modal = document.querySelector(".modal");
        if (modal != null) {
            modal.showModal();
        }
    };

    // NOTE: Le javascript de l'ancien main en fait.
    const scrollMenu = (e) => {
        const menu = document.querySelector(".menu");
        if (menu != null) {
            menu.style.top = `${e.explicitOriginalTarget.scrollTop}px`;
            menu.style.translateX = "-100%";
        }
    };
</script>

{#if editor}
    <!-- <div class="editor__control"> -->
    <div class="main_bar">
        <button
            on:click={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()}
            class:active={editor.isActive("heading", { level: 1 })}
        >
            <svg
                class="test"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_62_9)">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 7.03125C0 6.65829 0.148158 6.3006 0.411881 6.03688C0.675604 5.77316 1.03329 5.625 1.40625 5.625H28.5938C28.9667 5.625 29.3244 5.77316 29.5881 6.03688C29.8518 6.3006 30 6.65829 30 7.03125C30 7.40421 29.8518 7.7619 29.5881 8.02562C29.3244 8.28934 28.9667 8.4375 28.5938 8.4375H1.40625C1.03329 8.4375 0.675604 8.28934 0.411881 8.02562C0.148158 7.7619 0 7.40421 0 7.03125ZM0 15C0 14.627 0.148158 14.2694 0.411881 14.0056C0.675604 13.7419 1.03329 13.5938 1.40625 13.5938H28.5938C28.9667 13.5938 29.3244 13.7419 29.5881 14.0056C29.8518 14.2694 30 14.627 30 15C30 15.373 29.8518 15.7306 29.5881 15.9944C29.3244 16.2581 28.9667 16.4062 28.5938 16.4062H1.40625C1.03329 16.4062 0.675604 16.2581 0.411881 15.9944C0.148158 15.7306 0 15.373 0 15ZM1.40625 21.5625C1.03329 21.5625 0.675604 21.7107 0.411881 21.9744C0.148158 22.2381 0 22.5958 0 22.9688C0 23.3417 0.148158 23.6994 0.411881 23.9631C0.675604 24.2268 1.03329 24.375 1.40625 24.375H28.5938C28.9667 24.375 29.3244 24.2268 29.5881 23.9631C29.8518 23.6994 30 23.3417 30 22.9688C30 22.5958 29.8518 22.2381 29.5881 21.9744C29.3244 21.7107 28.9667 21.5625 28.5938 21.5625H1.40625Z"
                        fill="#000000"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_62_9">
                        <rect width="30" height="30" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </button>
        <button
            on:click={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()}
            class:active={editor.isActive("heading", { level: 2 })}
        >
            H2
        </button>
        <button
            on:click={() => editor.chain().focus().setParagraph().run()}
            class:active={editor.isActive("paragraph")}
        >
            P
            <div class="mainbar__tooltip">Parargraphe</div>
        </button>

        <PreviewModal />
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
{/if}

<div class="main" on:scroll={scrollMenu}>
    <div class="menu" data-visible="false">
        <div class="bloc_image">1</div>
        <div class="bloc_image">2</div>
        <div class="bloc_image">3</div>
        <div class="bloc_image">4</div>
        <div class="bloc_image">5</div>
        <div class="bloc_image">6</div>
        <div class="bloc_image">7</div>
    </div>
    <div class="template">
        <img
            class="imgtest"
            src="http://via.placeholder.com/40?text=1"
            alt="phototest"
        />
        <h2>Un titre pour tester en fait.</h2>
    </div>
    <div bind:this={element} />
</div>

<style>
    .editor__control {
        background-color: hotpink;
        padding: 1rem 2rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    /* NOTE: Je veux que tous mes boutons aient les memes problemes. */
    /* .editor__control > button { */
    .main_bar > button {
        width: 4rem;
    }
    /* .editor__control > button:hover { */
    .main_bar > button:hover {
        cursor: pointer;
    }

    .template {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-inline: 3rem;
    }

    button {
        padding: 0.5rem;
        border: none;
        border-radius: 0.2rem;
    }
    button.active {
        background: black;
        color: white;
    }

    /* NOTE: Le css de la previous mainbar */
    .open_modal {
        margin-left: auto;
    }

    .open_modal {
        padding: 1rem 1rem;
        border-radius: 0.5rem;
        border: none;
    }

    .main_bar {
        display: flex;
        align-items: center;
        padding-inline: 2rem;
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

    /* NOTE: Cette animation me fait un mouvement saccade donc non merci */
    /* dialog[open] { */
    /*     animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); */
    /* } */

    /* NOTE: Le css de l'ancien main en fait. */
    .main {
        color: black;
        position: relative;
        border-radius: 2rem;
    }

    .menu {
        background-color: #d9d9d9;
        width: 300px;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        /* TODO: Refaire cela avec framer motion. */
        transition: transform 350ms ease-out;
        overflow-y: scroll;
        /* border-top-left-radius: 2rem; */
        /* border-top-right-radius: 2rem; */
    }

    /* TODO: Je ne sais pas faire fonctionner ce truc en fait. */
    .bloc_image::nth-child(1) {
        border: 10px solid blue;
        background-color: red;
    }

    .menu[data-visible="false"] {
        transform: translateX(100%);
    }

    .bloc_image {
        width: 240px;
        aspect-ratio: 1;
        background-color: hotpink;
        margin-inline: auto;
        margin-top: 2rem;
        font-size: 3rem;
        display: grid;
        place-content: center;
    }
</style>

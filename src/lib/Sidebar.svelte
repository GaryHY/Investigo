<script lang="ts">
    // TODO: Make the modal for the photo, envoyer et reseaux part
    import sidebarState from "../stores/sidebar";
    import { invoke } from "@tauri-apps/api/tauri";
    // const invoke = window.__TAURI__.invoke

    // NOTE: Check if it the good  type
    // const handleSidebarClick = (e: MouseEvent) => {
    const handleSidebarClick = (e) => {
        const active__button = document.querySelector(".actif");
        if (active__button != null) {
            active__button.classList.remove("actif");
        }
        const closestButton = e.target.closest(".highlight");
        if (closestButton != null) {
            closestButton.classList.add("actif");
            sidebarState.set(closestButton.id);
        }
        invoke("greet").then((message) => console.log(message));
    };

    // icons
    import Info from "../Icons/Sidebar/Info.svg";
    import Rapport from "../Icons/Sidebar/Rapport.svg";
    import Devis from "../Icons/Sidebar/Devis.svg";
    import Envoyer from "../Icons/Sidebar/Envoyer.svg";
    import Mandat from "../Icons/Sidebar/Mandat.svg";
    import Photo from "../Icons/Sidebar/Photo.svg";
    import Facture from "../Icons/Sidebar/Facture.svg";
    import Reseaux from "../Icons/Sidebar/Reseaux.svg";

    // modal
    import Modal from "./Modal.svelte";
    import InfoModal from "../Modals/InfoModal.svelte";
    import PhotoModal from "../Modals/InfoModal.svelte";
    import EnvoyerModal from "../Modals/EnvoyerModal.svelte";
    import ReseauxModal from "../Modals/ReseauxModal.svelte";
    import { openModal } from "../scripts/modal";
</script>

<div class="sidebar">
    <Modal>
        <InfoModal />
    </Modal>
    <button
        id="info"
        class="sidebar__button"
        on:click={(e) => {
            openModal(e);
        }}
    >
        <img class="sidebar__img" src={Info} alt="" />
        <div class="tooltip">Informations</div>
    </button>
    <button
        id="rapport"
        class="sidebar__button highlight actif"
        on:click={handleSidebarClick}
    >
        <img class="sidebar__img" src={Rapport} alt="" />
        <div class="tooltip">Rapport</div>
    </button>
    <button
        id="devis"
        class="sidebar__button highlight"
        on:click={handleSidebarClick}
    >
        <img class="sidebar__img" src={Devis} alt="" />
        <div class="tooltip">Devis</div>
    </button>
    <button
        id="mandat"
        class="sidebar__button highlight"
        on:click={handleSidebarClick}
    >
        <img class="sidebar__img" src={Mandat} alt="" />
        <div class="tooltip">Mandat</div>
    </button>
    <button
        id="facture"
        class="sidebar__button highlight"
        on:click={handleSidebarClick}
    >
        <img class="sidebar__img" src={Facture} alt="" />
        <div class="tooltip">Facture</div>
    </button>
    <Modal>
        <PhotoModal />
    </Modal>
    <button
        on:click={(e) => {
            openModal(e);
        }}
        class="sidebar__button highlight"
    >
        <img class="sidebar__img" src={Photo} alt="" />
        <div class="tooltip">Photo</div>
    </button>
    <Modal>
        <EnvoyerModal />
    </Modal>
    <button
        on:click={(e) => {
            openModal(e);
        }}
        class="sidebar__button highlight"
    >
        <img class="sidebar__img" src={Envoyer} alt="" />
        <div class="tooltip">Envoyer</div>
    </button>
    <Modal>
        <ReseauxModal />
    </Modal>
    <button
        on:click={(e) => {
            openModal(e);
        }}
        class="sidebar__button highlight"
    >
        <img class="sidebar__img" src={Reseaux} alt="" />
        <div class="tooltip">Reseaux</div>
    </button>
</div>

<style>
    .sidebar {
        display: flex;
        flex-direction: column;
        padding-top: 7rem;
        outline: 2px solid blue;
    }

    .sidebar__button {
        border: none;
        background: none;
        width: 100%;
        padding-block: 1.5rem;
        /* NOTE: Pour les tooltips */
        position: relative;
    }

    .sidebar__img {
        filter: brightness(0.6);
        margin-inline: auto;
    }

    /* .sidebar__button:hover, */
    .highlight:hover,
    .actif {
        background-color: #27272d;
    }

    .actif .sidebar__img {
        filter: brightness(2);
    }

    .tooltip {
        display: none;
        position: absolute;
        z-index: 100000;
        color: white;
        background-color: #27272d;
        right: -9.5rem;
        top: 50%;
        transform: translateY(-50%);
        padding: 1rem 2rem;
    }

    .tooltip::before {
        content: "";
        position: absolute;
        background-color: #27272d;
        left: -8%;
        top: 50%;
        transform: translateY(-50%) rotateZ(45deg);
        width: 20px;
        aspect-ratio: 1;
    }

    .sidebar__button:hover .tooltip {
        display: block;
    }
</style>

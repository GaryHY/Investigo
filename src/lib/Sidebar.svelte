<script lang="ts">
    let active__button = "rapport";
    import sidebarState from "../stores/sidebar";
    sidebarState.subscribe((newValue) => {
        active__button = newValue;
    });

    function setState(e) {
        const closestButton = e.target.closest(".highlight");
        if (closestButton != null) {
            sidebarState.set(closestButton.id);
        }
    }

    let file__missing = {
        mandat: true,
        devis: false,
        facture: true,
        pompier: true,
        huissier: false,
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
    import Fire from "../Icons/Sidebar/Fire.svg";
    import Justice from "../Icons/Sidebar/Justice.svg";
    import Person from "../Icons/Sidebar/Person.svg";

    // modal
    import Modal from "./Modal.svelte";
    import InfoModal from "../Modals/InfoModal.svelte";
    import PhotoModal from "../Modals/PhotoModal.svelte";
    import EnvoyerModal from "../Modals/EnvoyerModal.svelte";
    import ReseauxModal from "../Modals/ReseauxModal.svelte";
    import { openModal } from "../scripts/modal";
</script>

<div class="sidebar">
    <Modal>
        <InfoModal />
    </Modal>
    <button id="info" class="sidebar__button" on:click={openModal}>
        <img class="sidebar__img" src={Info} alt="" />
        <div class="tooltip">Infos</div>
    </button>
    <button
        id="rapport"
        class="sidebar__button highlight"
        class:actif={active__button == "rapport"}
        on:click={setState}
    >
        <img class="sidebar__img" src={Rapport} alt="" />
        <div class="tooltip">Rapport</div>
    </button>
    <button
        id="devis"
        class="sidebar__button highlight"
        class:actif={active__button == "devis"}
        on:click={setState}
    >
        <img class="sidebar__img" src={Devis} alt="" />
        <div class="tooltip">Devis</div>
        <div class="file__missing" data-done={file__missing.devis} />
    </button>
    <button
        id="mandat"
        class="sidebar__button highlight"
        class:actif={active__button == "mandat"}
        on:click={setState}
    >
        <img class="sidebar__img" src={Mandat} alt="" />
        <div class="tooltip">Mandat</div>
        <div class="file__missing" data-done={file__missing.mandat} />
    </button>
    <button
        id="facture"
        class="sidebar__button highlight"
        class:actif={active__button == "facture"}
        on:click={setState}
    >
        <img class="sidebar__img" src={Facture} alt="" />
        <div class="tooltip">Facture</div>
        <div class="file__missing" data-done={file__missing.facture} />
    </button>
    <Modal>
        <PhotoModal />
    </Modal>
    <button id="photos" on:click={openModal} class="sidebar__button highlight">
        <img class="sidebar__img" src={Photo} alt="" />
        <div class="tooltip">Photo</div>
    </button>
    <button
        id="fire"
        class="sidebar__button highlight"
        class:actif={active__button == "fire"}
        on:click={setState}
    >
        <img class="sidebar__img" src={Fire} alt="" />
        <div class="tooltip">Pompiers</div>
        <div class="file__missing" data-done={file__missing.pompier} />
    </button>
    <button
        id="justice"
        class="sidebar__button highlight"
        class:actif={active__button == "justice"}
        on:click={setState}
    >
        <img class="sidebar__img" src={Justice} alt="" />
        <div class="tooltip">Huissier</div>
        <div class="file__missing" data-done={file__missing.huissier} />
    </button>
    <button
        id="person"
        class="sidebar__button highlight"
        class:actif={active__button == "person"}
        on:click={setState}
    >
        <img class="sidebar__img" src={Person} alt="" />
        <div class="tooltip">Rencontre</div>
    </button>
    <Modal>
        <EnvoyerModal />
    </Modal>
    <button on:click={openModal} class="sidebar__button highlight">
        <img class="sidebar__img" src={Envoyer} alt="" />
        <div class="tooltip">Envoyer</div>
    </button>
    <Modal>
        <ReseauxModal />
    </Modal>
    <button on:click={openModal} class="sidebar__button highlight">
        <img class="sidebar__img" src={Reseaux} alt="" />
        <div class="tooltip">Reseaux</div>
    </button>
</div>

<style>
    .sidebar {
        display: flex;
        flex-direction: column;
        padding-top: 4.2rem;
    }

    .sidebar__button {
        border: none;
        background: none;
        margin-inline: auto;
        width: 100%;
        padding-block: 1.1rem;
        /* NOTE: Pour les tooltips */
        position: relative;
        outline: 2px solid #27272d;
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

    .file__missing {
        position: absolute;
        right: 0;
        top: -0.5rem;
        right: 1rem;
        top: 1rem;
        width: 10px;
        border-radius: 100vw;
        aspect-ratio: 1;
        background-color: red;
    }

    .file__missing[data-done="false"] {
        background-color: limegreen;
    }

    .sidebar__button:hover .tooltip {
        display: block;
    }
</style>

<script>
    // import des svg
    import Folder from "../Icons/TopBar/Folder.svg";
    import Loupe from "../Icons/TopBar/Loupe.svg";
    import Plus from "../Icons/TopBar/Plus.svg";
    import Chat from "../Icons/TopBar/Chat.svg";
    import Params from "../Icons/TopBar/Params.svg";

    import {
        openSearchModal,
        closeSearchModal,
        openParameterModal,
        closeParameterModal,
    } from "../scripts/searchModal";

    import { openModal } from "../scripts/modal";
    import Modal from "./Modal.svelte";
    import SearchModal from "../Modals/SearchModal.svelte";
    import ParameterModal from "../Modals/ParameterModal.svelte";
    import NewFolderModal from "../Modals/NewFolderModal.svelte";
    import ChatModal from "../Modals/ChatModal.svelte";

    // NOTE: Surement une fonction async ensuite il faudra valider tout cela (avec Zod ?)
    // const handleData = (e) => {
    const handleData = () => {
        // console.log(e.target.value);
    };

    let searchQuery = "";
    let filtered_list = [];
    function filterList() {
        filtered_list = list.filter((item) => {
            return item.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }
</script>

<header class="header">
    <div class="container">
        <div class="header__content">
            <div class="folder">
                <button class="current header__button">
                    <img src={Folder} alt="folder__icon" />
                    <div class="header__tooltip tooltip_chat">
                        Dossier actuel
                    </div>
                </button>
                <p class="folder__client">HENRY Gary</p>
            </div>
            <div class="searchBar">
                <div class="search__icon__container">
                    <img class="search__icon" src={Loupe} alt="" />
                </div>
                <input
                    class="searchBar__input"
                    type="text"
                    name="search"
                    placeholder="Un texte a chercher"
                    on:input={handleData}
                    on:focus={openSearchModal}
                    on:blur={closeSearchModal}
                    bind:value={searchQuery}
                />
            </div>
            <SearchModal />
            <div class="buttons">
                <div class="newChat">
                    <Modal>
                        <ChatModal />
                    </Modal>
                    <button
                        on:click={(e) => {
                            openModal(e);
                        }}
                        class="chat header__button"
                    >
                        <img src={Chat} alt="chat icon" />
                        <div class="header__tooltip tooltip_chat">
                            Recherche avancee
                        </div>
                    </button>
                </div>

                <div class="newFolder">
                    <Modal>
                        <NewFolderModal />
                    </Modal>
                    <button
                        on:click={(e) => {
                            openModal(e);
                        }}
                        class="add header__button"
                    >
                        <img src={Plus} alt="plus icon" />
                        <div class="header__tooltip tooltip_add">
                            Nouveau Dossier
                        </div>
                    </button>
                </div>
                <div class="newSettings">
                    <ParameterModal />
                    <button
                        class="setting header__button"
                        on:click={openParameterModal}
                        on:blur={closeParameterModal}
                    >
                        <img src={Params} alt="parameters icon" />
                        <div class="header__tooltip tooltip_params">
                            Parametres
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</header>

<style>
    header {
        background-color: #171717;
        padding-block: 0.5rem;
        width: 100vw;
    }

    .header__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .container {
        width: 90vw;
        margin-inline: auto;
    }

    .searchBar {
        --border-radius: 1rem;
        width: 45%;
        display: flex;
        align-items: center;
        /* outline: 2px solid #171717; */
        border-radius: var(--border-radius);

        position: absolute;
        left: 50%;
        top: 1.2%;
        transform: translateX(-50%);
    }

    /* NOTE: Is it useful ? */
    ::placeholder {
        color: #bdbdbd;
        opacity: 1;
    }

    .search__icon__container,
    .searchBar__input {
        border: 1px solid white;
    }

    .searchBar__input:is(:focus) {
        border: 1px solid #2ea6ff;
        outline: none;
    }

    .search__icon__container {
        padding: 0.75rem 2rem;
        background-color: #27272d;
        border-right: none;
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
    }

    .search__icon__container:is(:hover, :focus-visible) {
        cursor: pointer;
    }

    .searchBar__input {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
        width: 100%;
        padding: 0.7rem 1rem;
        background-color: #111111;
        color: white;
        font-size: 1.4rem;
    }

    /* .searchBar__input:is(:focus, :focus-visible) { */
    /* outline: none; */
    /* border: 2px solid #2ea6ff; */
    /* border: none; */
    /* outline: 2px solid #2ea6ff; */
    /* } */

    .header__button {
        border: none;
        padding: 1rem;
        color: white;
        border-radius: 0.5rem;
        position: relative;
    }

    .buttons {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .folder {
        /* TODO: Organiser cela pour ne pas avoir a gerer cela */
        color: white;
        font-size: 1.2rem;
        margin-left: 1rem;
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .add {
        background-color: #fc76a1;
    }

    .setting {
        background-color: #71c4b9;
    }

    .chat {
        background-color: #ae68e6;
    }

    .current {
        background-color: #f7d002;
    }

    .header__tooltip {
        display: none;
        position: absolute;
        z-index: 100000;
        color: white;
        background-color: #27272d;
        left: 50%;
        bottom: -7rem;
        transform: translateX(-50%);
        padding: 1rem 2rem;
    }

    /* .tooltip_add::before, */
    /* .tooltip_params::before { */
    .header__tooltip::before {
        content: "";
        position: absolute;
        background-color: #27272d;
        left: 50%;
        top: -9%;
        transform: translateX(-50%) rotateZ(45deg);
        width: 20px;
        aspect-ratio: 1;
    }

    .tooltip_params {
        bottom: -5rem;
    }

    .header__button:hover .header__tooltip {
        display: block;
    }
</style>

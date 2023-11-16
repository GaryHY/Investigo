<script>
    // import des svg
    import Folder from "../Icons/TopBar/Folder.svg";
    import Loupe from "../Icons/TopBar/Loupe.svg";
    import Plus from "../Icons/TopBar/Plus.svg";
    import Chat from "../Icons/TopBar/Chat.svg";
    import Params from "../Icons/TopBar/Params.svg";
    import Question from "../Icons/TopBar/Question.svg";
    import Update from "../Icons/TopBar/Update.svg";
    import Requete from "../Icons/TopBar/Requete.svg";

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
    import DocumentationModal from "../Modals/DocumentationModal.svelte";
    import UpdateModal from "../Modals/UpdateModal.svelte";
    import RequeteModal from "../Modals/RequeteModal.svelte";

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

    // NOTE: Je vais faire le button folder lancer des notifications juste pour tester :
    import { notifications } from "../stores/notifications";
    // TODO:Need to set this up by linking to the store value;
    let isFolderOpen = true;
</script>

<header class="header">
    <div class="container">
        <div class="header__content">
            <div style="display:flex; align-items:center">
                <div class="newFolder_button">
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
                <div class="folder">
                    <button
                        on:click={() =>
                            notifications.info(
                                "Les notifications semblent bien fonctionner.",
                                2000
                            )}
                        class="current header__button"
                        class:folderOpen={isFolderOpen}
                    >
                        <img src={Folder} alt="folder__icon" />
                        <div class="header__tooltip tooltip_chat">
                            Dossier actuel
                        </div>
                    </button>
                    {#if isFolderOpen}
                        <p class="folder__client">John DOE : #49348129</p>
                    {/if}
                </div>
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
                <div class="documentation">
                    <Modal>
                        <DocumentationModal />
                    </Modal>
                    <button
                        on:click={(e) => {
                            openModal(e);
                        }}
                        class="doc header__button"
                    >
                        <img src={Question} alt="doc icon" />
                        <div class="header__tooltip tooltip_chat">
                            Documentation
                        </div>
                    </button>
                </div>
                <div class="request__button">
                    <Modal>
                        <RequeteModal />
                    </Modal>
                    <button
                        on:click={(e) => {
                            openModal(e);
                        }}
                        class="request header__button"
                    >
                        <img src={Requete} alt="request icon" />
                        <div class="header__tooltip tooltip_chat">Requete</div>
                    </button>
                </div>
                <div class="update_button">
                    <Modal>
                        <UpdateModal />
                    </Modal>
                    <button
                        on:click={(e) => {
                            openModal(e);
                        }}
                        class="update header__button"
                    >
                        <img src={Update} alt="update icon" />
                        <div class="header__tooltip tooltip_chat">
                            Mise a jour
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
        padding-block: 0.75rem;
        width: 100vw;
    }

    .header__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-block: 4px;
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
        border-radius: var(--border-radius);
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

    .header__button {
        color: white;
        border: none;
        padding: 0.75rem;
        border-radius: 0.5rem;
        position: relative;
    }

    .buttons {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .folder {
        color: white;
        font-size: 1.2rem;
        margin-left: 1rem;
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    /* TODO: Coder cela pour quand un folder n'a pas encore ete ouvert. */
    /* .folder__empty{} */

    .add {
        background-color: #fc76a1;
    }

    .setting {
        background-color: #71c4b9;
    }

    .chat {
        background-color: #ba90c6;
        background-color: #6867ac;
    }

    .current {
        background: none;
        border-radius: 100vw;
        border: 2px solid white;
        padding: 0.8rem 0.9rem;
    }

    .folderOpen {
        background-color: #f7d002;
        border: none;
        border-radius: 0.5rem;
        padding: 1rem;
    }

    .doc {
        background-color: #f4b7b6;
        background-color: #f75c03;
    }

    .update {
        background-color: #ae68e6;
    }

    .request {
        background-color: #b3f2dd;
        background-color: red;
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

<script>
    import Folder from "../Icons/TopBar/Folder.svg";
    import Loupe from "../Icons/TopBar/Loupe.svg";
    import Plus from "../Icons/TopBar/Plus.svg";

    import { openSearchModal, closeSearchModal } from "../scripts/searchModal";

    import Modal from "./Modal.svelte";
    import SearchModal from "../Modals/SearchModal.svelte";
    // import InfoModal from "../Modals/InfoModal.svelte";
    import { openModal } from "../scripts/modal";
    import NewFolderModal from "../Modals/NewFolderModal.svelte";

    // NOTE: Surement une fonction async ensuite il faudra valider tout cela (avec Zod ?)
    // const handleData = (e) => {
    const handleData = () => {
        // console.log(e.target.value);
    };

    const closeModal = () => {
        const modal = document.querySelector(".search__modal");
        modal.style.display = "none";
    };
    // TODO: Utiliser cette  valeur pour faire le filtrage
    let searchQuery = "";
    let filtered_list = [];
    // NOTE: Dans cette video, il utilisait la fonction suivante.
    function filterList() {
        // NOTE: Ce filtered list doit etre passe dans le modal
        filtered_list = list.filter((item) => {
            return item.toLowerCase().includes(searchQuery.toLowerCase());
        });
        // TODO: Pourquoi quand je tape "vu" j'ai svelte ? (La liste original contient react, svelte et vue)
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
                    on:focus={openSearchModal}
                    on:input={handleData}
                    on:blur={closeSearchModal}
                    bind:value={searchQuery}
                />
            </div>
            <SearchModal />
            <div class="buttons">
                <div class="newChat">
                    <button class="chat header__button">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M31.3846 0H2.61543C1.92179 0 1.25655 0.298511 0.766075 0.829864C0.275596 1.36122 4.73618e-05 2.08189 4.73618e-05 2.83333V31.1667C-0.00296863 31.707 0.138118 32.2367 0.406347 32.6922C0.674576 33.1477 1.05853 33.5096 1.51206 33.7344C1.85767 33.9087 2.23419 33.9994 2.61543 34C3.2294 33.9984 3.82299 33.7613 4.29091 33.3306C4.29871 33.3251 4.30584 33.3186 4.31216 33.3111L9.56253 28.3333H31.3846C32.0783 28.3333 32.7435 28.0348 33.234 27.5035C33.7245 26.9721 34 26.2514 34 25.5V2.83333C34 2.08189 33.7245 1.36122 33.234 0.829864C32.7435 0.298511 32.0783 0 31.3846 0ZM9.80773 16.2917C9.41977 16.2917 9.04053 16.167 8.71796 15.9335C8.39538 15.7 8.14397 15.3682 7.9955 14.9799C7.84704 14.5916 7.80819 14.1643 7.88388 13.7521C7.95957 13.3399 8.14638 12.9613 8.42071 12.6641C8.69504 12.3669 9.04455 12.1645 9.42505 12.0825C9.80555 12.0005 10.1999 12.0426 10.5584 12.2034C10.9168 12.3643 11.2231 12.6366 11.4387 12.9861C11.6542 13.3355 11.7693 13.7464 11.7693 14.1667C11.7693 14.7303 11.5626 15.2708 11.1947 15.6693C10.8269 16.0678 10.328 16.2917 9.80773 16.2917ZM17 16.2917C16.6121 16.2917 16.2328 16.167 15.9103 15.9335C15.5877 15.7 15.3363 15.3682 15.1878 14.9799C15.0393 14.5916 15.0005 14.1643 15.0762 13.7521C15.1519 13.3399 15.3387 12.9613 15.613 12.6641C15.8873 12.3669 16.2368 12.1645 16.6173 12.0825C16.9978 12.0005 17.3922 12.0426 17.7507 12.2034C18.1091 12.3643 18.4154 12.6366 18.631 12.9861C18.8465 13.3355 18.9616 13.7464 18.9616 14.1667C18.9616 14.7303 18.7549 15.2708 18.387 15.6693C18.0192 16.0678 17.5203 16.2917 17 16.2917ZM24.1923 16.2917C23.8044 16.2917 23.4251 16.167 23.1026 15.9335C22.78 15.7 22.5286 15.3682 22.3801 14.9799C22.2316 14.5916 22.1928 14.1643 22.2685 13.7521C22.3442 13.3399 22.531 12.9613 22.8053 12.6641C23.0796 12.3669 23.4291 12.1645 23.8096 12.0825C24.1901 12.0005 24.5845 12.0426 24.943 12.2034C25.3014 12.3643 25.6077 12.6366 25.8233 12.9861C26.0388 13.3355 26.1539 13.7464 26.1539 14.1667C26.1539 14.7303 25.9472 15.2708 25.5793 15.6693C25.2115 16.0678 24.7126 16.2917 24.1923 16.2917Z"
                                fill="white"
                            />
                        </svg>
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
                        <img src={Plus} alt="chat icon" />
                        <div class="header__tooltip tooltip_add">
                            Nouveau Dossier
                        </div>
                    </button>
                </div>
                <div class="newSettings">
                    <button class="setting header__button">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.4167 33.6667L11.75 28.3333C11.3889 28.1945 11.0483 28.0278 10.7283 27.8333C10.4083 27.6389 10.0961 27.4306 9.79167 27.2083L4.83333 29.2917L0.25 21.375L4.54167 18.125C4.51389 17.9306 4.5 17.7428 4.5 17.5617V16.4383C4.5 16.2572 4.51389 16.0695 4.54167 15.875L0.25 12.625L4.83333 4.70834L9.79167 6.79168C10.0972 6.56945 10.4167 6.36112 10.75 6.16668C11.0833 5.97223 11.4167 5.80557 11.75 5.66668L12.4167 0.333344H21.5833L22.25 5.66668C22.6111 5.80557 22.9517 5.97223 23.2717 6.16668C23.5917 6.36112 23.9039 6.56945 24.2083 6.79168L29.1667 4.70834L33.75 12.625L29.4583 15.875C29.4861 16.0695 29.5 16.2572 29.5 16.4383V17.5617C29.5 17.7428 29.4722 17.9306 29.4167 18.125L33.7083 21.375L29.125 29.2917L24.2083 27.2083C23.9028 27.4306 23.5833 27.6389 23.25 27.8333C22.9167 28.0278 22.5833 28.1945 22.25 28.3333L21.5833 33.6667H12.4167ZM17.0833 22.8333C18.6944 22.8333 20.0694 22.2639 21.2083 21.125C22.3472 19.9861 22.9167 18.6111 22.9167 17C22.9167 15.3889 22.3472 14.0139 21.2083 12.875C20.0694 11.7361 18.6944 11.1667 17.0833 11.1667C15.4444 11.1667 14.0622 11.7361 12.9367 12.875C11.8111 14.0139 11.2489 15.3889 11.25 17C11.25 18.6111 11.8122 19.9861 12.9367 21.125C14.0611 22.2639 15.4433 22.8333 17.0833 22.8333Z"
                                fill="white"
                            />
                        </svg>
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

    /* .bloc { */
    /*     width: 0px; */
    /*     aspect-ratio: 1; */
    /*     background-color: white; */
    /* } */

    .searchBar {
        --border-radius: 1rem;
        width: 45%;
        display: flex;
        align-items: center;
        outline: 2px solid #171717;
        border-radius: var(--border-radius);

        position: absolute;
        left: 50%;
        top: 1.2%;
        transform: translateX(-50%);
    }

    ::placeholder {
        color: #bdbdbd;
        opacity: 1;
    }

    .searchBar:is(:focus-within) {
        outline: 2px solid #2ea6ff;
        border-radius: var(--border-radius);
    }

    .search__icon__container {
        background-color: red;
        padding: 1rem 2rem;
        background-color: #27272d;
        border: 1px solid white;
        outline: 2px solid #171717;
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
        border: 1px solid white;
        background-color: #111111;
        color: white;
        font-size: 1.1rem;
    }

    .searchBar__input:is(:focus, :focus-visible) {
        outline: none;
        border: 2px solid #2ea6ff;
    }

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
        gap: 3rem;
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

<script lang="ts">
    // import des svg
    import Profile from "../Icons/Searchbar/Profile.svg";
    import Done from "../Icons/Searchbar/Done.svg";
    import EnCours from "../Icons/Searchbar/EnCours.svg";

    // TODO: Mettre cette interface dans les types plus tard
    interface IFolder {
        id: string;
        firstname: string;
        lastname: string;
        // TODO: Change le type du status pour avoir un truc plus strict.
        status: string;
    }

    // TODO: Mettre tout cela dans un store que je vais actualiser on change.
    let dossiers: IFolder[] = [
        {
            id: "173432383",
            firstname: "Gary",
            lastname: "HENRY",
            status: "todo",
        },
        {
            id: "493232783",
            firstname: "Livio",
            lastname: "HENRY",
            status: "ok",
        },
        {
            id: "849334905",
            firstname: "Serge",
            lastname: "HENRY",
            status: "todo",
        },
        {
            id: "449385037",
            firstname: "Chantal",
            lastname: "HENRY",
            status: "ok",
        },
    ];

    function openFolder(e) {
        // TODO: Find a way to get the info of the element clicked;
        console.log(
            "je click sur un bouton",
            e.target.closest(".folder__button")
        );
    }
</script>

<div class="search__modal">
    <ul role="list">
        {#each dossiers as dossier (dossier.id)}
            <button class="folder__button" on:mousedown={openFolder}>
                <li class="folder">
                    <div class="folder__left">
                        <div class="folder__perso">
                            <img src={Profile} alt="profile icon" />
                        </div>
                        <p class="folder__name">
                            {dossier.firstname}
                            {dossier.lastname}
                        </p>
                    </div>
                    <div class="folder__status" data-status="ok">
                        {#if dossier.status == "ok"}
                            <img src={Done} alt="done icon" />
                        {/if}
                        {#if dossier.status == "todo"}
                            <img src={EnCours} alt="done icon" />
                        {/if}
                    </div>
                </li>
            </button>
        {/each}
    </ul>
</div>

<style>
    .search__modal {
        display: none;
        position: absolute;
        width: 45%;
        left: 50%;
        transform: translateX(-50%);
        top: 10%;
        z-index: 100000;
        border: none;
        background-color: #171717;
        color: white;
        border: 2px solid white;
        border-radius: 1rem;
        overflow: hidden;
        outline: none;
        /* font-size: 1.3rem; */
    }

    .folder__button {
        border: none;
        background: transparent;
        display: block;
        width: 100%;
    }
    .folder {
        display: flex;
        padding: 1rem 3rem;
        align-items: center;
        justify-content: space-between;
        /* since it is a button */
        color: white;
    }

    .folder__left {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }
    .folder__name {
        font-size: 1.5rem;
    }

    .folder:is(:hover, :focus-visible) {
        cursor: pointer;
        background-color: #27272d;
    }
</style>

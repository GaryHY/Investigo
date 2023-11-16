<script>
    // Ici je mets le modal pour mon new folder
</script>

<div class="newFolderModal">
    <h2 class="tacenter">Information client</h2>
    <p class="tacenter">
        Veuillez renseigner les informations associes au dossier en cours.
        Attention, certains champs sont obligatoires.
    </p>
    <form class="form" action="">
        <div class="form__group">
            <label for="nom">nom</label>
            <input name="nom" type="text" />
        </div>
        <div class="form__group">
            <label for="prenom">prenom</label>
            <input name="prenom" type="text" />
        </div>
        <div class="form__group">
            <label for="client">client</label>
            <input name="client" type="text" />
        </div>
        <button class="submit__button" type="submit">Submit</button>
    </form>
</div>

<style>
    .newFolderModal {
        display: grid;
        gap: 1rem;
    }
    .form__group {
        display: flex;
        flex-direction: column;
        align-content: start;
        width: 100%;
    }

    .form {
        display: grid;
        gap: 1rem;
    }

    input {
        padding: 0.5rem;
        font-size: 1.5rem;
        border-radius: 0.5rem;
        border: 2px solid white;
    }

    input:focus {
        /* TODO: Trouver la couleur dans le site de tonton Frantz */
        border: 2px solid #2ea6ff;
        outline: none;
    }

    label {
        text-transform: capitalize;
    }

    h2 {
        margin-inline: auto;
    }

    p {
        margin-inline: auto;
        width: 70%;
    }

    .submit__button {
        margin-top: 2rem;
        border: none;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: hsl(206, 100%, 39%);
        color: white;
        font-weight: 500;
        font-size: 1.2rem;
    }

    .submit__button:hover {
        cursor: pointer;
        background-color: hsl(206, 100%, 59%);
    }
</style>

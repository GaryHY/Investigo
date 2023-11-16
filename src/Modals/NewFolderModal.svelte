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
        <div class="flex-group">
            <div class="form__group">
                <label for="nom">nom</label>
                <input name="nom" type="text" />
            </div>
            <div class="form__group">
                <label for="prenom">prenom</label>
                <input name="prenom" type="text" />
            </div>
        </div>
        <h2 class="taleft">Le client</h2>
        <div class="flex-group">
            <!-- TODO: Bind the values from input et select -->
            <div class="form__group client__input">
                <label for="client">client</label>
                <input name="client" type="text" />
            </div>
            <select name="client" id="client">
                <option value="Client 1">Client 1</option>
                <option value="Client 2">Client 2</option>
                <option value="Client 3">Client 3</option>
            </select>
        </div>

        <h2 class="taleft">Interlocuteur</h2>
        <div class="flex-group">
            <!-- TODO: Bind the values from input et select -->
            <div class="form__group client__input">
                <label for="client">nom</label>
                <input
                    required
                    title="Vous devez renseigne le nom du client"
                    name="client"
                    type="text"
                />
            </div>
            <select name="nom" id="nom">
                <option value="Nom 1">Nom 1</option>
                <option value="Nom 2">Nom 2</option>
                <option value="Nom 3">Nom 3</option>
            </select>
        </div>
        <div class="flex-group">
            <!-- TODO: Bind the values from input et select -->
            <div class="form__group client__input">
                <label for="client">prenom</label>
                <input
                    required
                    title="Vous devez renseigne le nom du client"
                    name="client"
                    type="text"
                />
            </div>
            <select name="prenom" id="prenom">
                <option value="Prenom 1">Prenom 1</option>
                <option value="Prenom 2">Prenom 2</option>
                <option value="Prenom 3">Prenom 3</option>
            </select>
        </div>
        <button class="submit__button" type="submit">Submit</button>
    </form>
</div>

<style>
    .newFolderModal {
        display: grid;
        gap: 1rem;
        --border-size: 3px;
    }

    .form__group {
        display: flex;
        flex-direction: column;
        align-content: start;
        width: 100%;
    }

    .flex-group {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    select {
        width: 100%;
        font-size: 1.2rem;
        padding: 0.75rem 0.5rem;
        margin-top: auto;
    }

    .form {
        display: grid;
        gap: 1rem;
    }

    input {
        padding: 0.5rem;
        font-size: 1.5rem;
        border-radius: 0.5rem;
        border: var(--border-size) solid white;
    }

    input:focus {
        /* TODO: Trouver la couleur dans le site de tonton Frantz */
        border: var(--border-size) solid #2ea6ff;
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

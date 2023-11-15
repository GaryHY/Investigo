<script>
    // Pour les requetes, il y aura toujours un oui + non button ainsi que "see details buttons dont les actions sont a
    // preciser."
    let dossier_name = "John DOE";
    // TODO: Connecter tout cela un store puis looper sur les elements contenus dans le store.
</script>

<div class="requests space-large">
    <h2 class="request__title">Notifications</h2>
    <div class="request">
        <p class="request__text">
            Voulez vous supprimer le dossier {dossier_name} ?
        </p>
        <form method="POST" action="">
            <div class="containers">
                <label hidden class="request__container" for="valid" />
                <div>
                    <input hidden name="valid" type="checkbox" id="valid" />
                    <span class="valid checkmark" />
                </div>
                <label hidden class="request__container" for="valid" />
                <div>
                    <input hidden name="invalid" type="checkbox" id="invalid" />
                    <span class="invalid checkmark" />
                </div>
                <a class="details" href="/details">Details</a>
            </div>
        </form>
    </div>
    <div class="request">
        <p class="request__text">
            Voulez vous supprimer le dossier {dossier_name} ?
        </p>
        <form method="POST" action="">
            <div class="containers">
                <label hidden class="request__container" for="valid" />
                <div>
                    <input hidden name="valid" type="checkbox" id="valid" />
                    <span class="valid checkmark" />
                </div>
                <label hidden class="request__container" for="valid" />
                <div>
                    <input hidden name="invalid" type="checkbox" id="invalid" />
                    <span class="invalid checkmark" />
                </div>
                <a class="details" href="/details">Details</a>
            </div>
        </form>
    </div>

    <div class="request">
        <p class="request__text">
            Voulez vous supprimer le dossier {dossier_name} ?
        </p>
        <form method="POST" action="">
            <div class="containers">
                <label hidden class="request__container" for="valid" />
                <div>
                    <input hidden name="valid" type="checkbox" id="valid" />
                    <span class="valid checkmark" />
                </div>
                <label hidden class="request__container" for="valid" />
                <div>
                    <input hidden name="invalid" type="checkbox" id="invalid" />
                    <span class="invalid checkmark" />
                </div>
                <a class="details" href="/details">Details</a>
            </div>
        </form>
    </div>
    <div class="request">
        <p class="request__text">
            Voulez vous supprimer le dossier {dossier_name} ?
        </p>
        <form method="POST" action="">
            <div class="containers">
                <label hidden class="request__container" for="valid" />
                <div>
                    <input hidden name="valid" type="checkbox" id="valid" />
                    <span class="valid checkmark" />
                </div>
                <label hidden class="request__container" for="valid" />
                <div>
                    <input hidden name="invalid" type="checkbox" id="invalid" />
                    <span class="invalid checkmark" />
                </div>
                <a class="details" href="/details">Details</a>
            </div>
        </form>
    </div>
    <div class="request">
        <p class="request__text">
            Voulez vous supprimer le dossier {dossier_name} ?
        </p>
        <form method="POST" action="">
            <div class="containers">
                <label hidden class="request__container" for="valid" />
                <div>
                    <input hidden name="valid" type="checkbox" id="valid" />
                    <span class="valid checkmark" />
                </div>
                <label hidden class="request__container" for="valid" />
                <div>
                    <input hidden name="invalid" type="checkbox" id="invalid" />
                    <span class="invalid checkmark" />
                </div>
                <a class="details" href="/details">Details</a>
            </div>
        </form>
    </div>
</div>

<style>
    .requests {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 800px;
        font-size: 1.2rem;
        overflow-y: scroll;
    }
    .request__title {
        margin: 0;
    }

    .request {
        background-color: hsl(120, 2.2%, 26.8%);
        background-color: #27272d;
        padding: 2rem;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        width: 100%;
    }

    .request__text {
        flex-grow: 1;
    }

    .containers {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .checkmark {
        display: inline-block;
        border-radius: 100vw;
        padding: 1.5rem;
        border: 3px solid white;
    }

    .valid {
        background-color: limegreen;
        background-image: url(../Icons/General/Check.svg);
        background-repeat: no-repeat;
        background-position: center;
    }

    .invalid {
        background-color: red;
        background-image: url(../Icons/General/Close.svg);
        background-repeat: no-repeat;
        background-position: center;
    }
    .details:hover {
        text-decoration: underline;
    }
</style>

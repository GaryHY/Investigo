<script>
    // NOTE: Ici on va juste faire des templates cela va etre hyper facile.
    // TODO: Faire en sorte de recuperer les infos du store concernant le dossier.
    // let user = "John Doe";

    import PreviewModal from "../Modals/PreviewModal.svelte";

    // Quand je serai sur la fin du projet.
    // import Logo from ../Images/Logo
    // import SNARP from ../Images/SNARP
</script>

<div class="mandat">
    <div class="page">
        <div class="page__content" />
    </div>
    <div class="mandat__top flex">
        <img
            class="imgtest"
            src="http://via.placeholder.com/120?text=1"
            alt="phototest"
        />
        <img
            class="imgtest"
            src="http://via.placeholder.com/120?text=1"
            alt="phototest"
        />
    </div>
    <br />
    <br />
    <br />
    <h2 class="tacenter">Mandat</h2>
    <h3 class="tacenter">Contrat de mission</h3>
    <p class="italic tacenter">
        Type de contrat preconise par le syndicat National des Agents de
        Recherche priveees.
    </p>
    <p class="underline uppercase bold">Entre les soussignes:</p>
    <div class="info">
        <p>La societe</p>
        <p>Agence d'Investigations et de Recherche</p>
        <p>Adresse</p>
        <p>BP 176, 97170 Petit-Bourg</p>
        <p>Representee par :</p>
        <p>Serge HENRY</p>
    </div>
    <p class="bold">D'une part :</p>
    <p class="taright">Ci-apres denomme(e) "L'Agent"</p>
    <p>Serge <span class="bold">HENRY</span></p>
    <p class="bold">Et</p>
    <p>Monsieur <span class="bold">THOMALLARI</span></p>
    <p class="tacenter">Ou</p>
    <p class="bold">D'autre part :</p>
    <p class="taright">Ci-apres denomme(e) "Le client"</p>
    <div>
        <h3 class="uppercase bold tacenter">
            il a ete prealablement rappele ce qui suit :
        </h3>
        <p>
            Les parties rappellent que le client s’est rapproché de l’agent pour
            convenir ensemble de l’objet de la mission confiée à ce dernier.
        </p>
    </div>
    <div class="articles">
        <h3 class="uppercase bold tacenter">il a ete convenu ce qui suit :</h3>
        <div class="article" data-count="1">
            <h4 class="uppercase">Article 1 - Objet de la mission :</h4>
            <p>
                Le client confie à l’Agent, qui l’accepte, la mission suivante
                ci-après dénommée :
            </p>
            <ul>
                <li>Confirmer la relation extra conjugale</li>
                <li>Quantifier la fréquence de leurs rendez-vous.</li>
                <li>
                    Localiser le placement des enfants leurs de leurs rendez
                    vous
                </li>
            </ul>
            <p>
                Pour ce faire, le client autorise l’Agent à mettre en œuvre les
                diligences suivantes :
            </p>
            <ul>
                <li>Surveillances</li>
                <li>Photos ou films</li>
                <li>Demarches administratives</li>
                <li>
                    Recherches et recueils d'informations pour mise en place
                    procedure
                </li>
                <li>Autres :</li>
            </ul>
        </div>
        <div class="article" data-count="2">
            <h4 class="uppercase">Article 2 - Honoraires :</h4>
            <p>Les parties ont opté pour la détermination des honoraires :</p>
            <div class="flex wsmall mic">
                <p>Forfaitaire de vinght heures :</p>
                <p class="bold uppercase">1627,50$ ttc</p>
            </div>
            <div class="flex wsmall mic">
                <p>TVA</p>
                <p>8.5%</p>
            </div>
        </div>
    </div>
</div>

<style>
    .mandat {
        position: relative;
        /* TODO:Gerer la font-size, on ne veut pas que cela soit trop petit. */
        font-size: 1.5rem;
    }
    .mandat > * {
        outline: 1px solid red;
    }

    .page {
        outline: 1px solid blue;
        position: absolute;
        top: -1in;
        left: -1in;
        width: 14in;
        aspect-ratio: 8.5 / 11;
        padding: 1in;
    }

    .page__content {
        outline: 5px solid hotpink;
        height: 100%;
        width: 100%;
    }

    .info {
        display: grid;
        grid-auto-flow: column;
    }

    ul > li {
        margin-left: 8rem;
    }
</style>

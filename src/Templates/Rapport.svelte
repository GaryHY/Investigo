<script>
    // TODO: Mettre ici le code qui se trouve en ce moment dans le main.
    import Header from "./TemplateHeader.svelte";
    import logo_snarp from "../Icons/Templates/logo_snarp.png";
    let client = "Un client";
</script>

<div class="rapport">
    <Header title="Rapport d'enquete" />
    <p class="uppercase mt-large">
        BP 176, 97170 <span class="bold">PETIT BOURG</span>
    </p>
    <p class="uppercase">port : 0690 73 44 16</p>
    <p class="color__blue">Email: airinvestigation@hotmail.com</p>
    <div class="taright mt-medium">
        <p>Madame CHAYIA Daniele</p>
        <p>39, Rue Raynouard</p>
        <p>75016 Paris</p>
    </div>
    <p class="article italic mt-large">
        Art 9. (Loi n°70-643 du 17 Juillet 1970) du code Civil-Chacun a droit au
        respect de sa vie privée. Les juges peuvent Sans préjudice de la
        réparation du dommage subi, prescrire toutes mesures, telles que
        séquestre, saisie et autres, propre à Empêcher ou faire cesser une
        atteinte à l’intimité de la vie privée, ces mesures peuvent, s’il y a
        urgence, être ordonnées en référé.
    </p>
    <ol>
        <li>
            <div class="saisine">
                <h4 class="mt-medium tacenter uppercase bold subtitle">
                    Saisine
                </h4>
                <p>
                    A la demande de notre client <span
                        class="client bold uppercase"
                        >CABINET BOULOGNE YANG TING <span
                            class="interlocuteur capitalize">Corinne</span
                        ></span
                    >, Monsieur Serge HENRY en sa qualité d’agent privé de
                    Recherches et directeur de l’Agence A I R SARL a été mandaté
                    pour effectuer des investigations, des vérifications,
                    recueillir des témoignages et également analyser les
                    circonstances de >
                </p>
            </div>
        </li>
    </ol>
</div>

<style>
    .article {
        border: 2px solid black;
        padding: 1rem;
    }
    .subtitle {
        font-size: 1.5rem;
    }
</style>

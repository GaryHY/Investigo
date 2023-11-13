<script>
    // on fait le facture
    import TemplateHeader from "./TemplateHeader.svelte";
    import logo_snarp from "../Icons/Templates/logo_snarp.png";
</script>

<div class="template">
    <TemplateHeader title="facture" />
    <p class="uppercase mt-large">
        BP 176 97170 <span class="bold">PETIT BOURG</span>
    </p>
    <p class="uppercase">port : 0.69 73 44 16</p>
    <p class="color__blue">Email: airinvestigation@hotmail.com</p>
    <div class="taright mt-medium">
        <p>Madame CHAYIA Daniele</p>
        <p>39, Rue Raynouard</p>
        <p>75016 Paris</p>
    </div>
    <div class="mt-large">
        <p>Numero de facture: 1010</p>
        <p>Le 20/02/2023</p>
        <p>Numero de client: 321</p>
    </div>
    <p class="mt-large">
        <span class="bold">Objet: </span> Recherches d'informations, localisation
    </p>
    <div class="space-small mt-medium">
        <p>
            Réalisation d’une mission d’investigations de recherche d’éléments
            permettant les points suivants :
        </p>
        <ul>
            <li>Identifier l’employeur de madame Berthide LOIAL.</li>
            <li>Vérification de fraude éventuelle.</li>
            <li>Vérification de potentielles difficultés financières.</li>
            <li>Recherches administratives.</li>
        </ul>
    </div>
    <div class="facture__count">
        <div class="facture__total tacenter">
            <p>Total HT</p>
            <p>2900,00€</p>
            <p>Total TVA</p>
            <p>246,50€</p>
            <p class="bg__black">Net a payer</p>
            <p>3146,50€</p>
        </div>
        <div class="facture__total tacenter">
            <p>Accompte de :</p>
            <p>1258,50€</p>
            <p class="bg__black">Solde restant :</p>
            <p>1888,00€</p>
        </div>
    </div>
    <div class="facture__footer">
        <p class="italic">
            Agence agréé <img class="logo__footer" src={logo_snarp} alt="" />AIR
            SAS enregistré au C N A P S sous Autorisation N°
            AUT-971-2117-12-28-20180681319 ET Agrément C N A PS Sous N° AGD
            -971-2023-10-03-2018038285 POINTE A PITRE SIRET : N° 90143799600019
        </p>
    </div>
</div>

<style>
    .template {
        font-size: 1.2rem;
    }

    ul > li {
        margin-left: 8rem;
    }

    .bg__black {
        background-color: black;
        color: white;
    }

    .facture__count {
        display: flex;
        justify-content: space-between;
        align-content: end;
        margin-top: 6rem;
    }

    .facture__total {
        width: 30%;
        /* margin: auto; */
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .facture__total > * {
        border: 1px solid #1e1e1e;
        padding: 0.5rem;
    }

    .facture__footer {
        font-size: 0.7rem;
        margin-top: 8rem;
    }

    .logo__footer {
        display: inline;
        width: 6rem;
        margin-inline: 1rem;
    }
</style>

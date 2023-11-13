<script>
    // on fait le devis
    import TemplateHeader from "./TemplateHeader.svelte";
    import logo_snarp from "../Icons/Templates/logo_snarp.png";
</script>

<div class="template">
    <TemplateHeader title="" />
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
    <div class="mt-large">
        <p>Numero de devis: 1010</p>
        <p>Le 20/02/2023</p>
        <p>Numero de client: 321</p>
    </div>
    <p class="mt-large">
        <span class="bold">Objet: </span> Recherches d'informations, localisation
    </p>
    <div class="devis__table mt-large tacenter">
        <p class="devis__table__title">Description</p>
        <p class="devis__table__title">Qtite</p>
        <p class="devis__table__title">Unite</p>
        <p class="devis__table__title">Prix unitaire HT</p>
        <p class="devis__table__title">% TVA</p>
        <p class="devis__table__title">Total TVA</p>
        <p class="devis__table__title">Total TTC</p>

        <p class="devis__table__line">Mission de localisation</p>
        <p class="devis__table__line">40</p>
        <p class="devis__table__line">h</p>
        <p class="devis__table__line">72.5€</p>
        <p class="devis__table__line">8.5%</p>
        <p class="devis__table__line">246,50€</p>
        <p class="devis__table__line">3146,50€</p>

        <p class="devis__table__line">Frais kilometriques</p>
        <p class="devis__table__line">340</p>
        <p class="devis__table__line">km</p>
        <p class="devis__table__line">0.60€</p>
        <p class="devis__table__line">8.5%</p>
        <p class="devis__table__line">400€</p>
        <p class="devis__table__line">538€</p>
    </div>
    <div class="devis__last flex">
        <div class="space-small devis__description">
            <p>
                Mission d’investigations et de recherches d’éléments permettant
                de localiser un individu. Recherches de biens lui appartenant,
                des associations dont elle serait membre ou à la direction et la
                ou les société(s) qu’elle dirigerait.
            </p>
            <p>Le coût honoraire de l’enquête est forfaitaire.</p>
        </div>
        <div class="devis__total tacenter mt-large">
            <p class="bg__black">Total HT</p>
            <p>5123,34€</p>
            <p>Total TVA</p>
            <p>358,18€</p>
            <p class="bg__black">Net a payer</p>
            <p>5481.52€</p>
        </div>
    </div>

    <div class="devis__signature">
        <p>Signature du client (precede de la mention "Bon pour accord")</p>
    </div>
    <div class="devis__footer">
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

    .devis__table {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-columns: 2.5fr 0.5fr 0.5fr 1fr 0.5fr 1fr 1fr;
    }
    .devis__table__title {
        font-size: 1rem;
        padding-block: 1rem;
        letter-spacing: 0px;
        border: 1px solid white;
        background-color: black;
        color: white;
    }

    .bg__black {
        background-color: black;
        color: white;
    }

    .devis__table__line {
        padding: 0.5rem;
        border: 1px solid #1e1e1e;
    }

    .devis__last {
        margin-top: 8rem;
    }

    .devis__description {
        width: 65%;
    }

    .devis__total {
        width: 30%;
        margin-block: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .devis__total > * {
        border: 1px solid #1e1e1e;
        padding: 0.5rem;
    }

    .devis__signature {
        margin-left: auto;
        margin-top: 6rem;
        padding: 1rem;
        width: 60%;
        height: 12rem;
        background-color: #bcbdc0;
        font-weight: 500;
        border-radius: 0.5rem;
    }

    .devis__footer {
        font-size: 0.7rem;
        margin-top: 8rem;
    }

    .logo__footer {
        display: inline;
        width: 6rem;
        margin-inline: 1rem;
    }
</style>

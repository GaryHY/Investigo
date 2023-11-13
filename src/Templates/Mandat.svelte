<script>
    import TemplateHeader from "./TemplateHeader.svelte";
</script>

<div class="mandat">
    <TemplateHeader title="mandat" />
    <div class="mt-large">
        <h3 class="tacenter mt-medium">Contrat de mission</h3>
        <p class="italic tacenter mt-small">
            Type de contrat preconise par le syndicat National des Agents de
            Recherche privees.
        </p>
        <p class="underline uppercase bold mt-large">Entre les soussignes:</p>
        <div class="info space-small">
            <div class="info__line">
                <p class="bold">La societe :</p>
                <p>Agence d'Investigations et de Recherche</p>
            </div>
            <div class="info__line">
                <p class="bold">Adresse :</p>
                <p>BP 176, 97170 Petit-Bourg</p>
            </div>
            <div class="info__line">
                <p class="bold">Representee par :</p>
                <p>Monsieur Serge HENRY</p>
            </div>
        </div>
        <div class="mt-large space-small">
            <div>
                <p class="bold">D'une part :</p>
                <div class="mt-small">
                    <p class="taright">Ci-apres denomme(e) "L'Agent" :</p>
                    <p>Serge <span class="bold">HENRY</span></p>
                    <p class="bold">Et</p>
                    <p>Monsieur <span class="bold">THOMALLARI</span></p>
                </div>
            </div>
            <p class="tacenter">Ou</p>
            <div>
                <p class="bold">D'autre part :</p>
                <p class="taright">Ci-apres denomme(e) "Le client" :</p>
            </div>
        </div>
        <div class="mt-xlarge space-small">
            <h3 class="uppercase bold tacenter">
                il a ete prealablement rappele ce qui suit :
            </h3>
            <p>
                Les parties rappellent que le client s’est rapproché de l’agent
                pour convenir ensemble de l’objet de la mission confiée à ce
                dernier.
            </p>
        </div>
    </div>
    <div class="articles space-large">
        <h3 class="uppercase bold tacenter">il a ete convenu ce qui suit :</h3>
        <div class="article space-small" data-count="1">
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
        <div class="article mt-medium space-medium" data-count="2">
            <h4 class="uppercase">Article 2 - Honoraires :</h4>
            <p>Les parties ont opté pour la détermination des honoraires :</p>
            <div class="flex wsmall mic space-small">
                <p>Forfaitaire de vinght heures :</p>
                <p class="bold uppercase">1627,50$ ttc</p>
            </div>
            <div class="flex wsmall mic">
                <p>TVA</p>
                <p>8.5%</p>
            </div>
            <p>
                +frais en sus. <span class="lightbold"
                    >Il est à noter que des frais kilométriques en suivi de
                    filature soit 0,60€ttc le km parcouru ainsi que des frais
                    sur justificatifs.
                </span>
            </p>
            <p class="tacenter italic">Cotisation C N A P S de : 0,40 %</p>
            <p class="italic">
                Ces honoraires couvriront toutes les diligences accomplies par
                l’Agent dans l’exécution de sa Mission. Ces honoraires ne
                couvriront ni les débours1 ni les frais2 occasionnés pour la
                Mission. Les débours correspondent aux dépenses engagées par
                l’Agent dans le cadre de l’exécution de sa mission. Il s’agit
                notamment des honoraires d’expert, frais et émoluments
                d’huissier de justice etc.… que l’Agent a engagé pour le compte
                de son client et pour les besoins de sa mission. Les frais
                correspondent aux sommes diverses que l’Agent se voit contraint
                de faire l’avance dans l’intérêt du Client pour la parfaite
                exécution de sa mission (coursier, transport, développement de
                photos, de films, etc.), exception faite des frais de poste qui
                resteront à la charge de l’Agent.
            </p>
        </div>
        <div class="article mt-large space-medium" data-count="3">
            <h4 class="uppercase">Article 3 - Provision :</h4>
            <p class="italic">
                Suivant les termes de la Mission, le Client verse ce jour entre
                les mains de l’Agent une provision de 40% soit :
            </p>
            <div class="space-medium">
                <div class="info__line">
                    <label
                        class="template__label"
                        for="numero_cheque_ou_virement"
                        >Cheque ou virement numero :</label
                    >
                    <input
                        name="numero_cheque_ou_virement"
                        class="template__input"
                        type="text"
                        placeholder="0000000A000"
                    />
                </div>
                <div class="info__line">
                    <label class="template__label" for="tire_sur"
                        >tire sur :</label
                    >
                    <input
                        name="tire_sur"
                        class="template__input"
                        type="text"
                        placeholder="John DOE"
                    />
                </div>
            </div>
            <p class="underline lightbold">Titulaire du compte</p>
            <div class="info__line">
                <label class="template__label" for="espece">Especes :</label>
                <input
                    placeholder="23$"
                    name="espece"
                    class="template__input"
                    type="text"
                />
            </div>
        </div>
        <div class="article mt-large space-large" data-count="4">
            <h4 class="uppercase">
                Article 4 - Declaration et obligations du client :
            </h4>
            <div class="space-medium">
                <p>
                    4.1- Par la présente, le Client certifie sincères et
                    véritables tous les renseignements qu’il a fourni à
                    l’Agence, ainsi que les buts et objets déclarés de la
                    Mission.
                </p>
                <p>
                    4.2- Le Client s’interdit formellement d’intervenir
                    directement ou indirectement dans le cours de la Mission
                    qu’il aura confié à l’Agence, comme de contacter directement
                    ou indirectement ses collaborateurs.
                </p>
                <p>
                    Le Client dégage l’Agent de toute responsabilité dans
                    l’exécution de la Mission en cas d’intervention intempestive
                    de sa part. Auquel cas l’Agent sera fondé à suspendre ou
                    annuler la Mission, ainsi qu’à réclamer le solde des frais
                    et honoraires restant dus par le Client.
                </p>
                <p>
                    4.3-Le Client reconnait avoir été informé que, pour la bonne
                    exécution de la Mission, l’Agent pourra s’assurer le
                    concours de tout collaborateur, technicien ou correspondant.
                </p>
            </div>
        </div>
        <div class="article space-large mt-large" data-count="5">
            <h4 class="uppercase">Article 5 - Rapport de mission :</h4>
            <p>
                Les parties conviennent qu’un rapport de mission sera remis au
                Client après règlement des honoraires et frais de mission dus à
                l’Agent.
            </p>
            <p class="italic">
                Ce rapport ne mentionne que les frais essentiels, réellement
                observés, absolument nécessaires pour les intérêts du Client. Il
                est précisé que, sur demande du Client, un rapport pourra lui
                être remis quand bien même les résultats obtenus par l’Agent
                seraient négatifs.
            </p>
            <p class="italic">
                A cet égard, il est rappelé au client que l’Agent n’est tenu à
                aucune obligation de résultat quant à la Mission qui lui est
                confiée, mais uniquement à une obligation de moyens.
            </p>
            <p class="italic">
                Il est expressément convenu entre les parties que l’Agent ne
                poursuivra pas la Mission au-delà de la date visée à l’article
                1er du présent alinéa, sauf signature d’un avenant de complément
                de Mission entre elles.
            </p>
            <p class="italic">
                Aucun rapport ne sera communiqué au Client par téléphone en
                raison de la difficulté d’identisation certaine de
                l’interlocuteur. Aucun rapport ne sera non plus communiqué à
                tout tiers au contrat.
            </p>
        </div>
        <div class="article space-large mt-large" data-count="6">
            <h4 class="uppercase">Article 6 - Annulation de mission :</h4>
            <p>
                Une mission annulée unilatéralement par le Client plus de 48
                heures avant son exécution ne sera pas facturée. Seuls seront
                dus les frais d’ouverture et étude de la mission équivalent à la
                somme forfaitaire de 150 € Hors Taxe.
            </p>
            <p>
                Toutefois, si l’annulation par le Client intervient dans les
                48heures qui précèdent la mission, les honoraires correspondant
                au temps réservé pour cette mission sont dus intégralement à
                l’Agent, de la même manière que si ladite Mission avait été
                effectuée.
            </p>
        </div>
        <div class="article space-large mt-large" data-count="7">
            <h4 class="uppercase">Article 7 - Non exection involontaire :</h4>
            <p>
                Si l’Agent est dans l’impossibilité par suite de circonstances
                indépendantes de sa volonté, d’exécuter la Mission, il en rendra
                compte sans délais au Client par tous les moyens
            </p>
        </div>
        <div class="article space-large mt-large" data-count="8">
            <h4 class="uppercase">Article 8 - Propriete :</h4>
            <p>Les parties conviennent que :</p>
            <ul>
                <li>
                    Les photos ou les films qui auront pu être pris à l’occasion
                    de l’accomplissement de la mission feront l’objet d’une
                    remise, par l’Agent, d’une attestation au terme de laquelle
                    ces documents seront tenus à disposition de la justice à
                    première demande de celle-ci avec le rapport.
                </li>
            </ul>
        </div>
        <div class="article space-large mt-large" data-count="9">
            <h4 class="uppercase">Article 9 - Archives :</h4>
            <p>
                Au-delà d’un délai de 6 mois (cf. CNIL), le Client autorise
                expressément et définitivement l’Agent à détruire tous les
                documents en sa possession et relatifs à la Mission.
            </p>
        </div>
        <div class="article space-large mt-large" data-count="10">
            <h4 class="uppercase">Article 10 - Litiges :</h4>
            <p>
                Si le Client agit en qualité de commerçant, le tribunal de
                commerce du siège de l’Agent sera seul compétent en cas
                d’éventuels litiges ou différends, ce qui est expressément
                accepté par le Client.
            </p>
        </div>
        <div class="article space-large mt-large" data-count="11">
            <h4 class="uppercase">Article 11 - Election de domicile :</h4>
            <p>
                Pour l’exécution des présentes et de leur suite, les parties
                font élection de domicile aux adresses ci-dessus indiquées en
                tête des présentes.
            </p>
            <p class="italic color__blue">
                L’article 161 du code pénal punit les attestations et
                certificats mensongers, sans préjudice d’autres sanctions
                pénales ou civiles en cas de violation des Lois et règlements en
                vigueur à l’insu du mandataire. En outre, ce dernier se réserve
                la faculté d’engager les actions pénales et/ ou civiles qui
                s’imposent en cas de fausse déclaration du mandant (Voir
                renseignements fournis par le client). L’AGENCE A I R serait
                alors délié du secret professionnel vis à vis des juridictions
                saisies.
            </p>
            <p class="italic">
                Conformément à l’article 612-14 du code de la sécurité intérieur
                (art 8 loi 83-629) l’autorisation administrative préalable ne
                confère aucun caractère officiel à l’entreprise ou aux personnes
                qui en bénéficient. Elle n’engage en aucune manière la
                responsabilité des pouvoir publics.
            </p>
            <div class="space-small">
                <p>Le présent Mandat a été établi en deux exemplaires.</p>
                <p>Dont un pour chaque partie qui reconnait l’avoir reçu.</p>
                <p>
                    Le Mandant reconnait, en outre, avoir pris intégralement
                    connaissance des conditions générales du présent mandat et y
                    souscrire sans réserve.
                </p>
            </div>
            <div class="space-xlarge">
                <p class="taright">
                    A Baie-Mahault, <span class="italic"
                        >Le 13 Février 2023.</span
                    >
                </p>
                <div class="mandat__signature italic flex flex-start">
                    <div class="left tacenter">
                        <p>Signature du Client</p>
                        <p>(Faire précéder les signatures de</p>
                        <p>La mention « lu et approuvé bon pour mandat »)</p>
                    </div>
                    <div class="right">Cachet et Signature de l’Agent</div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .mandat {
        font-size: 1.2rem;
        outline: 1px solid red;
    }

    .flex-start {
        align-items: start;
    }

    .info {
        display: grid;
        grid-auto-flow: row;
    }

    .info__line {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: repeat(2, 1fr);
    }

    ul > li {
        margin-left: 8rem;
    }

    .template__input {
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
        border: 2px solid black;
        border-radius: 0.5rem;
    }
    .template__input:is(:focus) {
        border: 2px solid #2ea6ff;
        outline: none;
    }

    .mandat__signature {
        margin-bottom: 12rem;
    }
</style>

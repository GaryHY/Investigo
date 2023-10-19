<script>
    // TODO: Faire venir les images du fichier ici
    console.log("Je suis dans le menu.");
    import MenuImage from "../Menus/MenuImage.svelte";
    import MenuAudio from "../Menus/MenuAudio.svelte";
</script>

<div class="menu" data-visible="false">
    <MenuImage />
    <MenuAudio />
</div>

<style>
    .menu {
        background-color: #d9d9d9;
        width: 300px;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        transition: transform 350ms ease-out;
        overflow-y: scroll;
    }

    /* TODO: Je ne sais pas faire fonctionner ce truc en fait. */
    .menu[data-visible="false"] {
        transform: translateX(100%);
    }
</style>

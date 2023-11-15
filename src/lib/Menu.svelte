<script>
    // TODO: Faire venir les images du fichier ici
    import MenuImage from "../Menus/MenuImage.svelte";
    import MenuAudio from "../Menus/MenuAudio.svelte";
    import menuState from "../stores/menu";
    let handleMenu = {
        menu: "image",
        toggle: false,
    };
    menuState.subscribe((newValue) => {
        handleMenu = newValue;
    });
</script>

<div class="menu" class:menuVisible={!handleMenu.toggle}>
    {#if handleMenu.menu === "image"}
        <MenuImage />
    {/if}
    {#if handleMenu.menu === "audio"}
        <MenuAudio />
    {/if}
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

    .menuVisible {
        transform: translateX(100%);
    }
</style>

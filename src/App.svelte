<script lang="ts">
    import Header from "./lib/Header.svelte";
    import Sidebar from "./lib/Sidebar.svelte";
    import Main from "./lib/Main.svelte";
    import Home from "./lib/Home.svelte";

    // NOTE: I need this info to understand what is need to be displayed in terms of functionanlity and I need it for the
    // differents request that I am going to make.
    // let user;

    /* TODO: Faire une fonction qui permet de regarder si on fait de l'authentification en fait. Mettre tout cela
    dans un store pour que je puisse gerer cette variable ailleurs. */
    let isAuthentified = true;
</script>

{#if !isAuthentified}
    <Home />
{/if}
{#if isAuthentified}
    <div class="single_page">
        <Header />
        <Sidebar />
        <Main />
    </div>
{/if}

<style>
</style>

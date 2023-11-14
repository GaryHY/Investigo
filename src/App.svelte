<script lang="ts">
    import Header from "./lib/Header.svelte";
    import Sidebar from "./lib/Sidebar.svelte";
    import Main from "./lib/Main.svelte";
    import Home from "./lib/Home.svelte";
    import Notification from "./Notification/Notification.svelte";

    // NOTE: I need this info to understand what is need to be displayed in terms of functionanlity and I need it for the
    // differents request that I am going to make.
    // let user;

    let isAuthentified = true;
</script>

{#if !isAuthentified}
    <Home />
{/if}
{#if isAuthentified}
    <div class="single_page">
        <Notification />
        <Header />
        <Sidebar />
        <Main />
    </div>
{/if}

<style>
</style>

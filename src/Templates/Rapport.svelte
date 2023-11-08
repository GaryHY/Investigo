<script>
    // TODO: Mettre ici le code qui se trouve en ce moment dans le main.
    export let element;
</script>

<div class="template">
    <img
        class="imgtest"
        src="http://via.placeholder.com/60?text=1"
        alt="phototest"
    />
    <h2>Un titre pour tester en fait.</h2>
</div>
<div class="editortext" bind:this={element} />

<style>
    .template {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>

<script>
    // @ts-nocheck

    // TODO: Implementer ensuite la persistence de la liste peu importe le rafraichissement.
    // TODO: Faire en sorte que les images soient visibles lorsque l'on clique dessus.

    // NOTE: I get this from this tutorial, he goes over for types but I do not care since I just want to make it work.
    // NOTE: video : https://www.youtube.com/watch?v=sFX525V3dMs

    import { dndzone } from "svelte-dnd-action";
    import { flip } from "svelte/animate";

    import photos from "../stores/photos";

    const flipDurationMs = 100;
    // TODO: Voir avec client comment gerer la taille des images
    // const size = 150;
    // const size = 100;

    function handleConsider(e) {
        $photos = e.detail.items;
    }

    function handleFinalize(e) {
        $photos = e.detail.items;
    }

    let editing = false;
</script>

<div class="photos">
    <div
        on:consider={handleConsider}
        on:finalize={handleFinalize}
        use:dndzone={{
            items: $photos,
            flipDurationMs: flipDurationMs,
            dropTargetStyle: {},
        }}
        class="image__container"
    >
        {#each $photos as photo (photo.id)}
            <div
                class="image__component"
                animate:flip={{ duration: flipDurationMs }}
                class:editing
            >
                <div>
                    <button
                        on:dblclick={() => (editing = !editing)}
                        class="image__rank">{photo.id}</button
                    >
                    <input hidden type="text" />
                </div>
                <button class="item">
                    <img
                        class="placeholder"
                        src={photo.img}
                        alt={`placeholder ${photo.id}`}
                    />
                </button>
            </div>
        {/each}
    </div>
    <div class="singlePhoto">
        <img
            class="mic"
            src="http://via.placeholder.com/900x600?text=Zoom"
            alt="zoom placeholder"
        />
        <label class="" for="legend"
            >Une legende que je mets pour le moment comme un placeholder</label
        >
        <input hidden type="text" />
    </div>
</div>

<style>
    .photos {
        outline: 4px solid blue;
        display: flex;
        height: 100%;
    }
    .image__container {
        --img-size: 300px;
        --padding-right: 2rem;
        width: calc(300px + var(--padding-right));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
        z-index: 1000;
        padding-top: 4rem;
        overflow-y: scroll;
        padding-right: var(--padding-right);
        background-color: #161716;
        border: 1px solid white;
    }

    .image__component {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .image__rank {
        border: none;
        padding: 1rem 1.4rem;
        aspect-ratio: 1;
        font-size: 1.2rem;
        font-weight: 600;
        border-radius: 100%;
    }

    .image__rank:hover {
        background-color: white;
    }

    .item {
        border: none;
    }

    /* .save__button { */
    /*     border: none; */
    /*     font-size: 1.5rem; */
    /*     padding: 0.5rem 1.5rem; */
    /*     margin-left: auto; */
    /*     display: block; */
    /*     border-radius: 0.5rem; */
    /*     background-color: red; */
    /*     color: white; */
    /*     margin-top: 3rem; */
    /* } */
    /**/
    /* .save__button:hover { */
    /*     cursor: pointer; */
    /* } */

    .singlePhoto {
        display: grid;
        place-content: center;
        gap: 2rem;
        font-size: 1.5rem;
        text-align: center;
        width: 100%;
    }
    /* .singlePhoto > * { */
    /*     outline: 1px solid blue; */
    /*     margin-inline: auto; */
    /* } */
</style>

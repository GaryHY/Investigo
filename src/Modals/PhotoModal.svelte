<script>
    // @ts-nocheck

    // TODO: Implementer ensuite la persistence de la liste peu importe le rafraichissement.
    // TODO: Faire en sorte que les images soient visibles lorsque l'on clique dessus.

    // NOTE: I get this from this tutorial, he goes over for types but I do not care since I just want to make it work.
    // NOTE: video : https://www.youtube.com/watch?v=sFX525V3dMs

    import { dndzone } from "svelte-dnd-action";
    import { flip } from "svelte/animate";

    import Modal from "../lib/Modal.svelte";
    import SinglePhotoModal from "./SinglePhotoModal.svelte";
    // import { openModal } from "../scripts/modal";

    const flipDurationMs = 100;

    // TODO: Put this into a store.
    let images = [
        {
            id: 1,
            img: "http://via.placeholder.com/300?text=1",
            caption: "Je mets la caption de l'image 1.",
        },

        {
            id: 2,
            img: "http://via.placeholder.com/300?text=2",
            caption: "Je mets la caption de l'image 2.",
        },
        {
            id: 3,
            img: "http://via.placeholder.com/300?text=3",
            caption: "Je mets la caption de l'image 3.",
        },
        {
            id: 4,
            img: "http://via.placeholder.com/300?text=4",
            caption: "Je mets la caption de l'image 4.",
        },
        {
            id: 5,
            img: "http://via.placeholder.com/300?text=5",
            caption: "Je mets la caption de l'image 5.",
        },
        {
            id: 6,
            img: "http://via.placeholder.com/300?text=6",
            caption: "Je mets la caption de l'image 6.",
        },
        {
            id: 7,
            img: "http://via.placeholder.com/300?text=7",
            caption: "Je mets la caption de l'image 7.",
        },
        {
            id: 8,
            img: "http://via.placeholder.com/300?text=8",
            caption: "Je mets la caption de l'image 8.",
        },
        {
            id: 9,
            img: "http://via.placeholder.com/300?text=9",
            caption: "Je mets la caption de l'image 9.",
        },
        {
            id: 10,
            img: "http://via.placeholder.com/300?text=10",
            caption: "Je mets la caption de l'image 10.",
        },
    ];

    function handleConsider(e) {
        console.log("consider");
        images = e.detail.items;
    }

    function handleFinalize(e) {
        console.log("finalize");
        images = e.detail.items;
        console.log("Le nouveau images est : ", images);
    }

    function openPhotoModal() {
        const childModal = document.querySelector(".singlePhotoModal");

        const modal = childModal.closest(".modal");
        if (modal != null) {
            modal.show();
        }
    }
</script>

<Modal>
    <SinglePhotoModal />
</Modal>
<div class="photoModal">
    <div
        on:consider={handleConsider}
        on:finalize={handleFinalize}
        use:dndzone={{ items: images, flipDurationMs: flipDurationMs }}
        class="image__container"
    >
        {#each images as card (card.id)}
            <button
                class="item"
                animate:flip={{ duration: flipDurationMs }}
                on:click={openPhotoModal}
            >
                <img
                    class="placeholder"
                    src={card.img}
                    alt={`placeholder ${card.id}`}
                />
            </button>
        {/each}
    </div>
    <button class="save__button">Enregistrer</button>
</div>

<style>
    .image__container {
        /* TODO: Make a image size variable and make the widht something like width: (--img_size + --gap) * 6 */
        --img-size: 300px;
        --gap: 0.5rem;
        width: 1600px;
        width: calc((var(--img-size) + var(--gap)) * 5);
        outline: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .item {
        border: none;
    }

    .save__button {
        border: none;
        font-size: 1.5rem;
        padding: 0.5rem 1.5rem;
        margin-left: auto;
        display: block;
        border-radius: 0.5rem;
        background-color: red;
        color: white;
        margin-top: 3rem;
    }

    .save__button:hover {
        cursor: pointer;
    }

    :global(.singlePhotoModal) {
        background-color: red;
    }
</style>

<script>
    const closeModal = () => {
        const modal = document.querySelector(".modal");
        if (modal != null) {
            modal.close();
        }
    };

    // TODO: Voir ici comment je peux exporter le contenu de l'editeur en pdf.
</script>

<dialog class="modal">
    <h2>Un titre juste pour la forme</h2>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
        consectetur officia excepturi laborum, dolore ullam eveniet quod eum
        maiores assumenda libero, sint nemo? Libero quod sed velit? Magnam,
        voluptates et! Eveniet non cumque id odio incidunt soluta, eum animi
        laborum facilis. Asperiores corrupti praesentium pariatur quaerat rem
        ducimus earum, corporis eius sed animi voluptas amet aspernatur natus
        dolorum placeat assumenda culpa molestiae ipsum neque soluta repudiandae
        sapiente ut maxime architecto. In commodi deserunt recusandae alias iste
        doloribus similique ullam debitis!
    </p>
    <button class="close" on:click={closeModal}>Close</button>
</dialog>

<style>
    dialog {
        width: 600px;
        padding: 2rem;
        border: none;
        border-radius: 0.5rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        /* background-color: #171717; */
        /* color: white; */
    }

    :global(dialog::backdrop) {
        background: rgba(0, 0, 0, 0.7);
    }
</style>

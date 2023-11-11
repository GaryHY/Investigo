<script>
    // Ici je mets le modal pour mon new folder
    // TODO: Penser au design de cet element pour faire un truc plus solide comme chat gpt.
</script>

<div class="queryModal">
    <h2 class="tacenter">Chat Modal</h2>
    <p>Faites ici toutes vos customs queries.</p>
    <div class="query__content">
        <input
            placeholder="Enter your query"
            class="query__input"
            type="text"
        />
        <button class="query__button" type="submit">></button>
    </div>
</div>

<style>
    .queryModal {
        border: 1px solid red;
        width: 100%;
    }

    .query__content {
        margin-inline: auto;
        padding: 1rem;
        display: flex;
        align-items: center;
    }

    .query__input {
        border-radius: 0.5rem;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        padding-left: 0.5rem;
        /* border: none; */
    }

    .query__button {
        padding: 0rem 0.5rem;
        outline: 1px solid black;
        border: none;
        border-radius: 0.5rem;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
</style>

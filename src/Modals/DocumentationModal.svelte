<script>
    // TODO: Changer le font parce que cela pue.
    import ArrowRight from "../Icons/General/ArrowRight.svg";
    import Chat from "../Icons/TopBar/Chat.svg";
</script>

<div class="queryModal">
    <h2 class="query__title tacenter">Documentation</h2>
    <div class="query__chat">
        <div class="query__flex">
            <img class="query__question__icon" src={Chat} alt="chat icon" />
            <p class="query__question">Je suis entrain de poser une qustion</p>
        </div>
        <p class="query__response">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            minus laboriosam quis cum quia modi accusantium neque vero quae
            dolore tenetur eaque quasi, non illum optio amet iste ipsam velit
            sint veniam itaque autem, incidunt excepturi consequuntur. Iste
            dolor repellendus quia, nobis necessitatibus corrupti. Sequi, atque
            provident velit molestiae eos nostrum voluptates voluptas eveniet
            similique maxime, culpa sed! Recusandae quasi modi similique
            expedita alias ratione? Asperiores tenetur illum facere, expedita
            repellat totam eaque nam dolor reprehenderit consequatur minima quas
            quos doloribus beatae ea tempora nihil quasi! Dolore animi
            doloremque sunt, laboriosam nesciunt modi perferendis provident
            exercitationem eum sapiente est? Necessitatibus quod nulla quam
            animi adipisci delectus repudiandae! Ipsa perferendis ea deserunt
            aut qui consequuntur vel aliquid laborum nobis. Voluptate eius
            eaque, architecto ipsum consectetur iste. Perspiciatis, repudiandae.
            Similique quas odit omnis beatae? Quae eum fugiat unde error,
            veritatis quidem architecto aspernatur itaque, voluptatibus dolorem
            illo ducimus esse, mollitia cupiditate voluptatum!
        </p>
    </div>
    <div class="query__content">
        <input
            placeholder="Saisissez une requête ici"
            class="query__input"
            type="text"
        />
        <button class="query__button" type="submit">
            <img src={ArrowRight} alt="right arrow" />
        </button>
    </div>
</div>

<style>
    .queryModal {
        width: 60vw;
        height: 80vh;
        display: flex;
        flex-direction: column;
    }

    .query__title {
        font-size: 2rem;
    }

    .query__chat {
        margin-top: 2rem;
        background-color: #27272d;
        background-color: hsl(120, 2.2%, 26.8%);
        height: 400px;
        padding: 4rem 6rem;
        border-radius: 1rem;
        overflow-y: scroll;
        font-size: 1.2rem;
        flex-grow: 1;
    }

    /* hsl(120,2.2%,8.8%) */

    .query__flex {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-left: 2rem;
    }
    .query__question__icon {
        width: 2rem;
    }

    /**/
    /* .query__question { */
    /*     margin-left: 6rem; */
    /* } */

    .query__response {
        margin-top: 2rem;
        background-color: #161716;
        background-color: black;
        background-color: hsl(120, 2.2%, 17.8%);
        padding: 5rem;
        border-radius: 1rem;
    }

    .query__content {
        width: 90%;
        margin-top: 2rem;
        margin-inline: auto;
        padding: 1rem;
        display: flex;
        align-items: center;
        --inputbar-fontsize: 1.3rem;
    }

    .query__input {
        font-size: var(--inputbar-fontsize);
        border-radius: 5rem;
        padding-left: 1rem;
        padding-block: 1rem;
        background-color: #101110;
        color: white;
        width: 100%;
    }

    .query__input:focus {
        border: 2px solid hsl(206, 100%, 39%);
        outline: none;
    }

    .query__button {
        font-size: var(--inputbar-fontsize);
        border: none;
        margin-left: 2rem;
        background: transparent;
        border-radius: 0.5rem;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
</style>

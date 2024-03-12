<script>
    function getAuthenticated() {
        console.log(
            "function to make for the authentication process, need a store for that ?",
        );
    }

    import loupe from "../Icons/Authentication/loupe.svg";
    import brain from "../Icons/Authentication/brain.svg";
    import camera from "../Icons/Authentication/camera.svg";
    import pen from "../Icons/Authentication/pen.svg";
</script>

<div class="auth__page">
    <div class="auth__illustration" />
    <div class="auth__content">
        <h2 class="auth__title">bienvenue</h2>
        <form class="auth__form" action="">
            <div class="form__group">
                <label for="account">Identifiant</label>
                <input name="account" type="text" />
            </div>
            <div class="form__group">
                <label for="password">Mot de passe</label>
                <input name="password" type="password" />
            </div>
            <button class="auth__button" type="submit">Enregistrer vous</button>
        </form>
    </div>
    <img class="auth__icons loupe" src={loupe} alt="" />
    <img class="auth__icons pen" src={pen} alt="" />
    <img class="auth__icons camera" src={camera} alt="" />
    <img class="auth__icons brain" src={brain} alt="" />
</div>

<style>
    .auth__page {
        height: 100vh;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        font-size: 1.2rem;
        position: relative;
    }

    .auth__icons {
        position: absolute;
    }

    .loupe {
        top: 1%;
        right: 3%;
    }

    .camera {
        top: 1rem;
        right: 35%;
    }

    .pen {
        bottom: 3rem;
        right: 38%;
    }

    .brain {
        bottom: 3rem;
        right: 3%;
    }

    .auth__illustration {
        width: 100%;
        background-color: #d0d4de;
        background-image: url("../Icons/Authentication/Illustration.png");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }

    .auth__content {
        background-color: #161716;
        color: white;
        display: grid;
        place-content: center;
    }

    .auth__title {
        font-size: 3rem;
        /* TODO: Change the font with Inter. */
        text-decoration: underline;
        text-transform: capitalize;
        margin-bottom: 8rem;
        text-align: center;
    }

    .auth__form,
    .form__group {
        display: grid;
    }

    .auth__form {
        gap: 1rem;
        width: 35vw;
        width: 700px;
        width: min(35vw, 700px);
        /* outline: 4px solid red; */
    }
    .form__group {
        gap: 0.5rem;
    }

    input {
        border-radius: 1.125rem;
        padding: 0.75rem 1rem;
        background-color: #101110;
        color: white;
        font-size: 1.2rem;
    }

    input:focus {
        border: 2px solid #2ea6ff;
        outline: none;
    }

    .auth__button {
        border: none;
        background-color: hsl(206, 100%, 39%);
        color: white;
        padding: 1rem 1.5rem;
        font-weight: 450;
        border-radius: 1.125rem;
        font-size: inherit;
        margin-top: 2rem;
    }
    .auth__button:hover {
        cursor: pointer;
        background-color: hsl(206, 100%, 59%);
    }
</style>


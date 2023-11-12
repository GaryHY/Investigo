<script>
    import { closeModal } from "../scripts/modal";
    import Close from "../Icons/General/Close.svg";
</script>

<dialog class="modal">
    <slot />
    <button class="closeModal" on:click={closeModal}>
        <img src={Close} alt="close icon" />
    </button>
</dialog>

<style>
    dialog {
        padding: 6rem;
        border: none;
        border-radius: 0.5rem;
        border-radius: 1rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: relative;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    :global(dialog::backdrop) {
        background: rgba(0, 0, 0, 0.7);
    }

    .closeModal {
        border: none;
        padding: 0.5rem;
        background: transparent;
        position: absolute;
        right: 2rem;
        top: 2rem;
        border: 1px solid hotpink;
    }
</style>

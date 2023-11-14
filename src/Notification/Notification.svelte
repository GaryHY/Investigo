<script>
    // ts-nocheck
    import Info from "../Icons/Sidebar/Info.svg";
    import { notifications } from "../stores/notifications";
    import { flip } from "svelte/animate";
    import { fly } from "svelte/transition";

    let themes = {
        information: "hsl(206, 100%, 39%)",
        success: "limegreen",
        erreur: "red",
    };

    // NOTE: Mettre cela dans un store pour le parametrer ? let border_thinkness = 3;
    let border_thinkness = 3;
</script>

<div class="notifications">
    {#each $notifications as notification (notification.id)}
        <div
            animate:flip
            class="notification"
            style="border: {border_thinkness}px solid {themes[
                notification.type
            ]}"
            transition:fly={{ y: -30 }}
        >
            <div class="flex notification__header">
                <div class="notification__header__left">
                    <img
                        class="notification__icon"
                        src={Info}
                        alt="info icon"
                    />
                    <p class="notification__type">{notification.type}</p>
                </div>
                <p class="notification__time">08:24:50</p>
            </div>
            <p class="notification__message">{notification.message}</p>
        </div>
    {/each}
</div>

<style>
    .notifications {
        display: flex;
        /* NOTE: change to column if you want to notify on the top of the app. */
        flex-direction: column-reverse;
        justify-content: flex-start;
        align-items: center;
        pointer-events: none;
        /* positions */
        position: absolute;
        right: 2rem;
        bottom: 0.5rem;
    }
    .notification {
        font-size: 1.2rem;
        padding: 2rem 3rem;
        background-color: #27272d;
        color: white;
        width: 500px;
        border-radius: 1rem;
        z-index: 9999;
        flex: 0 0 auto;
        margin-bottom: 0.5rem;
    }

    .notification__header {
        margin-bottom: 1rem;
        font-size: 1rem;
    }

    .notification__header__left {
        display: flex;
        align-content: center;
        gap: 0.5rem;
    }

    .notification__icon {
        width: 1.4rem;
    }

    .notification__type {
        text-transform: capitalize;
    }

    .notification__message {
        font-size: 1.2rem;
    }
</style>

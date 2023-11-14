// @ts-nocheck
import { writable, derived } from "svelte/store"

const TIMEOUT = 3000;

function createNotificationStore(timeout){
    const _notifications = writable([]);

    function send (message, type = "info", timeout) {
        _notifications.update(state => {
            // NOTE: clock is the backend giving when the info was given
            // return [...state, { id: id(), type, message, timeout, clock }]
            return [...state, { id: id(), type, message, timeout }]
        })
    }

    let timers = []

    const notifications = derived(_notifications, ($_notifications, set) => {
        set($_notifications)
        if ($_notifications.length > 0) {
            const timer = setTimeout(() => {
                _notifications.update(state => {
                    state.shift()
                    return state
                })
            }, $_notifications[0].timeout)
            return () => {
                clearTimeout(timer)
            }
        }
    })

    const { subscribe } = notifications

    return {
        subscribe,
        send,
        info: (msg, timeout) => send(msg, "information", timeout),
        success: (msg, timeout) => send(msg, "success", timeout),
        error: (msg, timeout) => send(msg, "erreur", timeout),
    }
}

function id() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

export const notifications = createNotificationStore();



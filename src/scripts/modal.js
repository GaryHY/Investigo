// NOTE: e est l'evenement on click en fait.
export function openModal(e){
    const modal = e.target.closest("button").previousElementSibling;
    if (modal != null) {
        modal.showModal();
    }
}

export function closeModal(e) {
    const modal = e.target.closest(".modal")
    if (modal != null) {
        modal.close();
    }
};



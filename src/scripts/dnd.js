// Ici je mets le code pour le drag and drop
// TODO: Il me faut comprendre ce code parce que c'est chaud la.

export function draggable(node, data) {
    let state = data;

    node.draggable = true;
    node.style.cursor = 'grab';

    function handle_dragstart(e){
        e.dataTransfer.setData('text/plain', state)
        console.log("I amd looking at the event on dragstart", e);
    }

    node.addEventListener("dragstart", handle_dragstart)

    return {
        update(data){
            state = data;
        },
        destroy(){
            node.removeEventListener("dragstart", handle_dragstart);
        }
    }
}

// Dans mon cas la div avec photoModal est une dropzone et c'est la seule dispo.
export function dropzone(node, options) {
    let state = {
        dropEffect: 'move',
        // the dragover is a class that gets attached to the dropzone when something drops over it.
        dragover_class: 'droppable',
        ...options
    }

    function handle_dragenter(e) {
        e.target.classList.add(state.dragover_class);
    }

    function handle_dragleave(e) {
        e.target.classList.remove(state.dragover_class);
    }

    function handle_dragover(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = state.dropEffect;
    }

    // NOTE: Je veux un switch de place comment je peux gerer cela en fait ?
    function handle_drop(e) {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        e.target.classList.remove(state.dragover_class);
        state.on_dropzone(data ,e);
    }

    node.addEventListener("dragenter", handle_dragenter);
    node.addEventListener("dragleave", handle_dragleave);
    node.addEventListener("dragover", handle_dragover);

}

export function scrollMenu(e) {
    const menu = document.querySelector(".menu");
    if (menu != null) {
        menu.style.translateX = "-100%";
        menu.style.top = `${e.explicitOriginalTarget.scrollTop}px`;
    }
}

function isNull(...DomElements){
    return DomElements.reduce((acc, currentDomEl) => acc && (currentDomEl == null), false)
}

// TODO: On peut surement gerer un peu mieux les erreurs en fait.
export function openMenu(e) {
    const menu = document.querySelector(".menu");
    const menuImage = document.querySelector(".menu__image");
    const menuAudio = document.querySelector(".menu__audio");
    if(!isNull(menu, menuImage, menuAudio)){
        if (e.target.closest("button").classList.contains("audio_menu")){
            menuImage.style.display = "none";
            menuAudio.style.display = "block";
        } else {
            menuImage.style.display = "block";
            menuAudio.style.display = "none";
        }
        const isVisible = menu.getAttribute("data-visible");
        isVisible === "true"
            ? menu.setAttribute("data-visible", "false")
            : menu.setAttribute("data-visible", "true");
    }
};

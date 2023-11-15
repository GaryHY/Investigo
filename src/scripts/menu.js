// @ts-nocheck
export function scrollMenu(e) {
    const menu = document.querySelector(".menu");
    if (menu != null) {
        menu.style.translateX = "-100%";
        menu.style.top = `${e.explicitOriginalTarget.scrollTop}px`;
    }
}


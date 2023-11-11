export function openSearchModal() {
    const modal = document.querySelector(".search__modal");
    if(modal != null){
        modal.style.display = "block";
    }
};

export function closeSearchModal() {
    const modal = document.querySelector(".search__modal");
    if(modal != null){
        modal.style.display = "none";
    }
};

export function openParameterModal() {
    const modal = document.querySelector(".parameter__modal");
    if(modal != null){
        modal.style.display = "block";
    }
};

export function closeParameterModal() {
    const modal = document.querySelector(".parameter__modal");
    if(modal != null){
        modal.style.display = "none";
    }
};

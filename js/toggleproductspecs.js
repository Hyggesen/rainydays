var desContent = "";
var arrowIcon = "";

function openDescription() {
    desContent = document.querySelector(".product-description__content");
    arrowIcon = document.getElementById("description-arrow");
    changeContent();
}

function openTechSpecs() {
    desContent = document.querySelector(".technical-spesification__content");
    arrowIcon = document.getElementById("technical-arrow");
    changeContent();
}

function openSizeguide() {
    desContent = document.querySelector(".size-guide__content");
    arrowIcon = document.getElementById("size-arrow");
    changeContent();
}

function changeContent() {
    if (desContent.style.display === "none") {
        desContent.style.display = "block";

        arrowIcon.classList.remove("fa-chevron-right");
        arrowIcon.classList.add("fa-chevron-down");
    } else {
        desContent.style.display = "none";
        arrowIcon.classList.remove("fa-chevron-down");
        arrowIcon.classList.add("fa-chevron-right");
    }
    
}


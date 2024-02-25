// ============================== Module Notes ================================
//
// Module contains function to change hero background
//
// ============================================================================


/* Function sourced from stack overflow */
const imagesArray = [
    "hero-1.jpg",
    "hero-2.jpg",
    "hero-3.jpg"
    ]
let currentIndex = 0

// Function to change hero background image
function changeHeroBackground() {

    let hero = document.getElementById("hero-img")

    currentIndex = (currentIndex + 1) % imagesArray.length;
    hero.style.backgroundImage = `url(assets/images/${imagesArray[currentIndex]})`;
    }

setInterval(changeHeroBackground, 5000)

const brochureBtn = document.getElementById("brochure-btn");
brochureBtn.addEventListener("click", ()=> {
    redirectToElement("brochure.html#brochure-form");
});

// Function to redirect to another element
function redirectToElement(path) {
    window.location = path;
}
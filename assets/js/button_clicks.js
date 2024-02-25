// ============================== Module Notes ================================
//
// Module contains all button click events for the site
//
// ============================================================================


// Constants
const sideMenu = document.getElementById("side-menu");
const sideMenuCloseIcon = document.getElementById("side-menu-close-icon");
const menuIcon = document.getElementById("menu-icon");
const servicesImgs = document.querySelectorAll('.services-img-container');




// Event listeners
sideMenuCloseIcon.addEventListener("click", openCloseSideMenu);
menuIcon.addEventListener("click", openCloseSideMenu);

servicesImgs.forEach(img => {
    img.addEventListener('click', function handleClick(event) {
        redirectToElement("about.html#contact-form")
    });
});


// Function to redirect to another element
function redirectToElement(path) {
    window.location = path;
}


// Function to open and close the side navigation menu
function openCloseSideMenu() {

    // Variables
    let positionInfo = sideMenu.getBoundingClientRect()
    let width = positionInfo.width

    /* Condition that checks the width of the side menu div.
        Then resizes the div based on the if logic  */
    if (width > "0") {
        sideMenu.style.width = "0px";
    }
    else {
        sideMenu.style.width = "250px";
    }
};
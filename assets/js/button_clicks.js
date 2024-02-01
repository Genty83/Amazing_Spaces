// ============================== Module Notes ================================
//
// Module contains all button click events for the site
//
// ============================================================================

const navBar = document.getElementById("side-menu")



// Function to redirect to brochure form
function goToBrochure() { 

    brochurePath =  "brochure.html#brochure-form"

    window.location = brochurePath;
};

// Function to redirect to contact form
function goToContactForm() { 

    brochurePath =  "about.html#contact-form"

    window.location = brochurePath;
};


// Open/Close Side menu
function openCloseSideMenu() {
    // Variables
    let positionInfo = navBar.getBoundingClientRect()
    let width = positionInfo.width

    if (width > "0") {
        navBar.style.width = "0px";
    }
    else {
        navBar.style.width = "250px";
    }
};
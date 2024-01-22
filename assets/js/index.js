// 


const navBar = document.getElementById("side-menu")


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
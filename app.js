// DOM ==> Document Object Model
function showSideBar(){
    const hamburger = document.querySelector(".hamburger");
    const sidebarContainer = document.querySelector(".sidebar-container");
    const sidebarCloseButton = document.querySelector(".close-button");

    const openSidebar = () => {
    sidebarContainer.classList.add("show-sidebar");
    console.log(sidebarContainer.classList);
}
    const closeSidebar = () => {
    sidebarContainer.classList.remove("show-sidebar");
    console.log(sidebarContainer.classList);
}
    hamburger.addEventListener("click", openSidebar);
    sidebarCloseButton.addEventListener("click", closeSidebar);
}
showSideBar();

function navBarScroll(){
    const navbarContainer = document.querySelector(".nav-container");
    window.addEventListener("scroll", function(){
    // console.log(window.scrollY);
    const scrollNumber = window.scrollY;
    // console.log(scrollNumber);
    //console.log(window.innerWidth);
    const targetNumber= window.innerWidth >= 992 ? 70 : 50;
    if(scrollNumber > targetNumber) {
        navbarContainer.classList.add("sticky-nav");
    } else {
        navbarContainer.classList.remove("sticky-nav");
    }
});
}
navBarScroll();
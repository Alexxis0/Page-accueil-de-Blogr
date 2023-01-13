let linkMenu = document.querySelectorAll(".link_menu");
let headerMenu = document.querySelector(".header_menu");
let body = document.querySelector("body");
let titleNav = document.querySelectorAll(".title_nav");
let arrowBottom = document.querySelectorAll(".arrow_bottom");
let activeMenu = document.querySelectorAll(".active_menu");
let iconHamburger = document.querySelector(".icon_hamburger");
let iconHamburgerClose = document.querySelector(".icon_hamburger_close");

linkMenu.forEach((element) => {
    element.addEventListener("click", () => {
        element.children[0].classList.toggle("title_nav_underline");
        element.children[1].classList.toggle("arrow_bottom_rotate");
        element.parentElement.children[1].classList.toggle("active_menu");
    });
});

iconHamburger.addEventListener("click", () => {
    iconHamburgerClose.classList.toggle("ouvrir");
    iconHamburger.classList.toggle("fermer");
});
iconHamburgerClose.addEventListener("click", () => {
    iconHamburgerClose.classList.toggle("ouvrir");
    iconHamburger.classList.toggle("fermer");
});

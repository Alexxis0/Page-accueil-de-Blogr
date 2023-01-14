let linkMenu = document.querySelectorAll(".link_menu");
let headerMenu = document.querySelector(".header_menu");
let body = document.querySelector("body");
let titleNav = document.querySelectorAll(".title_nav");
let arrowBottom = document.querySelectorAll(".arrow_bottom");
let activeMenu = document.querySelectorAll(".active_menu");
let iconHamburger = document.querySelector(".icon_hamburger");
let iconHamburgerClose = document.querySelector(".icon_hamburger_close");
let menu = document.querySelector(".menu");
let ArrowMenu = document.querySelectorAll(".arrow_menu");
let menuPara = document.querySelectorAll(".menu_para");
let menuMobile = document.querySelectorAll(".menu_mobile");

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
    menu.classList.toggle("menu_open");
});

iconHamburgerClose.addEventListener("click", () => {
    iconHamburgerClose.classList.toggle("ouvrir");
    iconHamburger.classList.toggle("fermer");
    menu.classList.toggle("menu_open");
});

menuPara.forEach((element) => {
    element.addEventListener("click", () => {
        element.children[0].classList.toggle("rotate_arrow_menu");
        console.log(element.parentElement.children[1].classList.toggle('menu_mobile_open'));
    });
});



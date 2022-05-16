mediumZoom(".catalog__item_image", {
    margin: 100,
});

const dropDown = document.getElementById("dropDown");
const navDropdown = document.getElementsByClassName("nav__dropdown");
navDropdown[0].addEventListener("click", () => {
    dropDown.classList.toggle("nav__dropdown_active");
    navDropdown[0].classList.toggle("nav__dropdown_active");

});

const burger = document.getElementById("burger");
const navLinks = document.getElementsByClassName("nav__links")
burger.addEventListener("click", () => {
    burger.classList.toggle("burger__active");
    navLinks[0].classList.toggle("nav__links_active");

});
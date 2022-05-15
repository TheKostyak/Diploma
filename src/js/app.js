mediumZoom(".catalog__item_image", {
    margin: 100,
});

const dropDown = document.getElementById('dropDown');
const navDropdown = document.getElementsByClassName("nav__dropdown");
navDropdown[0].addEventListener("click", () => {
    dropDown.classList.toggle("nav__dropdown_active");
    navDropdown[0].classList.toggle("nav__dropdown_active");

});
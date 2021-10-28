//when you click the mobile menu toggle, this function will run and reveal the navbar
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar_menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

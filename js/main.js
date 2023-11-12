const menuBtn = document.querySelector(".menu__btn");
const menuClose = document.querySelector(".menu__close");
const menulist = document.querySelector(".menu__list");
const menuShadow = document.querySelector(".menu--close");

menuBtn.addEventListener("click", () => {
  // menulist.classList.add("menu__list--open");
  menulist.classList.toggle("menu__list--open");
  menuShadow.classList.toggle("menu--open");
});

menuClose.addEventListener("click", () => {
  menulist.classList.remove("menu__list--open");
  menuShadow.classList.remove("menu--open");
});

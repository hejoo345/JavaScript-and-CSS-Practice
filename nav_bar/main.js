const toogleBtn = document.querySelector(".navbar_toogleBtn");
const menu = document.querySelector(".navbar_menu");
const icons = document.querySelector(".navbar_icons");

toogleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

// const toggleBtn = document.querySelector(".navbar_toogleBtn");
// const menu = document.querySelector("navbar_menu");
// const icons = document.querySelector("navbar_icons");

// toggleBtn.addEventListener("click", () => {
//   menu.classList.toggle("active");
//   icons.classList.toggle("active");
// });

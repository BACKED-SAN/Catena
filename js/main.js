const hamburger = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".navbar__hidden_menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
});

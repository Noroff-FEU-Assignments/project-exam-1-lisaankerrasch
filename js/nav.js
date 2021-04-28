const dropdownButton = document.querySelector(".dropdown-header");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdown = document.querySelector(".dropdown");
const toTopButton = document.querySelector(".to-top");

dropdownButton.onmouseover = function showMenu() {
  dropdown.classList.remove("show-hide");
};

dropdownButton.onmouseout = function showMenu() {
  dropdown.classList.add("show-hide");
};

dropdownMenu.onmouseover = function showMenu() {
  dropdown.classList.remove("show-hide");
};

dropdownMenu.onmouseout = function showMenu() {
  dropdown.classList.add("show-hide");
};

toTopButton.onclick = function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const dropdownButton = document.querySelector(".dropdown-header");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdown = document.querySelector(".dropdown");
const toTopButton = document.querySelector(".to-top");
const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".search-bar");
const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");

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

searchIcon.onclick = function showSearch() {
  searchBar.classList.toggle("show-hide");
};

menuIcon.onclick = function showMobileMenu() {
  mobileMenu.classList.toggle("show-hide");
};

const dropdownUrl =
  "https://peckish.lisa-noroff.no/wp-json/wp/v2/categories?per_page=30";
const dropdownContainer = document.querySelector(".dropdown-menu");

async function getDropdown() {
  try {
    const response = await fetch(dropdownUrl);
    const dropdown = await response.json();

    console.log(dropdown);

    dropdownContainer.innerHTML += `
      <a href="result.html?id=${dropdown[3].id}">${dropdown[3].name}</a>
      <a href="result.html?id=${dropdown[16].id}">${dropdown[16].name}</a>
      <a href="result.html?id=${dropdown[7].id}">${dropdown[7].name}</a>
      <a href="result.html?id=${dropdown[6].id}">${dropdown[6].name}</a>
      <a href="result.html?id=${dropdown[8].id}">${dropdown[8].name}</a>
      
         `;
  } catch (error) {
    console.log(error);
  }
}

getDropdown();

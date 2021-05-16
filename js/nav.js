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

const searchUrl =
  "https://peckish.lisa-noroff.no/wp-json/wp/v2/posts?_embed&per_page=30";

const goSearch = document.querySelector(".go-button");
const searchField = document.querySelector("#searchfield");
const searchPhrase = document.querySelector("#searchfield").value.toLowerCase();
const resultContainer = document.querySelector(".search-container");
const hiddenForSearch = document.querySelector(".hideforsearch");
const searchText = document.querySelector(".search-result-text");
const resultLoader = document.querySelector(".loader-container");
const noResults = document.querySelector(".error");

searchField.addEventListener("keyup", function (clickGo) {
  if (clickGo.keyCode === 13) {
    clickGo.preventDefault();
    goSearch.click();
  }
});

goSearch.onclick = async function searchBlogposts() {
  try {
    response = await fetch(searchUrl);
    const resultList = await response.json();

    console.log(resultList);

    searchBar.classList.add("show-hide");
    resultLoader.classList.add("loader");
    const searchPhrase = document
      .querySelector("#searchfield")
      .value.toLowerCase();
    hiddenForSearch.style.display = "none";
    console.log(searchPhrase);

    for (let i = 0; i < resultList.length; i++) {
      if (
        resultList[i].title.rendered.toLowerCase().includes(searchPhrase) ||
        resultList[i].acf.category.toLowerCase().includes(searchPhrase)
      ) {
        noResults.style.display = "none";
        resultLoader.classList.remove("loader");
        searchText.style.display = "block";
        searchText.innerHTML = `Your search for "${searchPhrase}" returned these recipes:`;
        resultContainer.style.display = "flex";
        resultContainer.style.justifyContent = "space-between";
        resultContainer.style.flexWrap = "wrap";

        resultContainer.innerHTML = `
            <div class="result-item">
            <a href="blogpost.html?id=${resultList[i].id}">
                  <img class="result-img" src="${resultList[i]._embedded["wp:featuredmedia"]["0"].source_url}"
                  alt="${resultList[i].title.rendered}">
                  <a href="blogpost.html?id=${resultList[i].id}">
                  <div class="result-title">
                  <h3>${resultList[i].title.rendered}</h3>
                  <p>Time: ${resultList[i].acf.time}</p>
                  <p>Allergens: ${resultList[i].acf.allergens}</hp>
                  </div>
            </a>
            </div>
          `;
        return;
      } else {
        resultLoader.classList.remove("loader");
        resultContainer.style.display = "none";
        searchText.style.display = "none";
        noResults.style.display = "block";
        const searchPhrase = document.querySelector("#searchfield").value;
        noResults.innerHTML = `Your search for "${searchPhrase}" returned no results.`;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

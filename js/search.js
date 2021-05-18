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

searchField.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    goSearch.click();
  }
});

goSearch.onclick = async function searchBlogposts() {
  try {
    response = await fetch(searchUrl);
    const resultList = await response.json();

    console.log(resultList);

    resultLoader.classList.add("loader");
    const searchPhrase = document
      .querySelector("#searchfield")
      .value.toLowerCase();
    hiddenForSearch.style.display = "none";
    console.log(searchPhrase);

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

      for (let i = 0; i < resultList.length; i++) {
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
      }
      return;
    } else {
      resultLoader.classList.remove("loader");
      resultContainer.style.display = "none";
      searchText.style.display = "none";
      noResults.style.display = "block";
      const searchPhrase = document.querySelector("#searchfield").value;
      noResults.innerHTML = `Your search for "${searchPhrase}" returned no results.`;
    }
  } catch (error) {
    console.log(error);
  }
};

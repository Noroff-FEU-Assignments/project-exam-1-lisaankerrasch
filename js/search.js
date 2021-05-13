fetch("https://peckish.lisa-noroff.no/wp-json/wp/v2/posts?_embed")
  .then((response) => response.json())
  .then((searchResults) => {
    createResultList(searchResults);
    filteredResults = searchResults;
  });

const nameForm = document.querySelector(".search-box");
let filteredResults = [];

nameForm.addEventListener("input", (event) => {
  event.preventDefault();
  const term = event.target.value.toLowerCase();
  let searchResult = filteredResults.filter((searchResults) => {
    return filteredResults.name.toLowerCase().includes(term);
  });

  createResultList(searchResult);
});

console.log(searchResults);

const popularUrl =
  "https://peckish.lisa-noroff.no/wp-json/wp/v2/posts?_embed&categories=64";
const popularContainer = document.querySelector(".popular-container");

async function getPopular() {
  try {
    const response = await fetch(popularUrl);
    const blogList = await response.json();

    const blog = blogList;

    console.log(blogList);

    for (let i = 0; i < blogList.length; i++) {
      if (i === 3) {
        break;
      }
      popularContainer.innerHTML += `
      <div class="popular-item">
          <a href="blogpost.html?id=${blog[i].id}">
              <img class="popular-img" src="${blog[i]._embedded["wp:featuredmedia"]["0"].source_url}"
              alt="${blog[i].title.rendered}">
  
              <div class="popular-title">
              <h3>${blog[i].title.rendered}</h3>
              </div>
             
           </a>
      </div>
       `;
    }
  } catch (error) {
    console.log(error);
  }
}

getPopular();

const categoryUrl =
  "https://peckish.lisa-noroff.no/wp-json/wp/v2/categories?per_page=30";
const recipeContainer = document.querySelector(".recipes");

async function getCategories() {
  try {
    const response = await fetch(categoryUrl);
    const categories = await response.json();

    console.log(categories);

    for (let i = 0; i < categories.length; i++) {
      if (i === 1) {
        break;
      }
      recipeContainer.innerHTML += `<div class="recipe-flex">
      <a href="result.html?categories=${categories[i].id}" class="recipe-item-1">${categories[15].name}</a>
      <a href="result.html?id=${categories[i].id}" class="recipe-item-2">${categories[2].name}</a>
      <a href="result.html?id=${categories[i].id}" class="recipe-item-3">${categories[10].name}</a>
    </div>
    <div class="recipe-flex">
    <a href="result.html?id=${categories[i].id}" class="recipe-item-4">${categories[4].name}</a>
    <a href="result.html?id=${categories[i].id}" class="recipe-item-5">${categories[19].name}</a>
    <a href="result.html?id=${categories[i].id}" class="recipe-item-6">${categories[13].name}</a>
    </div>
    <div class="recipe-flex">
    <a href="result.html?id=${categories[i].id}" class="recipe-item-7">${categories[21].name}</a>
    <a href="result.html?id=${categories[i].id}" class="recipe-item-8">${categories[23].name}</a>
    <a href="result.html?id=${categories[i].id}" class="recipe-item-9">${categories[11].name}</a>
    </div>
      
         `;
    }
  } catch (error) {
    console.log(error);
  }
}

getCategories();

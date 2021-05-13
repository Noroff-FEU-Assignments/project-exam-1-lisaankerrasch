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
const cuisineContainer = document.querySelector(".cuisine");
const mealContainer = document.querySelector(".meals");

async function getMealtypes() {
  try {
    const response = await fetch(categoryUrl);
    const meals = await response.json();

    console.log(meals);

    mealContainer.innerHTML += `<div class="meal-flex">
      <a href="result.html?id=${meals[3].id}" class="meal-item-1">${meals[3].name}</a>
      <a href="result.html?id=${meals[16].id}" class="meal-item-2">${meals[16].name}</a>
      <a href="result.html?id=${meals[7].id}" class="meal-item-3">${meals[7].name}</a>
    <a href="result.html?id=${meals[6].id}" class="meal-item-4">${meals[6].name}</a>
    <a href="result.html?id=${meals[8].id}" class="meal-item-5">${meals[8].name}</a>
    </div>
      
         `;
  } catch (error) {
    console.log(error);
  }
}

getMealtypes();

async function getCategories() {
  try {
    const response = await fetch(categoryUrl);
    const categories = await response.json();

    console.log(categories);

    recipeContainer.innerHTML += `<div class="recipe-flex">
      <a href="result.html?id=${categories[15].id}" class="recipe-item-1">${categories[15].name}</a>
      <a href="result.html?id=${categories[2].id}" class="recipe-item-2">${categories[2].name}</a>
      <a href="result.html?id=${categories[10].id}" class="recipe-item-3">${categories[10].name}</a>
   
    
    <a href="result.html?id=${categories[4].id}" class="recipe-item-4">${categories[4].name}</a>
    <a href="result.html?id=${categories[19].id}" class="recipe-item-5">${categories[19].name}</a>
    <a href="result.html?id=${categories[29].id}" class="recipe-item-6">${categories[29].name}</a>
    
    
    <a href="result.html?id=${categories[21].id}" class="recipe-item-7">${categories[21].name}</a>
    <a href="result.html?id=${categories[23].id}" class="recipe-item-8">${categories[23].name}</a>
    <a href="result.html?id=${categories[11].id}" class="recipe-item-9">${categories[11].name}</a>
    </div>
      
         `;
  } catch (error) {
    console.log(error);
  }
}

getCategories();

async function getCuisines() {
  try {
    const response = await fetch(categoryUrl);
    const cuisine = await response.json();

    cuisineContainer.innerHTML += `<div class="recipe-flex">
        <a href="result.html?id=${cuisine[1].id}" class="cuisine-item-1">${cuisine[1].name}</a>
        <a href="result.html?id=${cuisine[12].id}" class="cuisine-item-2">${cuisine[12].name}</a>
        <a href="result.html?id=${cuisine[14].id}" class="cuisine-item-3">${cuisine[14].name}</a>
     
      
      <a href="result.html?id=${cuisine[18].id}" class="cuisine-item-4">${cuisine[18].name}</a>
      <a href="result.html?id=${cuisine[22].id}" class="cuisine-item-5">${cuisine[22].name}</a>
      <a href="result.html?id=${cuisine[24].id}" class="cuisine-item-6">${cuisine[24].name}</a>
      
      
      <a href="result.html?id=${cuisine[25].id}" class="cuisine-item-7">${cuisine[25].name}</a>
      <a href="result.html?id=${cuisine[27].id}" class="cuisine-item-8">${cuisine[27].name}</a>
      <a href="result.html?id=${cuisine[0].id}" class="cuisine-item-9">${cuisine[0].name}</a>
      </div>
        
           `;
  } catch (error) {
    console.log(error);
  }
}

getCuisines();

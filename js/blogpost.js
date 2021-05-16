const blogContainer = document.querySelector(".blog-container");
const commentContainer = document.querySelector(".comment-container");
const image1 = document.querySelector(".img01");
const image2 = document.querySelector(".img02");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "https://peckish.lisa-noroff.no/wp-json/wp/v2/posts/" + id;

const title = document.querySelector("title");

async function getPost() {
  try {
    const response = await fetch(url);
    const blogPost = await response.json();

    createHTML(blogPost);

    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");

    var img1 = document.querySelector("#myImg1");
    const modalImg1 = document.querySelector("#img01");

    var img2 = document.querySelector("#myImg2");
    const modalImg2 = document.querySelector("#img02");

    var closeButton = document.querySelector(".close");

    img1.onclick = function () {
      modal.style.display = "block";
      modalContent.src = this.src;
    };

    img2.onclick = function () {
      modal.style.display = "block";
      modalContent.src = this.src;
    };

    closeButton.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  } catch (error) {
    console.log(error);
  }
}

getPost();

function createHTML(blogPost) {
  const customFields = blogPost.acf;

  blogContainer.innerHTML += `
  <div class="blogpostpage">

        <h1 class="uppercase">${customFields.title}</h1>
        <p>Published: ${customFields.date}</p>
        <div class="recipe-details-flex">
            <div class="portions">
                <p> Portions: ${customFields.portions} </p>
            </div>
            <div class="time"><p> Time: ${customFields.time} </p>
            </div>
        </div>

        <img class="img01" id="myImg1" src="${customFields.img01}" alt="${customFields.title}">
        <p class="allergens">Allergens: ${customFields.allergens}</p>
        <div class="ingredient-flex">
            <div class="ingredient-item-1">
                <h2>${customFields.ingredientheader}</h2>
                    <ul>
                        <li>${customFields.ingredient1}</li>
                        <li>${customFields.ingredient2}</li>
                        <li>${customFields.ingredient3}</li>
                        <li>${customFields.ingredient4}</li>
                        <li>${customFields.ingredient5}</li>
                    </ul>
                </div>
            <div class="ingredient-item-2">
                <h2>${customFields.needheader}</h2>
                    <ul>
                        <li>${customFields.youneed1}</li>
                        <li>${customFields.youneed2}</li>
                        <li>${customFields.youneed3}</li>
                        <li>${customFields.youneed4}</li>
                        <li>${customFields.youneed5}</li>
                    </ul>
            </div>
        </div>
        <h2>${customFields.directions1header}</h2>
        <p>${customFields.directions1}</p>
        <button class="timer">Count down</button>
        <p class="tip">${customFields.tip}</p>
        <img class="img02" id="myImg2" src="${customFields.img02}" alt="${customFields.title}">
        <p>${customFields.directions2}</p>
    </div>
    `;

  title.innerHTML = `Peckish: ${customFields.title}`;
}

createHTML();

const commentsUrl =
  "https://peckish.lisa-noroff.no/wp-json/wp/v2/comments/" + id;

async function createComment(details) {
  try {
    const response = await fetch(commentsUrl);
    const comments = await response.json();

    console.log(comments);

    commentContainer.innerHTML = `<div class="comments">
  
      <h5>${comments.author_name}</h5>

      <p>Published: ${comments.date}</p>
  
     <p> ${comments.content.rendered}</p>
  </div>`;
  } catch (error) {
    console.log(error);
  }
}

createComment();

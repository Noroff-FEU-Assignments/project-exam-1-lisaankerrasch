const blogContainer = document.querySelector(".blog-container");
const commentContainer = document.querySelector(".comment-container");
const title = document.querySelector("title");
const detailsFlex = document.querySelector(".recipe.details.flex");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url =
  "https://peckish.lisa-noroff.no/wp-json/wp/v2/posts/" + id + "?_embed";
// const url = "https://peckish.lisa-noroff.no/wp-json/acf/v3/posts/" + id;
async function createHTML(details) {
  try {
    const response = await fetch(url);
    const blogPost = await response.json();

    const blog = blogPost;

    console.log(blogPost);

    blogContainer.innerHTML += `<div class="blogpostpage">

    <h1 class="uppercase">${blog.title.rendered}</h1>
    <p>Published: ${blog.date}</p>

   <p> ${blog.content.rendered}<br><br> </p>
</div>


  // `;
    //   const modal = document.querySelector(".modal");
    //   const image = document.querySelector(".wp-block-image");
    //   const modalImg = document.querySelector("#img01");

    //   image.onclick = function () {
    //     modal.style.display = "block";
    //     modalImg.src = blog.acf[0];
    //   };

    //   console.log(blog.acf);

    title.innerHTML = `Peckish: ${blog.title.rendered}`;
  } catch (error) {
    console.log(error);
  }
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

// const imageUrl = "https://peckish.lisa-noroff.no/wp-json/acf/v3/posts/" + id;
const modal = document.querySelector(".modal");
const image = document.querySelector(".wp-block-image");
const modalImg = document.querySelector("#img01");

// async function getModal() {
//   try {
//     const response = await fetch(imageUrl);
//     const modalImage = await response.json();

//     console.log(modalImage);

// modal.style.display = "block";
modalImg.src = this.src;

image.onclick = getModal();

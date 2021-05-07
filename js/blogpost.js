const blogContainer = document.querySelector(".blog-container");
const commentContainer = document.querySelector(".comment-container");

const title = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://peckish.lisa-noroff.no/wp-json/wp/v2/posts/" + id;

async function createHTML(details) {
  try {
    const response = await fetch(url);
    const blogPost = await response.json();

    const blog = blogPost;

    console.log(blogPost);

    blogContainer.innerHTML += `<div class="blogpost">

    <h1 class="uppercase">${blog.title.rendered}</h1>
    <p>Published: ${blog.date}</p>

   <p> ${blog.content.rendered}<br><br> </p>
</div>`;

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

    commentContainer.innerHTML += `<div class="comments">
  
      <h3 class="uppercase">${comments.author_name}</h3>
      <p>Published: ${comments.date}</p>
  
     <p> ${comments.content.rendered}<br><br> </p>
  </div>`;
  } catch (error) {
    console.log(error);
  }
}

createComment();

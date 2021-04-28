const url = "https://peckish.lisa-noroff.no/wp-json/wp/v2/posts?_embed";
const blogContainer = document.querySelector(".carousel");

async function getBlogposts() {
  try {
    const response = await fetch(url);
    const blogList = await response.json();

    const blog = blogList;

    console.log(blogList);

    for (let i = 0; i < blogList.length; i++) {
      if (i === 3) {
        break;
      }
      blogContainer.innerHTML += `
    <div class="carousel-item">
        <a href="blogpost.html?id=${blog[i].id}">
            <img class="carousel-img" src="${blog[i]._embedded["wp:featuredmedia"]["0"].source_url}"
            alt="${blog[i].title.rendered}">

            <div class="carousel-title">
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

getBlogposts();

const url = "https://peckish.lisa-noroff.no/wp-json/wp/v2/posts?_embed";
const blogPost = document.querySelector(".blogpost");

async function getBlogposts() {
  try {
    const response = await fetch(url);
    const blogList = await response.json();

    const blog = blogList;

    console.log(blogList);

    for (let i = 0; i < blogList.length; i++) {
      blogPost.innerHTML += `
    <div class="blogpost-block">
        <div class="blogpost-block-1">
            <img src="${blog[i]._embedded["wp:featuredmedia"]["0"].source_url}"
            alt="${blog[i].title.rendered}">
            </div>
        <div class="blogpost-block-2">
            <div class="blogpost-block-text">
            <a href="blogpost.html?id=${blog[i].id}"><h4>${blog[i].title.rendered}</h4></a>
                <p>${blog[i].excerpt.rendered}</p>
                <a href="blogpost.html?id=${blog[i].id}">Read more...</a>
            </div>
    </div>
`;
    }
  } catch (error) {
    console.log(error);
  }
}

getBlogposts();
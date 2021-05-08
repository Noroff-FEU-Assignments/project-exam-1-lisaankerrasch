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

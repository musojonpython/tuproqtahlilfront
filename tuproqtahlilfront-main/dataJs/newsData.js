import { baseUrl } from "./baseUrl.js";
$(document).ready(function () {
  getNewsData();
});
let massiveLength = 0;
async function getNewsData(search) {
  await axios(`${baseUrl}/api/v1/main/news/`, {
    params: {
      search: search,
      page_size: 4,
    },
  }).then((response) => {
    massiveLength = response.data.results.length;
    if (response.data.results.length === 0) {
      newsBox.innerHTML = `  
             <div class="load-data">
                <img src="./images/load-data.gif" alt="">
              </div>`;
    } else {
      const newsBox = document.querySelector("#newsBox");
      let newsItem = response.data.results
        .map((data) => {
          let img = data.images[0];
          const lang = window.localStorage.getItem("language");
          return `
                  <div  data-id=${
                    data.id
                  } class="blog-wrapper clearfix mt-4 item-news">
                    <div class="blog-meta">
                      <ul class="list-inline">
                        <li>
                        <i class="fas fa-calendar-day"></i>
                        ${
                          data.created_date.slice(11, 16) +
                          "/" +
                          data.created_date.slice(0, 10)
                        }</li>
                        <li>
                      <div class="seen"><i class="fas fa-eye"></i> 
                        <span>${data.view_count}</span>
                      </div>
                        </li>
                      </ul>
                  
                    </div>
                    <div class="blog-media">
                      <a href="" title="">
                      <img
                       class="img-responsive img-rounded"
                          src=${img === undefined ? "" : img.file}
                          alt=${img === undefined ? "" : img.name}
                      />
                      </a>
                    </div>
                    <div class="blog-desc-big">
                      <p class="lead">
                        ${
                          lang === "uzb"
                            ? data.title_uz
                            : lang === "eng"
                            ? data.title_en
                            : data.title_ru
                        }
                      </p>
                      <p>
                      ${
                        lang === "uzb"
                          ? data.short_description_uz
                          : lang === "eng"
                          ? data.short_description_en
                          : data.short_description_ru
                      }
                      </p>
                      <a href="news-detail.html" class="btn btn-primary setID">
                      ${
                        lang === "uzb"
                          ? "Ko'proq o'qish"
                          : lang === "eng"
                          ? "Read more"
                          : "Читать далее"
                      }
                      </a> 
                    </div>
                  </div>
                `;
        })
        .join("");
      newsBox.innerHTML = newsItem;
    }
  });
}
if (massiveLength <= 4) {
  const pagination = document.querySelector(".pagination");
  pagination.classList.add("d-none");
}
const item = document.querySelector("#newsBox");
item.addEventListener("click", getNewsDetail);
function getNewsDetail(e) {
  // e.preventDefault();
  if (e.target.classList.contains("setID")) {
    const currentID = e.target.parentElement.parentElement.dataset.id;
    localStorage.setItem("currentID", currentID);
  }
}
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("login-form");
searchForm.addEventListener("submit", Search);
function Search(e) {
  e.preventDefault();
  getNewsData(searchInput.value);
}

// yangiliklar

let newsTitle = document.querySelector('#newsTitle');
newsTitle.innerHTML = `${lang === "uzb"
? "YANGILIKLAR"
: lang === "eng"
  ? "NEWS"
  : "Новости"
}`

let lastnews = document.querySelector('#lastnews');
lastnews.innerHTML = `${lang === "uzb"
? "So'ngi yangiliklar"
: lang === "eng"
  ? "Latest news"
  : "Последние новости"
}`

let moreRead = document.querySelector('#moreRead');
moreRead.innerHTML = `${lang === "uzb"
? "Eng ko'p o'qilgan"
: lang === "eng"
  ? "most read"
  : "Популярное"
}`


function getMostReadData() {
  axios(`${baseUrl}/api/v1/main/news/`).then((response) => {
    const newsBox = document.querySelector("#postWidget");
    let newsItem = response.data.results
      .sort((a, b) => b.view_count - a.view_count).slice(0,
        4).map(function (data) {
        let img = data.images[0];
        const lang = window.localStorage.getItem("language");
        console.log(data);
        return`
            <div data-id=${data.id} class="media">
              <img
              src=${img === undefined ? "" : img.file}
              alt=${img === undefined ? "" : img.name}
                class="img-responsive alignleft img-rounded"
              />
              <div class="media-body">
                <h5 class="mt-0">
                  <a href="#"
                    >${
                      lang === "uzb"
                        ? data.short_description_uz
                        : lang === "eng"
                        ? data.short_description_en
                        : data.short_description_ru
                    }</a
                  >
                </h5>
              <!-- end blog-meta -->
            </div>
          </div>

        `
      })
      .join("");
      console.log(newsItem);
    newsBox.innerHTML = newsItem;
  });
}
getMostReadData()
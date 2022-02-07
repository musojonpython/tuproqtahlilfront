import { baseUrl } from "./baseUrl.js";

function getDocumentsData() {
  axios(`${baseUrl}/api/v1/main/document/`).then((response) => {
    const newsBox = document.querySelector("#newsBox");
    let newsItem = response.data.results
      .map(function (data) {
        let img = data.images[0];
        const lang = window.localStorage.getItem("language");
        return `
                  <div class="blog-wrapper clearfix newsReveral">
                    <div class="blog-meta">
                      <ul class="list-inline">
                        <li>
                        <i class="fas fa-calendar-day"></i>
                        ${
                          data.created_date.slice(11, 16) +
                          "/" +
                          data.created_date.slice(0, 10)
                        }</li>
                      </ul>
                    </div>
                    <div class="blog-media">
                      <a href="" title=""><img
                       class="img-responsive img-rounded"
                          src=${img === undefined ? "" : img.file}
                          alt=${img === undefined ? "" : img.name}
                      /></a>
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
                      <a href="blog-single.html" class="btn btn-primary"
                        >Read More</a
                      >
                    </div>
                  </div>
                `;
      })
      .join("");
    newsBox.innerHTML = newsItem;
  });
}
getDocumentsData()
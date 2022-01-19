import { baseUrl } from "./baseUrl.js";
const newsDetail = document.getElementById("news-item");
const swiper = document.getElementById("swiper");
getNewsDetail();

async function getNewsDetail() {
  const id = localStorage.getItem("currentID");
  const lang = window.localStorage.getItem("language");
  await axios.post(`${baseUrl}/api/v1/main/news/${id}/views_count/`);
  await axios(`${baseUrl}/api/v1/main/news/${id}`)
    .then((response) => {
      swiper.innerHTML = `
      ${response.data.images
        .map((data) => {
          return `
                    <div class="swiper-slide"
                          <img src=${data.file} alt="About image"/>
                     </div>
                      `;
        })
        .join("")} 
      `;
      let news = `
                 <div class="box-header">
                      <div class="date">
                      <i class="fas fa-calendar-day"></i> 
                      <span>${
                        response.data.created_date.slice(11, 16) +
                        "/" +
                        response.data.created_date.slice(0, 10)
                      }
                      </span>
                      </div>
                        <div class="seen"><i class="fas fa-eye"></i> 
                        <span>${response.data.view_count}</span>
                      </div>
                    </div>
                    <div class="news-item">
                          <div class="title">
                          ${
                            lang === "uz"
                              ? response.data.title_uz
                              : lang === "eng"
                              ? response.data.title_en
                              : response.data.title_ru
                          }
                          </div>
                          <div class="short-des"> 
                                 ${
                                   lang === "uz"
                                     ? response.data.short_description_uz
                                     : lang === "eng"
                                     ? response.data.short_description_en
                                     : response.data.short_description_ru
                                 }
                          </div>
                          <div class="media-box">
                            <div class="row">
                                <div class="col-md-12">
                              
                                     <div class=${
                                       response.data.video === null
                                         ? "d-none"
                                         : "col-md-12"
                                     }>
                                        <iframe width="560" height="315" src=${
                                          response.data.video
                                        } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                     </div>
                                </div>
                          </div>
                          <div class="description">
                                  ${
                                    lang === "uz"
                                      ? response.data.body_uz
                                      : lang === "eng"
                                      ? response.data.body_en
                                      : response.data.body_ru
                                  }
                          </div>
                </div>`;
      newsDetail.innerHTML = news;
    })
    .catch((err) => {
      console.log(err);
    });
}

import { baseUrl } from "./baseUrl.js";
const serviceDetail = document.getElementById("service-item");

function getServiceDetail() {
  const id = localStorage.getItem("servicetID");
  const lang = window.localStorage.getItem("language");
  axios(`${baseUrl}/api/v1/main/service/${id}`)
    .then((response) => {
      let currentService = `
                    <div class="news-item">
                          <div class="title">
                          ${
                            lang === "uz"
                              ? response.data.name_uz
                              : lang === "eng"
                              ? response.data.name_en
                              : response.data.name_ru
                          }
                          </div>
                          <div class="media-box">
                            <div class="row">
                                <div class="col-md-12">
                                    <div id="aboutCarousel" class="owl-carousel">
                                        ${response.data.images
                                          .map((data) => {
                                            return `
                                                    <img src=${data.file} alt="About image"/>
                                                    `;
                                          })
                                          .join("")}
                                       </div>
                                     </div>
                                </div>
                          </div>
                          <div class="description">
                                  ${
                                    lang === "uz"
                                      ? response.data.about_uz
                                      : lang === "eng"
                                      ? response.data.about_en
                                      : response.data.about_ru
                                  }
                          </div>
                </div>`;
      serviceDetail.innerHTML = currentService;
    })
    .catch((err) => {
      console.log(err);
    });
}
getServiceDetail();

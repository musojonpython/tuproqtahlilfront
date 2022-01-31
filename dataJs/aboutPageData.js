import { baseUrl } from "./baseUrl.js";
const lang = localStorage.getItem("language");

$(document).ready(function () {
  getAboutData();
  getNewsData();
  getServiceData();
});
function getAboutData() {
  axios(`${baseUrl}/api/v1/main/history/`).then((response) => {
    const historyContent = document.querySelector("#historyContent");
    let newsItem = response.data.results
      .map(function (data) {
        let img = data.images[0];
        return `
           <div class="col-md-4 hidden-sm hidden-xs">
              <div id="imageAbout" class="custom-module">
                <img
                  src=${img.file}
                  alt="About image"
                  class="img-responsive wow slideInLeft"
                />
              </div>
            </div>
            <div class="col-md-8">
              <div class="custom-module p40l">
                <h2 id="aboutTitle" class="title">
                ${lang === "uzb"
            ? " Biz haqimizda"
            : lang === "eng"
              ? "About us"
              : "О Нас"
          }
                </h2>
                <p class="text">
                  ${lang === "uzb"
            ? data.text_uz.slice(0, 1000)
            : lang === "eng"
              ? data.text_en.slice(0, 1000)
              : data.text_ru.slice(0, 1000)
          } ....
          </p>
                <div class="btn-wrapper title">
                  <a href="about-us.html" >${lang === "uzb"
            ? "Ko'proq o'qish"
            : lang === "eng"
              ? "See more"
              : "Узнать больше"
          }</a>
                </div>               
              </div>
            </div>
                `;
      })
      .join("");
    historyContent.innerHTML = newsItem;
  });
}
function setCarouselItem(item) {
  $(item).owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1367: {
        items: 4,
      },
    },
  });
}

async function getNewsData() {
  const owl = document.querySelector(".owl-carousel");
  await axios
    .get(`${baseUrl}/api/v1/main/news/`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((response) => {
      let carouselItem = response.data.results
        .map((data) => {
          let img = data.images[0];
          return `
            <div id="newsBox" data-id=${data.id} class="caro-item card-up setID">
                <div class="course-box">
                <div class="image-wrap entry">
                  <img
                    src=${img.file}
                    alt=""
                    class="img-responsive"
                  />
                  <div class="magnifier">
                    <a href="#" title=""><i class="flaticon-add"></i></a>
                  </div>
                </div>
                <div class="course-details ">
                  <h4>
                    <a href="#" title="">Lorem ipsum dolor sit amet.</a>
                  </h4>
                  <p>
                    Fusce interdum, elit sit amet vehicula malesuada, eros
                    libero elementum orci.
                  </p>
                </div>
                </div>
              </div>
            </div>
           `;
        })
        .join("");
      owl.innerHTML = carouselItem;
      setCarouselItem(owl);
    });
}

function getServiceData() {
  let count = 1;
  axios(`${baseUrl}/api/v1/main/service/`).then((response) => {
    let serviceBox = document.getElementById("serviceBox");
    let service = response.data.results
      .map((data) => {
        let img = data.images[0];
        count++;
        if (data) {
          return `
                  <div class="col-sm-6 col-md-4 service-card">
                      <div class="box m30">
                            <img class="img-responsive img-rounded"
                                      src=${img === undefined ? "" : img.file}
                                      alt=${img === undefined ? "" : img.name}
                               />
                          <h4>
                          ${lang === "uz"
              ? data.name_uz
              : lang === "eng"
                ? data.name_en
                : data.name_ru
            }
                          </h4>
                          <p>
                          ${lang === "uz"
              ? data.about_uz.slice(0, 120) + "..."
              : lang === "eng"
                ? data.about_en.slice(0, 120) + "..."
                : data.about_ru.slice(0, 120) + "..."
            }
                          </p>
                          <a href="#" class="readmore">${lang === "uzb"
              ? "Ko'proq o'qish"
              : lang === "eng"
                ? "See more"
                : "Узнать больше"
            }</a>
                        </div>
                    </div> 
                   `;
        } else {
          return `
                <h1>Loading</h1>
            `;
        }
      })
      .join("");
    serviceBox.innerHTML = service;
  });
}


// const lang = window.localStorage.getItem("language");
const tahlilTitle = document.querySelector("#tahlil-title");
tahlilTitle.innerHTML = `${lang === "uzb"
  ? "Tahlil turlari"
  : lang === "eng"
    ? "Types of analysis"
    : "Виды анализа"
  }`


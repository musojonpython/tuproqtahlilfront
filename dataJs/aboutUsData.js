import { baseUrl } from "./baseUrl.js";
const lang = localStorage.getItem("language");



function setAboutImg() {
  axios(`${baseUrl}/api/v1/main/history/`).then((response) => {
    let aboutUsData = response.data.results[0];
    let aboutText = document.querySelector("#aboutText");
    let content = `
        <div class="row">
           <div class="col-md-12">
                <div id="aboutCarousel" class="owl-carousel" 
                ${aboutUsData.images.map((data) => {
      return `
                      <img src=${data.file} alt="About image"/>
                    `;
    }).join("")}
                </div>
           </div>
            <div class="col-md-12">
              <div class="custom-module p40l"> 
                <p class="text">
                ${lang === "eng"
        ? aboutUsData.text_en
        : lang === "rus"
          ? aboutUsData.text_ru
          : aboutUsData.text_uz
      }
                </p>
              </div>
            </div>
          </div>
      `;
    aboutText.innerHTML = content;
    setCarouselItem("#aboutCarousel");
  });
}

function setCarouselItem(item) {
  $(item).owlCarousel({
    items: 1,
    margin: 10,
    autoHeight: true,
  });
}
setAboutImg();

function filterMenu() {
  let filterMenu = document.querySelector(".filter-menu");
  axios(`${baseUrl}/api/v1/main/gallery_type/`).then((response) => {
    let content = response.data.results
      .map((data) => {
        return `
       <li data-target=${data.title}>
          ${lang === "eng"
            ? data.title_en
            : lang === "rus"
              ? data.title_ru
              : data.title_uz
          }
       </li>
      `;
      })
      .join("");
    filterMenu.innerHTML = content;
  });
}
filterMenu();

function filterItem() {
  let filterItem = document.querySelector(".filter-item");
  axios(`${baseUrl}/api/v1/main/gallery/`).then((response) => {
    let content = response.data.results
      .map((data) => {
        return `
        <li data-item="Title1"><img src=${data.image.file} alt=""></li>
      `;
      })
      .join("");
    filterItem.innerHTML = content;
  });
}
filterItem();

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
    console.log(response);
    let content = response.data.results
    .map((data) => {
      return `
      <li data-item="Title1"><img src=${data.image.file} alt="image"></li>
    `;
    })
    .join("");
    filterItem.innerHTML = content;
  })
}
filterItem();


  // korxona vazifalari

  let taskTitle1 = document.querySelector('#taskTitle');
  taskTitle1.innerHTML = `${lang === "uzb"
  ? "Korxonaning asosiy vazifalari"
  : lang === "eng"
    ? "The main functions of the enterprise"
    : "Oсновные функции предприятия"
  }`

  let task1 = document.querySelector('#task1');
  task1.innerHTML = `${lang === "uzb"
  ? "O‘zbekiston Respublikasi viloyatlari, tumanlari va hududlari tuproq xaritalarini tuzish"
  : lang === "eng"
    ? "Drawing up soil maps of regions, districts and regions territory of the Republic of Uzbekistan"
    : "Составление почвенных карт областей, районов и областей территории Республики Узбекистан"
  }`

  let task2 = document.querySelector('#task2');
  task2.innerHTML = `${lang === "uzb"
  ? "Sho`rlangan tuproqlar xaritalarini tuzish"
  : lang === "eng"
    ? "Drawing up maps of saline soil"
    : "Составление карт засоленных почв."
  }`

  let task3 = document.querySelector('#task3');
  task3.innerHTML = `${lang === "uzb"
  ? "Sug'oriladigan va sug'orilmaydigan yerlarning tuproq sifatini baholash xaritalari"
  : lang === "eng"
    ? "Maps of soil quality assessment of irrigated and non-irrigated lands"
    : "Карты оценки качества почв орошаемых и неорошаемых земель"
  }`

  let task4 = document.querySelector('#task4');
  task4.innerHTML = `${lang === "uzb"
  ? "Sug'oriladigan yerlarning agrokimyoviy kartogrammalarini ishlab chiqish"
  : lang === "eng"
    ? "Development of agrochemical cartograms of irrigated lands"
    : "Разработка агрохимических картограмм орошаемых земель"
  }`

  let ab = document.querySelector('.about-uss');
  ab.innerHTML = `${lang === "uzb"
  ? "Biz haqimizda"
  : lang === "eng"
    ? "About Us"
    : "О нас"
  }`
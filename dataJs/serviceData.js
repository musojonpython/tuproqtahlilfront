import { baseUrl } from "./baseUrl.js";
const lang = localStorage.getItem("language");


const currentService = document.querySelector("#event-boxes");
currentService.addEventListener("click", getNewsDetail);
function getNewsDetail(e) {
  if (e.target.classList.contains("setID")) {
    console.log(e.target.parentElement.dataset);
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem("servicetID", id);
  }
}

function getServiceData() {
  axios(`${baseUrl}/api/v1/main/service/`).then((response) => {
    let eventBoxes = document.getElementById("event-boxes");
    let service = response.data.results
      .map((data) => {
        let img = data.images[0];
        return `
            <div class="col-sm-6 col-md-4">
                  <div  class="course-box">
                      <div class="image-wrap entry">
                          <img
                              src=${img === undefined ? "" : img.file}
                              alt=""
                              class="img-responsive"
                          />
                          <div class="magnifier setID" data-id=${data.id}>
                              <a href="service-detail.html" title=""><i class="flaticon-add"></i></a>
                          </div>
                      </div>
                      <div class="course-details ">
                      <h4 data-id=${data.id}>
                          <a href="service-detail.html" title="" class="setID">
                            ${lang === "uzb"
                              ? data.name_uz
                              : lang === "eng"
                                ? data.name_en
                                : data.name_ru
                            }
                          </a>
                      </h4>
                      <p>
                        ${lang === "uzb"
            ? data.about_uz.slice(0, 120) + "..."
            : lang === "eng"
              ? data.about_en.slice(0, 120) + "..."
              : data.about_ru.slice(0, 120) + "..."
          }
                      </p>
                      </div>
                  </div>
            </div>
                   `;
      })
      .join("");
    eventBoxes.innerHTML = service;
  });
}
getServiceData();

function getTeamData() {
  axios(`${baseUrl}/api/v1/main/employee/`).then((response) => {
    let teamBox = document.getElementById("team");
    let team = response.data.results
      .map((data) => {
        let image = data.image.file;
        return `
         <div class=" col-sm-6 col-md-4">
              <div class="teammembers">
                <div class="entry">
                  <img
                    src=${image}
                    alt=""
                    class="img-responsive"
                  />
                  <div class="magnifier">
                    <div class="visible-buttons1 teambuttons">
                      <p>
                        <p style="margin: 0px; padding: 0px;">Murojat uchun: ${data.phone_number}</p>
                        <p style="margin: 0px; padding: 0px;">Qabul kunlari:  ${data.time_to_apply}</p>
                      </p>
                      <div class="social-links">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-telegram"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="teamdesc">
                  <h4> ${lang === "uzb"
            ? data.full_name_uz
            : lang === "eng"
              ? data.full_name_en
              : data.full_name_ru
          }
                  </h4>
                  <p> ${lang === "uzb"
            ? data.about_uz.slice(0, 120) + "..."
            : lang === "eng"
              ? data.about_en.slice(0, 120) + "..."
              : data.about_ru.slice(0, 120) + "..."
          }</p>
                </div>
              </div>
            </div>
                   `;
      })
      .join("");
    teamBox.innerHTML = team;
  });
}
getTeamData();

const leaderTitle = document.querySelector("#leader-title");
leaderTitle.innerHTML = `${lang === "uzb"
  ? "Rahbariyat"
  : lang === "eng"
    ? "Leadership"
    : "Руководство"
  }`

  const eventTitle = document.querySelector("#eventTitle");
  eventTitle.innerHTML = `${lang === "uzb"
  ? "Biz sizga eng yaxshi va sifatli xizmatlarni taklif etamiz!"
  : lang === "eng"
    ? "We offer the best and quality services"
    : "Mы предлагаем лучшие и качественные услуги"
  }`

  const offer = document.querySelector("#offer");
  offer.innerHTML = `${lang === "uzb"
  ? "Xizmat buyurtma qilish"
  : lang === "eng"
    ? "Order service"
    : "Заказать услугу"
  }`
import { baseUrl } from "./baseUrl.js";
const lang = localStorage.getItem("language");
function getServiceData() {
  axios(`${baseUrl}/api/v1/main/service/`).then((response) => {
    let eventBoxes = document.getElementById("event-boxes");
    let service = response.data.results
      .map((data) => {
        let img = data.images[0];
        return `
            <div class="col-md-4">
                  <div  class="course-box">
                      <div class="image-wrap entry">
                          <img
                              src=${img === undefined ? "" : img.file}
                              alt=""
                              class="img-responsive"
                          />
                          <div class="magnifier setID">
                              <a href="service-detail.html" title=""><i class="flaticon-add"></i></a>
                          </div>
                      </div>
                      <div class="course-details ">
                      <h4 data-id=${data.id}>
                          <a href="service-detail.html" title="" class="setID">${
                            lang === "uz"
                              ? data.name_uz
                              : lang === "eng"
                              ? data.name_en
                              : data.name_ru
                          }</a>
                      </h4>
                      <p>
                        ${
                          lang === "uz"
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

const currentService = document.querySelector("#event-boxes");
currentService.addEventListener("click", getNewsDetail);
function getNewsDetail(e) {
  if (e.target.classList.contains("setID")) {
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem("servicetID", id);
  }
}
function getTeamData() {
  axios(`${baseUrl}/api/v1/main/employee/`).then((response) => {
    let teamBox = document.getElementById("team");
    let team = response.data.results
      .map((data) => {
        return `
         <div class="col-md-4 col-sm-6">
              <div class="teammembers">
                <div class="entry">
                  <img
                    src="./images/img/team1.jpg"
                    alt=""
                    class="img-responsive"
                  />
                  <div class="magnifier">
                    <div class="visible-buttons1 teambuttons">
                      <p>
                        We’re committed to work and play our client meeting room
                        transforms into a table tennis
                      </p>
                      <div class="social-links">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-dribbble"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-skype"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="teamdesc">
                  <h4> ${
                    lang === "uz"
                      ? data.full_name_uz
                      : lang === "eng"
                      ? data.full_name_en
                      : data.full_name_ru
                  }</h4>
                  <p> ${
                    lang === "uz"
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

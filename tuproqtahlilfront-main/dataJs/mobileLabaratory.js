import { baseUrl } from "./baseUrl.js";
const lang = localStorage.getItem("language");
function getMobileLaboratory() {
  axios(`${baseUrl}/api/v1/main/laboratory/`, {
    params: {
      type: "mobile",
    },
  }).then((response) => {
    let laboratoryBox = document.getElementById("labaratory-box");
    let service = response.data.results
      .map((data) => {
        let img = data.images[0];
        return `
                <div  class="col-md-4">
                  <div class="course-box">
                      <div class="image-wrap entry">
                          <img
                              src=${img === undefined ? "" : img.file}
                              alt="image"
                              class="img-responsive"
                          />
                          <div class="magnifier setID">
                              <a href="mobile-detail.html" title=""><i class="flaticon-add"></i></a>
                          </div>
                      </div>
                      <div class="course-details ">
                      <h4 data-id=${data.id}>
                          <a href="mobile-detail.html" title="" class="setID">${
                            lang === "uzb"
                              ? data.name_uz
                              : lang === "eng"
                              ? data.name_en
                              : data.name_ru
                          }</a>
                      </h4>
                      <p>
                        ${
                          lang === "uz"
                            ? data.body_uz.slice(0, 120) + "..."
                            : lang === "eng"
                            ? data.body_en.slice(0, 120) + "..."
                            : data.body_ru.slice(0, 120) + "..."
                        }
                      </p>
                      </div>
                  </div>
                  </div>
                   `;
      })
      .join("");
    laboratoryBox.innerHTML = service;
  });
}
getMobileLaboratory();

const labaratoryBox = document.querySelector("#labaratory-box");
labaratoryBox.addEventListener("click", getLabDetail);
function getLabDetail(e) {
  if (e.target.classList.contains("setID")) {
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem("laboratoryID", id);
  }
}

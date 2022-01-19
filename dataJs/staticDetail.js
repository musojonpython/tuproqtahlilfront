import { baseUrl } from "./baseUrl.js";
const lang = localStorage.getItem("language");
const id = localStorage.getItem("staticID");
let laboratoryBox = document.getElementById("card");

function getDetailLaboratory() {
  axios(`${baseUrl}/api/v1/main/laboratory/${id}`, {
    params: {
      type: "static",
    },
  })
    .then((response) => {
      let labData = `
             <div class="card">
                <div class="img-box img-detail">
                     <div  class="owl-carousel">
                    ${response.data.images
                      .map((data) => {
                        return `
                         <img src=${data.file} alt="Labaratory image"/>
                              `;
                      })
                      .join("")}
                     </div>
              </div>
              <div class="title">
                          ${
                            lang === "uz"
                              ? response.data.name_uz
                              : lang === "eng"
                              ? response.data.name_en
                              : response.data.name_ru
                          }
                          </div>
                <div class="text-content">
                    ${
                      lang === "uz"
                        ? response.data.body_uz
                        : lang === "eng"
                        ? response.data.body_en
                        : response.data.body_ru
                    }
                </div>
         </div>
      `;
      laboratoryBox.innerHTML = labData;
    })
    .then((response) => {
      console.log(response);
    });
}
getDetailLaboratory();

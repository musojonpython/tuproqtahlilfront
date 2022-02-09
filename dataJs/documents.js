import { baseUrl } from "./baseUrl.js";
const lang = window.localStorage.getItem("language");
getDocuments();

function getDocuments() {
  const documentBox = document.getElementById("documentBox");
  axios(`${baseUrl}/api/v1/main/document/`).then((response) => {
    let docItem = response.data.results
      .map((data) => {
        let image = data.images[0].file;
        return `
          <div class="col-md-4 text-left">
            <div class="caro-item card-up">
              <div class="course-box">
                <div class="image-wrap entry">
                  <img src=${image} alt="" class="img-responsive" />
                  <div class="magnifier">
                    <a href="#" title=""><i class="flaticon-add"></i></a>
                  </div>
                </div>
                <div class="course-details">
                  <h4>
                    <a href="#" title=""> ${
                      lang === "uzb"
                        ? data.name_uz
                        : lang === "eng"
                        ? data.name_en
                        : data.name_ru
                    }</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        `;
      })
      .join("");
    documentBox.innerHTML = docItem;
  });
}


let moreRead = document.querySelector('#moreRead');
moreRead.innerHTML = `${lang === "uzb"
? "Eng ko'p o'qilgan"
: lang === "eng"
  ? "most read"
  : "Популярное"
}`
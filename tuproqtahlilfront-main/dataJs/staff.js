import { baseUrl } from "./baseUrl.js";
// const lang = localStorage.getItem("language");

// staffPage();

function getTeamDataa() {
  axios(`${baseUrl}/v1/main/employee/`).then((response) => {

    let teamBox = document.getElementById("team-staff");
    console.log(response);
    let team = response.data.results
      .map((data) => {
        return `
           <div class="col-md-4 col-sm-6">
                <div class="teammembers">
                  <div class="entry">
                    <img
                      src=${data.image.file}
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

getTeamDataa();

const teamTitle = document.querySelector("#teams-title");
teamTitle.innerHTML = `${lang === "uzb"
  ? "Mening jamoam"
  : lang === "eng"
    ? "My Teams"
    : "Моя команда"
  }`


const staffTitle = document.querySelector("#staff-title");
staffTitle.innerHTML = `${lang === "uzb"
  ? "Hodimlar"
  : lang === "eng"
    ? "Staff"
    : "Штат сотрудников"
  }`

import { baseUrl } from "./baseUrl.js";
const form = document.getElementById("registerForm");
form.addEventListener("submit", Application);

function Application(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const text = document.getElementById("text").value;
  axios
    .post(`${baseUrl}/api/v1/main/contact/`, {
      full_name: name,
      email: email,
      text: text,
      phone_number: phone,
    })
    .then(() => {
      form.reset();
    })
    .catch((err) => {
      console.log(err.response);
    });
}

let contacttitle = document.querySelector('#contact-title');
contacttitle.innerHTML = `${lang === "uzb"
? "Bog'lanish"
: lang === "eng"
  ? "Contact"
  : "Контакт"
}`

let contacttitle2 = document.querySelector('#contact-title2');
contacttitle2.innerHTML = `${lang === "uzb"
? "Bog'lanish"
: lang === "eng"
  ? "Contact"
  : "Контакт"
}`

let contactUs = document.querySelector('#contactUs');
contactUs.innerHTML = `${lang === "uzb"
? "Bugun biz bilan bog'laning"
: lang === "eng"
  ? "Contact us today"
  : "Свяжитесь с нами сегодня"
}`

let visit = document.querySelector('#visit');
visit.innerHTML = `${lang === "uzb"
? "Bizning ofisimizga tashrif buyuring"
: lang === "eng"
  ? "Visit Our Office"
  : "Посетите наш офис"
}`

let besocial = document.querySelector('#besocial');
besocial.innerHTML = `${lang === "uzb"
? "Ijtimoiy tarmoqlarimiz"
: lang === "eng"
  ? "Our social networks"
  : "Наши социальные сети"
}`

let contactTitle = document.querySelector('#contactTitle');
contactTitle.innerHTML = `${lang === "uzb"
? "A'loqa"
: lang === "eng"
  ? "Contact"
  : "Контакт"
}`

let contactBtn = document.querySelector('#contactBtn');
contactBtn.innerHTML = `${lang === "uzb"
? "Yuborish"
: lang === "eng"
  ? "Submit"
  : "Представлять на рассмотрение"
}`
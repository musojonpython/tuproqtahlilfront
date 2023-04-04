let changeLanguage = document.querySelector("#selectLanguage");
changeLanguage.addEventListener("change", function () {
  window.localStorage.setItem("language", changeLanguage.value);
  location.reload();
});
let options = document.querySelectorAll("#langItem");
const lang = localStorage.getItem("language");
options.forEach(function (data) {
  // console.log(data.value);
  if (lang == data.value) {
    data.setAttribute("selected", "rus");
  }
  if (lang == data.value) {
    data.setAttribute("selected", "eng");
  }
  if (lang == data.value) {
    data.setAttribute("selected", "uzb");
  }
});

const languages = {
  uz: {
    about: "Biz Haqimizda",
    document: "Hujjatlar",
    service: "Xizmatlar",
    media: "Mediya",
    labaratory: "Labaratoriya",
    news: "Yangiliklar",
    address: "Bog'lanish",
    opendata: "Ochiq ma'lumotlar",
    byudjet: "Byudjet mablag‘larini rejalashtirilishi va sarflanishi"
  },
  en: {
    about: "About",
    document: "Documents",
    service: "Service",
    media: "Media",
    labaratory: "Labaratory",
    news: "News",
    address: "Address",
    opendata: "Open data",
    byudjet: "Budget planning and spending"
  },
  ru: {
    about: "О нас",
    document: "Документ",
    service: "Услуги",
    media: "Медиа",
    labaratory: "Лаборатория",
    news: "Новости",
    address: "Контакт",
    opendata: "Oткрытые данные",
    byudjet: "Планирование бюджета и расходы"
  },
};

const about = document.getElementById("about");
const doc = document.getElementById("doc");
const ser = document.getElementById("ser");
const med = document.getElementById("med");
const lab = document.getElementById("lab");
const news = document.getElementById("new");
const add = document.getElementById("add");
const ope = document.getElementById("ope");
const ope1 = document.getElementById("ope1");
const byu = document.getElementById("byu");

const language = localStorage.getItem("language");
if (language === "eng") {
  about.innerText = `${languages.en.about}`;
  doc.innerText = `${languages.en.document}`;
  ser.innerText = `${languages.en.service}`;
  med.innerText = `${languages.en.media}`;
  lab.innerText = `${languages.en.labaratory}`;
  news.innerText = `${languages.en.news}`;
  add.innerText = `${languages.en.address}`;
  ope.innerText = `${languages.en.opendata}`;
  ope1.innerText = `${languages.en.opendata}`;
  byu.innerText = `${languages.en.byudjet}`;
} else if (language === "rus") {
  about.innerText = `${languages.ru.about}`;
  doc.innerText = `${languages.ru.document}`;
  ser.innerText = `${languages.ru.service}`;
  med.innerText = `${languages.ru.media}`;
  lab.innerText = `${languages.ru.labaratory}`;
  news.innerText = `${languages.ru.news}`;
  add.innerText = `${languages.ru.address}`;
  ope.innerText = `${languages.ru.opendata}`;
  ope1.innerText = `${languages.ru.opendata}`;
  byu.innerText = `${languages.ru.byudjet}`;
} else if (language === "uzb") {
  about.innerText = `${languages.uz.about}`;
  doc.innerText = `${languages.uz.document}`;
  ser.innerText = `${languages.uz.service}`;
  med.innerText = `${languages.uz.media}`;
  lab.innerText = `${languages.uz.labaratory}`;
  news.innerText = `${languages.uz.news}`;
  add.innerText = `${languages.uz.address}`;
  ope.innerText = `${languages.uz.opendata}`;
  ope1.innerText = `${languages.uz.opendata}`;
  byu.innerText = `${languages.uz.byudjet}`;
}



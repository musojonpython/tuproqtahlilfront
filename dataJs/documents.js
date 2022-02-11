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
                    <a href="#" title=""> ${lang === "uzb"
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

let hujjat= document.querySelector('.doc');
hujjat.innerHTML = `${lang === "uzb"
? "Hujjatlar"
: lang === "eng"
  ? "Documents"
  : "Документы"
}`

// History

let history = document.querySelector('#history-title');
history.innerHTML = `${lang === "uzb"
? "KORXONA TASHKIL TOPISHINING TASHKILIY HUQUQIY ASOSLARI"
: lang === "eng"
  ? "Basic principles of organizational structure of the enterprise"
  : "Основные принципы организационной структуры предприятия"
}`


const historyData = [
  {
    id: 1,
    date: {
      uz: "1959 yil 20 aprel",
      ru: "20 апреля 1959 года",
      en: "On April 20, 1959"
    },
    text: {
      uz: "Oʻzbekiston SSR Vazirlar Sovetining 270-sonli qarori asosida tashkil etilgan “Respublika tuproq ekspeditsiyasi” nomini oldi.",
      ru: 'Oна была создана на основании постановления 270 Совета Министров Узбекской ССР под названием "Республиканская почвенная экспедиция".',
      en: 'it was established on the basis of the resolution 270 of the Soviet of Ministers of the SSR of Uzbekistan, under the name "Republican soil expedition"'
    },

  },
  {
    id: 2,
    date: {
      uz: "1961 yil 6 iyun",
      ru: "6 июня 1961 года",
      en: "On June 6, 1961"
    },
    text: {
      uz: "Oʻzbekiston SSR Qishloq xoʻjaligi vazirligining 467-son buyrugʻiga asosan “Respublika tuproq ekspeditsiyasi” “Oʻzgiprozem” instituti tarkibiga kiritildi.",
      ru: 'Cогласно постановлению Совета Министров СССР Узбекистана от 1591-р, название "Республиканская почвенная экспедиция" было изменено на "отдел земельного кадастра".',
      en: 'According to the resolution of the Soviet of Ministers of the USSR of Uzbekistan dated 1591-r, the name of "Republican soil expedition" was changed to " land cadastre branch"'
    }
  },
  {
    id: 3,
    date: {
      uz: "1969 yil 20 oktyabr",
      ru: "20 октября 1969 года",
      en: "On 1969 year 20 October"
    },
    text: {
      uz: "O‘zbekiston SSR Vazirlar Kengashining 1591-sonli qaroriga asosan “Respublika tuproq ekspeditsiyasi” nomi “Yer kadastri bo‘limi” deb o‘zgartirildi.",
      ru: 'Cогласно постановлению Совета Министров ССР Узбекистана от 1591-р, название "Республиканская почвенная экспедиция" было изменено на "отдел земельного кадастра".',
      en: 'According to the resolution of the Council of Ministers of the SSR of Uzbekistan dated 1591-r, the name of "Republican soil expedition" was changed to " land cadastre branch"'
    }
  },
  {
    id: 4,
    date: {
      uz: "1999 yil 12 avgust",
      ru: "12 августа 1999 года",
      en: "On August 12, 1999"
    },
    text: {
      uz: "“O‘zdaverloyiha” (O‘zgirozem) DILIning 16-sonli buyrug‘iga asosan “Yer kadastri” filiali va “Yer kadastri” bo‘linmalari deb o‘zgartirildi.",
      ru: 'Согласно 16-му приказу правительства, ”Узгипрозем“ было изменено на название ”филиал земельного кадастра“, дочернее предприятие “Земельный кадастр”.',
      en: 'According to the 16-th order of the heart” Uzgiprozem“was changed to the name of” land cadastre branch“, ” land cadastre “subsidiary BA enterprise”'
    }
  },
  {
    id: 5,
    date: {
      uz: "2007 yil 15 may",
      ru: "15 мая 2007 года",
      en: "On May 15, 2007"
    },
    text: {
      uz: "O‘zbekiston Respublikasi Yer resurslari, geodeziya, kartografiya va davlat kadastri davlat qo‘mitasining 72-sonli buyrug‘iga asosan “Tuproq Bonitirovkasi” sho‘ba korxonasiga aylantirildi.",
      ru: 'Cогласно 72-му приказу Государственного департамента земельных ресурсов, геодезии, картографии и государственного кадастра Республики Узбекистан, название дочернего предприятия было изменено на “Бонитировка почв".',
      en: "According to the 72-th order of the State Department of land resources, Geodesy, cartography and state cadastre of the Republic of Uzbekistan was changed to the name of the subsidiary “Soil bonitirovka”."
    }
  },
  {
    id: 6,
    date: {
      uz: "2019 yil 22 iyun",
      ru: "22 июня 2019 года",
      en: "On June 22, 2019"
    },
    text: {
      uz: "O‘zbekiston Respublikasi Yer resurslari, geodeziya, kartografiya va davlat kadastri davlat qo‘mitasining 350-05-sonli buyrug‘iga asosan “Tuproq tarkibi va ombori, sifatini tahlil qilish markazi” DUK nomi ostida faoliyat ko‘rsatmoqda. ",
      ru: 'Cогласно приказу государственного агентства земельных ресурсов, геодезии, картографии и государственного кадастра Республики Узбекистан за номером 350-05, Государственное унитарное предприятие “Центр анализа состава и состава почв, анализа качества” функционировало под названием.',
      en: 'According to the order of the state agency for land resources, Geodesy, cartography and state cadastre of the Republic of Uzbekistan numbered 350-05, the State Unitary Enterprise “Center for soil composition and repository, quality analysis” was functioning under the name.'
    }
  },
  {
    id: 7,
    date: {
      uz: "7 sentyabr, 2020 yil",
      ru: "7 сентября 2020 года",
      en: "On September 7, 2020"
    },
    text: {
      uz: "O‘zbekiston Respublikasi Prezidentining 2020-yil 7-sentabrdagi PK-4819-son qaroriga muvofiq, O‘zbekiston Respublikasi Qishloq xo‘jaligi vazirligiga o‘tkazildi.",
      ru: "В соответствии с постановлением президента Республики Узбекистан от 7 сентября 2020 года ПП-4819 передан в структуру Министерства сельского хозяйства Республики Узбекистан.",
      en: "According to the decision of the president of the Republic of Uzbekistan dated September 7, 2020 PP-4819 was transferred to the structure of the Ministry of Agriculture of the Republic of Uzbekistan."
    }
  },
]


function getHistoryBox() {
  const boxx = document.querySelector('#historyBox');
  let box = historyData.map(data => {
    return `
    <div class="col-md-6">
      <div class="book-box">
        <div class="row">
          <div class="col-sm-2">
            <span class="fa fa-book fa-3x book-icon"></span>
          </div>
          <div class="col-sm-10">
            <div id="item-titleH2" class="title">
              ${lang === "uzb"
                ? data.date.uz
                : lang === "eng"
                  ? data.date.en
                  : data.date.ru
              }
            </div>
            <div id="item-textH2" class="text">
              ${lang === "uzb"
                ? data.text.uz
                : lang === "eng"
                  ? data.text.en
                  : data.text.ru
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }).join("")
  boxx.innerHTML = box
}

getHistoryBox()
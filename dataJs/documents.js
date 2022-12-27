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

let hujjat = document.querySelector('.doc');
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
      ru: 'Организация была создана на основании постановления 270 Совета Министров Узбекской ССР под названием «Республиканская почвенная экспедиция».',
      en: 'Organization was established on the basis of the resolution 270 of the Council of Ministers of the SSR of Uzbekistan, under the name «Republican soil expedition»'
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
      ru: 'Согласно приказу № 467 Министерства сельского хозяйства Узбекской ССР «Республиканская почвенная экспедиция» была включена в состав института «Узгипрозем».',
      en: 'According to the order № 467 of the Ministry of Agriculture of the SSR of Uzbekistan «Republican soil expedition» was incorporated in the composition of the Institute «Uzgiprozem».'
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
      ru: 'Согласно Постановлению Совета Министров Узбекской ССР № 1591 название «Республиканской почвенной экспедиции» было изменено на «Отдел земельного кадастра».',
      en: 'According to the Decree of the Council of Ministers of the Uzbek SSR № 1591, the name of the «Republican Soil Expedition» was changed to the «Land Cadastre Department».'
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
      ru: 'Приказом № 16 Государственного научно-проектного института «Уздаверлойиха» (Узгипрозем) переименовано в филиал «Земельного кадастра» и подразделение Земельного кадастра.',
      en: 'By order № 16, the State Research and Project Institute «Uzdaverloyiha» (Uzgiprozem) was renamed into a branch of the «Land Cadastre» and a division of the «Land Cadastre».'
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
      ru: 'Согласно 72-му приказу Государственного департамента земельных ресурсов, геодезии, картографии и государственного кадастра Республики Узбекистан, название дочернего предприятия было изменено на «Бонитировка почв».',
      en: "According to the 72nd order of the State Department of Land Resources, Geodesy, Cartography and the State Cadastre of the Republic of Uzbekistan, the name of the subsidiary was changed to «Soil evaluation»."
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
      uz: "O‘zbekiston Respublikasi Yer resurslari, geodeziya, kartografiya va davlat kadastri davlat qo‘mitasining 350-05-sonli buyrug‘iga asosan “Tuproq tarkibi va repozitoriysi, sifati tahlil markazi” DUK nomi ostida faoliyat ko‘rsatmoqda.",
      ru: 'Согласно приказу государственного агентства земельных ресурсов, геодезии, картографии и государственного кадастра Республики Узбекистан № 350-05, Государственное унитарное предприятие функционировало под названием ГУП «Аналитический центр качества, состава и репозитории почв».',
      en: 'According to the order of the State Agency for Land Resources, Geodesy, Cartography and State Cadastre of the Republic of Uzbekistan № 350-05 started functioning under the name of «Soil Composition and Repository, Quality Analysis Center» the State Unitary Enterprise.'
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
      ru: "Согласно с постановлением президента Республики Узбекистан от 7 сентября 2020 года ПП-4819 предприятие вошло в структуру Министерства сельского хозяйства Республики Узбекистан.",
      en: "According to the Decree of the President of the Republic of Uzbekistan on September 7, 2020 PD-4819 organization was incorporated to the structure of the Ministry of Agriculture of the Republic of Uzbekistan."
    }
  },
  {
    id: 8,
    date: {
      uz: "25 Dekabr, 2022 yil",
      ru: "25 Декабрь 2022 года",
      en: "On december 25, 2022"
    },
    text: {
      uz: "Murojaat hamda shikoyatlar uchun",
      ru: "Анализ притензий ",
      en: "Claim form"
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

getHistoryBox();

const nor1 = document.querySelector('#nor1');
const nor1T = document.querySelector('#nor1T');

nor1.href = `${lang === "uzb"
  ? "https://lex.uz/docs/-4985026"
  : lang === "eng"
    ? "https://lex.uz/docs/-4985026"
    : "https://lex.uz/docs/4985030"
  }`;

nor1T.innerHTML = `${lang === "uzb"
  ? "1. \"Yer hisobi va davlat kadastrlarini yuritish tizimini tubdan takomillashtirish chora-tadbirlari to'g'risida\" (2020-yil 7-sentabr, PQ-6061-son)"
  : lang === "eng"
    ? "1. \"Yer hisobi va davlat kadastrlarini yuritish tizimini tubdan takomillashtirish chora-tadbirlari to'g'risida\" (2020-yil 7-sentabr, PQ-6061-son)"
    : "1. O мерах по кардинальному совершенствованию системы ведения учета земли и государственных кадастров (7 сентября 2020 г.№ УП-6061)"
  }`


const nor2 = document.querySelector('#nor2');
const nor2T = document.querySelector('#nor2T');

nor2.href = `${lang === "uzb"
  ? "https://lex.uz/docs/-4242004"
  : lang === "eng"
    ? "https://lex.uz/docs/-4242004"
    : "https://lex.uz/docs/4242012"
  }`;

nor2T.innerHTML = `${lang === "uzb"
  ? "2.  \"Meva-sabzavotchilik sohasida qishloq xo‘jaligi kooperatsiyasini rivojlantirish chora-tadbirlari to‘g‘risida\" (2019-yil 14-mart, PQ-4239-son)."
  : lang === "eng"
    ? "2.  \"Meva-sabzavotchilik sohasida qishloq xo‘jaligi kooperatsiyasini rivojlantirish chora-tadbirlari to‘g‘risida\" (2019-yil 14-mart, PQ-4239-son)."
    : "2. O мерах по развитию сельскохозяйственной кооперации в плодоовощной отрасли (14 марта 2019 г.№ ПП-4239)"
  }`


const nor3 = document.querySelector('#nor3');
const nor3T = document.querySelector('#nor3T');

nor3.href = `${lang === "uzb"
  ? "https://lex.uz/docs/-4380635"
  : lang === "eng"
    ? "https://lex.uz/docs/-4380635"
    : "https://lex.uz/docs/4380637"
  }`;

nor3T.innerHTML = `${lang === "uzb"
  ? "3.  \"Qishloq xo‘jaligida tuproqning agrokimyoviy tahlil tizimini takomillashtirish, ekin yerlarida tuproqning unumdorligini oshirish chora-tadbirlari to‘g‘risida\" (2019-yil 18-iyun, VMQ-510-son)"
  : lang === "eng"
    ? "3.  \"Qishloq xo‘jaligida tuproqning agrokimyoviy tahlil tizimini takomillashtirish, ekin yerlarida tuproqning unumdorligini oshirish chora-tadbirlari to‘g‘risida\" (2019-yil 18-iyun, VMQ-510-son)"
    : "3 O мерах по совершенствованию системы агрохимического анализа почв в сельском хозяйстве, повышению плодородия почв посевных земель (18 июня 2019 г.№ 510)"
  }`


const nor4 = document.querySelector('#nor4');
const nor4T = document.querySelector('#nor4T');

nor4.href = `${lang === "uzb"
  ? "https://lex.uz/docs/-5442999"
  : lang === "eng"
    ? "https://lex.uz/docs/-5442999"
    : "https://lex.uz/docs/5446445"
  }`;

nor4T.innerHTML = `${lang === "uzb"
  ? "4.  \"Atrof-muhitning ifloslanish darajasini baholash tizimini yanada takomillashtirish to‘g‘risida\" (2021-yil 3-iyun, VMQ-510-son)"
  : lang === "eng"
    ? "4.  \"Atrof-muhitning ifloslanish darajasini baholash tizimini yanada takomillashtirish to‘g‘risida\" (2021-yil 3-iyun, VMQ-510-son)"
    : "4. O дальнейшем совершенствовании системы оценки уровня загрязнения окружающей среды (3 июня 2021 г.№ 343)"
  }`

  let norTitle = document.querySelector('#nor-title');
  norTitle.innerHTML = `${lang === "uzb"
  ? "Normativ huquqiy hujjatlar"
  : lang === "eng"
    ? "Regulatory legal acts"
    : "Нормативно-правовые акты"
  }`;

  
const nor5 = document.querySelector('#nor5');
const nor5T = document.querySelector('#nor5T');

nor5.href = `${lang === "uzb"
  ? "https://lex.uz/docs/-5442999"
  : lang === "eng"
    ? "https://lex.uz/docs/-5442999"
    : "https://lex.uz/docs/5446445"
  }`;

nor5T.innerHTML = `${lang === "uzb"
  ? "1.  \"Murojaat hamda shikoyatlar uchun\" (2022-yil 25-dekabr)"
  : lang === "eng"
    ? "1.  \"Claim form\" (2022-yil 25-dekabr)"
    : "1. Анализ притензий  (25 Декабрь 2022 г.)"
  }`

  let norTitle = document.querySelector('#nor-title');
  norTitle.innerHTML = `${lang === "uzb"
  ? "Normativ huquqiy hujjatlar"
  : lang === "eng"
    ? "Regulatory legal acts"
    : "Нормативно-правовые акты"
  }`;
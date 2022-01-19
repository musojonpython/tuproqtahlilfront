let ftData = {
  uz: {
    leftTitle: "Xoziroq bizga qo'shiling",
    followTitle: "Bizga qo'shiling",
    followText:
      "Bizning jamoaga qo'shilish orqali o'z daromadlaringizni olishni xohlaysizmi? Vaqtni yo'qotmasdan bizga qo'shiling.",
    followLink: "Xodimlar",
    popularLinks: "Kerakli link",
    link1: "Xizmatlar",
    link2: "Biz haqimizda",
    link3: "Yangiliklar",
    link4: "Galareya",
    link5: "Xodimlar",
    link6: "Bog'lanish",
    support: "Qo'llab quvvatlash",
  },
  ru: {
    leftTitle: "Присоединяйтесь к нам сейчас",
    followTitle: "Присоединяйтесь к нам",
    followText:
      "Вы хотите зарабатывать собственные деньги, присоединяясь к нашему сообществу? Присоединяйтесь к нам, не теряя времени",
    followLink: "Персонал",
    popularLinks: "Обязательная ссылка",
    link1: "Услуги",
    link2: "О нас",
    link3: "Новости",
    link4: "Галерея",
    link5: "Персонал",
    link6: "Подключение",
    support: "Поддержка",
  },
  en: {
    leftTitle: "Join us now",
    followTitle: "Join us",
    followText:
      "Do you want to make your own money by joining our community? Join us without wasting time.",
    followLink: "Staff",
    popularLinks: "Popular link",
    link1: "Services",
    link2: "About us",
    link3: "News",
    link4: "Gallery",
    link5: "Staff",
    link6: "Connection",
    support: "Support",
  },
};

const leftTitle = document.getElementById("leftTitle");
const followTitle = document.getElementById("followTitle");
const followText = document.getElementById("followText");
const followLink = document.getElementById("followLink");
const popularLinks = document.getElementById("popularLinks");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");
const link6 = document.getElementById("link6");
const support = document.getElementById("support");
const ftLang = localStorage.getItem("language");
if (ftLang === "eng") {
  followTitle.innerText = ftData.en.followTitle;
  followText.innerText = ftData.en.followText;
  followLink.innerText = ftData.en.followLink;
  popularLinks.innerText = ftData.en.popularLinks;
  link1.innerText = ftData.en.link1;
  link2.innerText = ftData.en.link2;
  link3.innerText = ftData.en.link3;
  link4.innerText = ftData.en.link4;
  link5.innerText = ftData.en.link5;
  link6.innerText = ftData.en.link6;
  support.innerText = ftData.en.support;
} else if (ftLang === "rus") {
  followTitle.innerText = ftData.ru.followTitle;
  followText.innerText = ftData.ru.followText;
  followLink.innerText = ftData.ru.followLink;
  popularLinks.innerText = ftData.ru.popularLinks;
  link1.innerText = ftData.ru.link1;
  link2.innerText = ftData.ru.link2;
  link3.innerText = ftData.ru.link3;
  link4.innerText = ftData.ru.link4;
  link5.innerText = ftData.ru.link5;
  link6.innerText = ftData.ru.link6;
  support.innerText = ftData.ru.support;
} else if (ftLang === "uzb") {
  followTitle.innerText = ftData.uz.followTitle;
  followText.innerText = ftData.uz.followText;
  followLink.innerText = ftData.uz.followLink;
  popularLinks.innerText = ftData.uz.popularLinks;
  link1.innerText = ftData.uz.link1;
  link2.innerText = ftData.uz.link2;
  link3.innerText = ftData.uz.link3;
  link4.innerText = ftData.uz.link4;
  link5.innerText = ftData.uz.link5;
  link6.innerText = ftData.uz.link6;
  support.innerText = ftData.uz.support;
}

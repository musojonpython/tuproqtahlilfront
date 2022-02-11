// const lang = localStorage.getItem("language");
const companyData = [
    {
        id: 1,
        made_by: {
            uz: "iFraganus kompaniyasi tomonidan ishlab chiqarilgan",
            en: "Made by iFraganus company",
            ru: "Производства компании iFraganus"
        },
        phone_number: "+998 90 925 63 08",
        link: {
            uz: "iFraganus sifatli xizmatlarni taklif etadi",
            ru: "iFraganus предлагает качественные услуги",
            en: "iFraganus offers quality services"
        },
    }
]


function getCompanyData() {
    const companyBox = document.querySelector('#company-box');
    let item = companyData.map(data => {
        return`
            <div class="company">
                <div class="phone-number">
                    ${
                        data.phone_number
                    }
                </div>
                <div class="made">
                    ${
                        lang === "uzb"
                        ? data.made_by.uz
                        : lang === "eng"
                            ? data.made_by.en
                            : data.made_by.ru
                    }
                </div>
                <div class="link">
                    <a href="#">
                    ${
                        lang === "uzb"
                        ? data.link.uz
                        : lang === "eng"
                            ? data.link.en
                            : data.link.ru
                    }
                    </a>
                </div>
            </div>
        `
    }).join("")
    companyBox.innerHTML = item
}

getCompanyData()
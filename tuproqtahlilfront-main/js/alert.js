// const lang = localStorage.getItem("language");

const follow = [
    {
        id: 1,
        title_uz: "Eslatma:",
        title_ru: "Примечание:",
        title_en: "Note:",
        msg_uz: "Telegram kanalimizga azo bo'ling!",
        msg_ru: "Подписывайтесь на наш Telegram-канал!",
        msg_en: "Subscribe to our Telegram channel!",
        btn_uz: "Azo Bo'lish",
        btn_ru: "Становиться участником",
        btn_en: "Become a member",
    }
]

const alertDiv = document.querySelector('#alert');

function alertFunction() {
    const alertItem = follow.map(data => {
        return`
            <span class="fab fa-telegram"></span>
            <span id="alert-title" class="alert-title">
                ${
                    lang === 'eng'
                    ? data.title_en
                    : lang === 'rus'
                        ? data.title_ru
                        : data.title_uz
                }
            </span>
            <span id="msg" class="msg">
                ${
                    lang === 'eng'
                    ? data.msg_en
                    : lang === 'rus'
                        ? data.msg_ru
                        : data.msg_uz
                }
            </span>
            <span class="close-btn">
                <span class="fas fa-times"></span>
            </span>
            <br>
            <a id="subscribe" href="https://telegram.me/">
                ${
                    lang === 'eng'
                    ? data.btn_en
                    : lang === 'rus'
                        ? data.btn_ru
                        : data.btn_uz
                }
            </a>
        `
    }).join("")
    alertDiv.innerHTML = alertItem
}

alertFunction()
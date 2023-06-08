import { baseUrl } from "./baseUrl.js";


function getDocumentsData() {
    axios(`${baseUrl}/api/v1/main/tahlilturlari/`).then((response) => {
        const newsBox = document.querySelector("#tahlilTurlari");
        let newsItem = response.data.results
            .map(function (data) {
                const lang = window.localStorage.getItem("language");
                return `
                    <div class="col-sm-6 col-md-4">
                        <div class="tahlil-card">
                            <div class="tahlil-header">
                                <div class="flex">
                                    <h1 class="tahlil-number">${data.number}</h1>
                                    <div class="tahlil-icon">
                                        <img src=${data.imgIcon} alt="image-icon">
                                        <h2>Tuproq</h2>
                                    </div>
                                </div>
                                <img class="tah-img" src=${data.img} alt="image">
                            </div>
                        </div>
                    </div>
                `;
            })
            .join("");
        newsBox.innerHTML = newsItem;
    });
}
getDocumentsData()



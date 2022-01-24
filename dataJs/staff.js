// import { baseUrl } from "./baseUrl.js";
// const lang = localStorage.getItem("language");
const team = [
    {
        id: 1,
        fullName: "Cristiano Ronaldo",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, corporis?",
        job: "FrontEnd developer",
        img: "images/team/2.png"
    },
    {
        id: 2,
        fullName: "Alexia Hermoso",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, corporis?",
        job: "FrontEnd developer",
        img: "images/team/1.png"
    },
    {
        id: 3,
        fullName: "Aliyeva Bahora",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, corporis?",
        job: "FrontEnd developer",
        img: "images/team/3.png"
    },
    {
        id: 4,
        fullName: "Jon Doe",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, corporis?",
        job: "FrontEnd developer",
        img: "images/team/1.png"
    },
    {
        id: 5,
        fullName: "Selena Gomes",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, corporis?",
        job: "FrontEnd developer",
        img: "images/team/2.png"
    },
]
const teamStaff = document.querySelector('#team-staff');
function staffPage() {
    // axios(`${baseUrl}/api/v1/main/history/`).then((response) => {
        // const teamSta = response.data;
        const card = team.map((data) => {
            return`
                <div class="col-md-4 carousel">
                    <div class="teams-card m-2">
                        <div class="staff-box">
                            <img width='100%' src=${data.img} alt="" />
                            <div class="card-body p-2 text-center>
                                <h3 class="text">${data.fullName}</h3>
                                <p>
                                ${data.desc}
                                </p>
                                <h5>${data.job}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join("")
    // }
    teamStaff.innerHTML = card;
}

staffPage();
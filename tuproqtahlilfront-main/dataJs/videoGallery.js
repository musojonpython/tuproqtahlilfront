const videoLg = document.getElementById("video-lg");
const videosSm = document.querySelectorAll(".video-sm");

videosSm.forEach((data) => {
  data.addEventListener("click", function () {
    console.log("Hello");
  });
});

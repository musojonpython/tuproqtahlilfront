$(document).ready(function () {
  const sr = ScrollReveal({
    origin: "top",
    distance: "-80px",
    duration: 1500,
    reset: true,
  });

  // sr.reveal(".title");

  window.addEventListener("scroll", function () {
    if (this.scrollY > 2800) {
      $(".counter").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");

        $({ countNum: $this.text() }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 3000,
            easing: "linear",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
    }
  });
  // alert
  const hiddenBtn = document.querySelector(".fa-times");
  const alert = document.querySelector(".alert");
  hiddenBtn.addEventListener("click", function () {
    alert.classList.add("hide");
  });
});

$(".js-height-full").height($(window).height());
$(".js-height-parent").each(function () {
  $(this).height($(this).parent().first().height());
});

window.addEventListener("scroll", function () {
  if (this.scrollY > 3100) {
    $(".stat-timer").each(function () {
      $(this).data("count", parseInt($(this).html(), 10));
      $(this).html("0");
      count($(this));
    });
  }
});
// Fun Facts
function count($this) {
  var current = parseInt($this.html(), 10);
  current = current + 2; /* Where 50 is increment */
  $this.html(++current);
  if (current > $this.data("count")) {
    $this.html($this.data("count"));
  } else {
    setTimeout(function () {
      count($this);
    }, 20);
  }
}

$(".header").affix({
  offset: {
    top: 100,
    bottom: function () {
      return (this.bottom = $(".navbarScroll").outerHeight(true));
    },
  },
});

$(window).load(function () {
  $("#preloader").on(500).fadeOut();
  $(".preloader").on(600).fadeOut("slow");
});



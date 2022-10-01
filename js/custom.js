(function ($) {
  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $(".preloader").fadeOut(1000); // set duration in brackets
  });

  // MENU
  $(".menu-burger").on("click", function () {
    $(".menu-bg, .menu-items, .menu-burger").toggleClass("fs");
    $(".menu-burger").text() == "☰"
      ? $(".menu-burger").text("✕")
      : $(".menu-burger").text("☰");
  });

  // ABOUT SLIDER
  $("body").vegas({
    slides: [
      { src: "images/slide-image01.png" },
      { src: "images/slide-image02.png" },
    ],
    timer: false,
    transition: ["zoomOut"],
  });
})(jQuery);

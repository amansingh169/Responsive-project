var head = $("header");
var overlay = $(".overlay");
var menu = $(".header__menu");
var body = $("body");

function ham_toggle() {
  head.toggleClass("open");
  overlay.fadeToggle(150);

  // if (head.classList.contains("open")) {
  //   overlay.classList.remove("fade-out");
  //   overlay.classList.add("fade-in");
  // } else {
  //   overlay.classList.remove("fade-in");
  //   overlay.classList.add("fade-out");
  // }

  menu.slideToggle(300);
  body.toggleClass("noscroll");
}

var head = document.querySelector("header");
var overlay = document.querySelector(".overlay");
// ham.addEventListener("click", ham_toggle)

function ham_toggle() {
  head.classList.toggle("open");

  // if (head.classList.contains("open")) {
  //   overlay.classList.remove("fade-out");
  //   overlay.classList.add("fade-in");
  // } else {
  //   overlay.classList.remove("fade-in");
  //   overlay.classList.add("fade-out");
  // }
}

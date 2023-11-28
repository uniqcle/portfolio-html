const navBtn = document.querySelector(".mobile-nav__button");
const mobileNav = document.querySelector(".mobile-nav");

navBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  mobileNav.classList.toggle("mobile-nav--active");
  navBtn.classList.toggle("mobile-nav__button-close");
});

window.addEventListener("click", function () {
  if (mobileNav.classList.contains("mobile-nav--active")) {
    mobileNav.classList.toggle("mobile-nav--active");
    navBtn.classList.toggle("mobile-nav__button-close");
  }
});

mobileNav.addEventListener("click", function (e) {
  e.stopPropagation();
});





const runningString = document.querySelector("#runningString");
const runningStringText = runningString.textContent;
let index = 0;

function runString() {
  runningString.innerText = runningStringText.slice(0, index);
  index++;
}

runString();

let intervalId = setInterval(runString, 100);

setTimeout(() => {
  clearInterval(intervalId);
}, 7000);

const btnDarkMode = document.querySelector(".dark-mode-btn");

btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
};
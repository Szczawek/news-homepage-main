const img = document.getElementById("web3");
const menu = document.getElementById("menu");
const btnClose = document.getElementById("btn-close");
const ul = document.querySelector("ul");
function set() {
  if (innerWidth < 725) {
    const ul = document.querySelector("ul");
    img.setAttribute("src", "image-web-3-mobile.jpg");
  } else {
    img.setAttribute("src", "image-web-3-desktop.jpg");
  }
}
set();

window.addEventListener("resize", () => {
  set();
});

menu.addEventListener("click", () => {
  document.querySelector("nav").classList.add("blur")
  ul.classList.add("visible");
  btnClose.classList.add("close")
  btnClose.addEventListener("click", () => {
    document.querySelector("nav").classList.remove("blur")
    ul.classList.remove("visible");
    btnClose.classList.remove("close")
  });
});

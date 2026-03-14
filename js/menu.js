const menu = document.querySelector("#menu");
const menuMobile = document.querySelector("#menu-mobile");
const menuHamburguer = document.querySelector("#menu-hamburguer");
const logo = document.querySelector("#logo");

const menuHamburguerLine = document.querySelector(".menu-hamburguer");
const menuOpaqueBackground = document.querySelector(".menu-opaque-background");

window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    menu.classList.add("scrolled");
    menuMobile.classList.add("scrolled");
    logo.src = "images/light-anix-full-logo-without-bg.png";

    return;
  }

  menu.classList.remove("scrolled");
  menuMobile.classList.remove("scrolled");
  logo.src = "images/light-anix-full-logo-without-bg.png";
});

function handleMenuClick(){
  menuHamburguerLine.addEventListener("click", () => {
    if(menuHamburguerLine.classList.contains("opened")){
      menuHamburguerLine.classList.remove("opened");
      menuOpaqueBackground.classList.remove("opened");
      menuHamburguer.classList.remove("opened");

      return;
    }

    menuHamburguerLine.classList.add("opened");
    menuOpaqueBackground.classList.add("opened");
    menuHamburguer.classList.add("opened");
  })

  menuOpaqueBackground.addEventListener("click", (e) => {
    if(e.target === menuOpaqueBackground){
      menuHamburguerLine.classList.remove("opened");
      menuOpaqueBackground.classList.remove("opened");
      menuHamburguer.classList.remove("opened");
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  handleMenuClick();
});
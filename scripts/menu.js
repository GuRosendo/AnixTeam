const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    menu.classList.add("scrolled");
    logo.src = "images/light-anix-full-logo-without-bg.png";
  }else{
    menu.classList.remove("scrolled");
    logo.src = "images/light-anix-full-logo-without-bg.png";
  }
});
const menu = document.getElementById("menu");

window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    menu.classList.add("scrolled");
  }else{
    menu.classList.remove("scrolled");
  }
});
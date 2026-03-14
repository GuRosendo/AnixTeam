const cookieModal = document.querySelector("#cookie-modal");
const toggleCookies = document.querySelector("#toggle-cookies");
const cookieDetails = document.querySelector(".cookie-details");
const acceptCookies = document.getElementById("accept-cookies");

toggleCookies.addEventListener("click", () => {
    cookieDetails.classList.toggle("open");
});

if(!localStorage.getItem("cookiesAccepted")){
    cookieModal.style.display = "flex";
}

acceptCookies.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    
    cookieModal.style.display = "none";
});
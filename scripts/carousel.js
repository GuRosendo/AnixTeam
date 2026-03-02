let actualIndex = 0;
let autoSlideInterval;

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1, false);
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function changeSlide(direction, userChanged){
    if(userChanged){
        stopAutoSlide();
    }

    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    actualIndex += direction;

    if(actualIndex < 0){
        actualIndex = totalSlides - 1;
    } else if (actualIndex >= totalSlides){
        actualIndex = 0;
    }

    updateCarousel();
}

function updateCarousel() {
    const carouselSlides = document.querySelector('.carousel-slides');
    const widthSlide = document.querySelector('.slide').offsetWidth;

    carouselSlides.style.transform = `translateX(${-actualIndex * widthSlide}px)`;
}

document.addEventListener("DOMContentLoaded", () => {
    startAutoSlide();
});
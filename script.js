let index = 0;
const slides = document.querySelector(".slider .slides");
const totalSlides = document.querySelectorAll(".slider .slide").length;

function nextSlide() {
    index = (index + 1) % totalSlides;
    slides.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
}

setInterval(nextSlide, 3000);

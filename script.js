let index = 0;
const slides = document.querySelector(".slider .slides");
const slideCount = document.querySelectorAll(".slider .slide").length;

function nextSlide() {
    index = (index + 1) % slideCount;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 3000);

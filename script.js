let index = 0;
const slides = document.querySelector(".slides");

function nextSlide() {
    index = (index + 1) % 4;
    slides.style.transform = `translateX(-${index * 25}%)`;
}

setInterval(nextSlide, 3000);

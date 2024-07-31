let slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('inactive');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.remove('inactive');
    slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 8000);
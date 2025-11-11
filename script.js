let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    const transformValue = `translateX(${-slideIndex * 100}%)`;
    document.querySelector('.carousel-images').style.transform = transformValue;
}

function nextSlide() {
    showSlides(slideIndex + 1);
}

function prevSlide() {
    showSlides(slideIndex - 1);
}

// Initialize the carousel
showSlides(slideIndex);

// Automatically move to the next slide every 4 seconds (3000 milliseconds)
setInterval(nextSlide, 4000);

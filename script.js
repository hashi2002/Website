const slider = document.querySelector(".slider");
let slideIndex = 0;

function nextSlide() {
    if (slideIndex === slider.children.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(nextSlide, 2000); // Change slide every 2 seconds

// Initial slide
updateSlider();
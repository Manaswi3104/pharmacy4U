let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto slide every 3 seconds
setInterval(() => {
    nextSlide();
}, 3000);

//labtest js
let slideIndex = 0;
        const slides = document.querySelectorAll('.carousel-slide .product');
        const totalSlides = slides.length;

        function showSlide2(index) {
            if (index >= totalSlides) {
                slideIndex = 0;
            } else if (index < 0) {
                slideIndex = totalSlides - 1;
            } else {
                slideIndex = index;
            }
            const offset = -slideIndex * 100 / 4; // Adjust 4 for number of products shown at once
            document.querySelector('.carousel-slide').style.transform = 'translateX(' + offset + '%)';
        }

        function moveSlide(step) {
            showSlide2(slideIndex + step);
        }

        // Initial display
        showSlide2(slideIndex);
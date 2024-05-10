document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');

    let slideIndex = 0;

    function showSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        slideIndex = (slideIndex + 0.875) % slider.children.length;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slider.children.length) % slider.children.length;
        showSlide(slideIndex);
    }

    setInterval(nextSlide, 3000); // Auto slide every 3 seconds
});

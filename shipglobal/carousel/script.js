document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const fallbackImage = 'fallback.jpg'; 
    let currentIndex = 0;

    function updateCarousel(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[index].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel(currentIndex);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(currentIndex);
        });
    });

    
    items.forEach(item => {
        item.onerror = () => {
            item.src = fallbackImage;
        };
    });
    updateCarousel(currentIndex);
});
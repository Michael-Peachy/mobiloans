// JavaScript for Customer Reviews Slider
const reviewsSlider = document.querySelector('.reviews-slider');
const prevButton = document.querySelector('.slider-button.prev');
const nextButton = document.querySelector('.slider-button.next');

let scrollAmount = 0;
const scrollStep = 500; // Adjust this value to control how much to scroll

// Function to scroll to the previous review
prevButton.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) {
        scrollAmount = 0; // Prevent scrolling past the first review
    }
    reviewsSlider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

// Function to scroll to the next review
nextButton.addEventListener('click', () => {
    scrollAmount += scrollStep;
    if (scrollAmount > reviewsSlider.scrollWidth - reviewsSlider.clientWidth) {
        scrollAmount = reviewsSlider.scrollWidth - reviewsSlider.clientWidth; // Prevent scrolling past the last review
    }
    reviewsSlider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

// ---- Touch Swipe Support ----
let touchStartX = 0;
let touchEndX = 0;

// Detect when the user touches the screen
reviewsSlider.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

// Detect when the user moves their finger on the screen
reviewsSlider.addEventListener('touchmove', (e) => {
    touchEndX = e.touches[0].clientX;
    let moveAmount = touchStartX - touchEndX;
    reviewsSlider.scrollLeft += moveAmount * 4.5; // Adjust sensitivity
    touchStartX = touchEndX; // Update touch start position
});

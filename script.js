
document.querySelector('.scroll-up').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

AOS.init({
    duration: 1000, // Duration of the animation in milliseconds
    // Whether animation should happen only once - while scrolling down
});
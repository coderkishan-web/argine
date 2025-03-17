

// Initialize AOS with smooth animations
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    easing: 'ease-in-out',
    duration: 1000,
    once: false,
    mirror: true,
    anchorPlacement: 'top-bottom'
  });
});
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const aboutDropdown = document.getElementById('aboutDropdown');
const contactDropdown = document.getElementById('contactDropdown');

about.addEventListener('mouseenter', () => {
  aboutDropdown.classList.remove('hidden');
});
about.addEventListener('mouseleave', () => {
  aboutDropdown.classList.add('hidden');
});
aboutDropdown.addEventListener('mouseenter', () => {
  aboutDropdown.classList.remove('hidden');
});
aboutDropdown.addEventListener('mouseleave', () => {
  aboutDropdown.classList.add('hidden');
});

contact.addEventListener('mouseenter', () => {
  contactDropdown.classList.remove('hidden');
});
contact.addEventListener('mouseleave', () => {
  contactDropdown.classList.add('hidden');
});
contactDropdown.addEventListener('mouseenter', () => {
  contactDropdown.classList.remove('hidden');
});
contactDropdown.addEventListener('mouseleave', () => {
  contactDropdown.classList.add('hidden');
});



// swiper -
document.addEventListener('alpine:init', () => {
  Alpine.data('carousel', () => ({
      activeIndex: 0,
      interval: null,

      next() {
          this.activeIndex = (this.activeIndex + 1) % 6; 
      },
      prev() {
          this.activeIndex = (this.activeIndex - 1 + 6) % 6; 
      },
      startAutoSlide() {
          this.interval = setInterval(() => {
              this.next();
          }, 2000); 
      },
      stopAutoSlide() {
          clearInterval(this.interval);
      },
  }));
});
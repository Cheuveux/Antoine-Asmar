const swiper = new Swiper('.mySwiper', {
  direction: 'vertical',
  loop: true,
  speed: 1200,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    slideChange: function () {
      const activeSlide = this.slides[this.activeIndex];
      if (activeSlide.querySelector('.slogan1')) animateSlogan1();
      if (activeSlide.querySelector('.slogan2')) animateSlogan2();
      if (activeSlide.querySelector('.slogan3')) animateSlogan3();
    }
  }
});

// Animation au chargement du premier slide
const firstSlide = swiper.slides[swiper.activeIndex];
if (firstSlide.querySelector('.slogan1')) animateSlogan1();
if (firstSlide.querySelector('.slogan2')) animateSlogan2();
if (firstSlide.querySelector('.slogan3')) animateSlogan3();
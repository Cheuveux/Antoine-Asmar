gsap.registerPlugin(SplitText);

function animateSlogan1() {
  let split = new SplitText('.slogan1', { type: "chars,words" });
  gsap.fromTo(split.chars,
    {
      y: 30,
      autoAlpha: 0
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 2.1,
      stagger: { amount: 0.5, from: "center" },
      ease: "power2.out",
      overwrite: true
    }
  );
}

function animateSlogan2() {
  let split = new SplitText('.slogan2', { type: "chars,words" });
  gsap.fromTo(split.chars,
    {  y: 30, xPercent: -100, autoAlpha: 0 },
    { xPercent: 0, autoAlpha: 1, duration: 2.2, stagger: { amount: 0.5, from: "start" }, overwrite: true }
  );
}

function animateSlogan3() {
  let split = new SplitText('.slogan3', { type: "chars,words" });
  gsap.fromTo(split.chars,
    {  y: 30, scale: 0, autoAlpha: 0 },
    { scale: 1, autoAlpha: 1, duration: 2.2, stagger: { amount: 0.5, from: "end" }, ease: "back.out(2)", overwrite: true }
  );
}

// Wait for fonts to be loaded before creating SplitText and animating
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
    // Animation au chargement du premier slide
    const firstSlide = swiper.slides[swiper.activeIndex];
    if (firstSlide.querySelector('.slogan1')) animateSlogan1();
    if (firstSlide.querySelector('.slogan2')) animateSlogan2();
    if (firstSlide.querySelector('.slogan3')) animateSlogan3();
  });
} else {
  // Fallback if Font Loading API is not supported
  window.addEventListener('load', () => {
    const firstSlide = swiper.slides[swiper.activeIndex];
    if (firstSlide.querySelector('.slogan1')) animateSlogan1();
    if (firstSlide.querySelector('.slogan2')) animateSlogan2();
    if (firstSlide.querySelector('.slogan3')) animateSlogan3();
  });
}


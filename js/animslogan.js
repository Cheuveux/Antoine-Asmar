gsap.registerPlugin(SplitText);

function animateSlogan1() {
 
  let split = SplitText.create('.slogan1', { type: "chars,words" });
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
  
  let split = SplitText.create('.slogan2', { type: "chars,words" });
  gsap.fromTo(split.chars,
    {  y: 30, xPercent: -100, autoAlpha: 0 },
    { xPercent: 0, autoAlpha: 1, duration: 2.2, stagger: { amount: 0.5, from: "start" }, overwrite: true }
  );
}

function animateSlogan3() {

  let split = SplitText.create('.slogan3', { type: "chars,words" });
  gsap.fromTo(split.chars,
    {  y: 30, scale: 0, autoAlpha: 0 },
    { scale: 1, autoAlpha: 1, duration: 2.2, stagger: { amount: 0.5, from: "end" }, ease: "back.out(2)", overwrite: true }
  );
}


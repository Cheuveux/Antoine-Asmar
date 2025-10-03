gsap.registerPlugin(ScrollTrigger);

const split = new SplitType(".background-logo h1", {
  types: "chars",
});

gsap.set(split.chars, { color: "gray" });

gsap.to(split.chars, {
  color: "black",
  stagger: 0.1,
  ease: "none",
  scrollTrigger: {
    trigger: ".background-logo h1",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});
gsap.registerPlugin(ScrollTrigger);

const items = document.querySelectorAll(".gallery-part");
items.forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start : "top 100%",
            toggleActions: "play reverse play reverse",
        },
        opacity: 0,
        y: 50,
        x : i % 2 == 0 ? -100 : 100,
        duration: 1.2,
        ease: "power3.out",
        delay : i * 0.05,
    });
}); 

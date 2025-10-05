document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".main-container");
    const items = Array.from(container.children);

    const shuffled = items.sort(() => Math.random() - 0.5);

    shuffled.forEach(item => container.appendChild(item));

    gsap.from(".item", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out"
    });
});
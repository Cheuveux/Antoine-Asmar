gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.swiper').forEach(function(swiperEl) {
        new Swiper (swiperEl, {
            loop: true,
            navigation: {
                nextEl: swiperEl.querySelector('.swiper-button-next'),
                prevEl: swiperEl.querySelector('.swiper-button-prev'),
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            }
        });
    });

    document.querySelectorAll('.creations-item').forEach(function(item, i) {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 50%",
                toggleActions: "play reverse play reverse"
            },
            opacity: 0,
            y: 50,
            x: (i % 2 === 0) ? 100: -100,
            duration: 0.5,
            ease: "power2.out"
        });
    });
});
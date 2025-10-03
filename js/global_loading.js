document.addEventListener('DOMContentLoaded', () => {
    //Anim du body 
    gsap.from("body", {
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out'
    });

    //Anim du Main avec delay
    const mainContent = document.querySelector('main');
    if(mainContent) {
        gsap.from(mainContent.children, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15, 
            ease:'power2.out',
            delay: 0.5,
        });
    }
});
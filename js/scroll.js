window.addEventListener('DOMContentLoaded', () => {
  gsap.from('.main-container', {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
});




document.querySelectorAll('.nav-item a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const url = link.getAttribute('href');
    const anim = link.dataset.anim || 'bottom';
    const main = document.querySelector('main');

    // Détermine la direction de sortie (inverse de l'entrée)
    let exitVars = {};
    if (anim === 'bottom') exitVars = {y: 100, opacity: 0};
    if (anim === 'left') exitVars = {x: -100, opacity: 0};
    if (anim === 'right') exitVars = {x: 100, opacity: 0};

    // Animation de sortie du contenu actuel
    gsap.to(main, {
      ...exitVars,
      duration: 0.5,
      ease: "power3.in",
      onComplete: () => {
        fetch(url)
          .then(response => response.text())
          .then(html => {
            // Extraire le contenu principal de la page chargée
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const newContent = doc.querySelector('main') ? doc.querySelector('main').innerHTML : html;
            main.innerHTML = newContent;
            // Met à jour la classe du body
            const newBodyClass = doc.body.className;
            document.body.className = newBodyClass;
            // Animation d'entrée du nouveau contenu
            let enterVars = {};
            if (anim === 'bottom') enterVars = {y: 100, opacity: 0};
            if (anim === 'left') enterVars = {x: -100, opacity: 0};
            if (anim === 'right') enterVars = {x: 100, opacity: 0};
            gsap.fromTo(main, enterVars, {
              y: 0,
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out"
            });
          });
      }
    });
  });
});
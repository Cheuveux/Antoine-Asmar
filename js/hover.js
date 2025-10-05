document.querySelectorAll('.nav-item a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      anime({
        targets: link,
        color: '#B03A2E',
        letterSpacing: '6px',
        fontWeight : 700,
        duration: 700,
        easing: 'easeOutExpo'
      });
    });
    link.addEventListener('mouseleave', () => {
      anime({
        targets: link,
        color: 'rgb(128, 116, 116)',
        letterSpacing: '0px',
        fontWeight : 400,
        duration: 700,
        easing: 'easeOutExpo'
      });
    });
  });



//ajout de la classe active pour la page courante
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-item a");
  const currentPage = window.location.pathname;

  links.forEach(link => {
    const href = link.getAttribute("href");
    const linkPath = new URL(href, window.location.origin).pathname;
    if (currentPage.endsWith(linkPath)) {
      link.classList.add("active");
    }
  });
});

/* CSS for active class */
const style = document.createElement('style');
style.innerHTML = `
  .nav-item a.active {
    color: #3a3939 !important;
    font-weight: 700 !important;
    letter-spacing: 5px !important;
    
  }
`;
document.head.appendChild(style);
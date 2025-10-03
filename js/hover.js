 
 
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



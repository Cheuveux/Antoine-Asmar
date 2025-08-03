 
 
 document.querySelectorAll('.nav-item a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      anime({
        targets: link,
        color: '#B03A2E',
        letterSpacing: '6px',
        duration: 600,
        easing: 'easeOutExpo'
      });
    });
    link.addEventListener('mouseleave', () => {
      anime({
        targets: link,
        color: 'rgb(128, 116, 116)',
        letterSpacing: '0px',
        
        duration: 600,
        easing: 'easeOutExpo'
      });
    });
  });



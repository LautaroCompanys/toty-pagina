window.addEventListener('scroll', function() {
    var content = document.querySelector('.header');
    var scrollPosition = window.scrollY;
    var targetPosition = 100; // Posición de scroll en píxeles para aplicar los estilos

    if (scrollPosition > targetPosition) {
        content.classList.add('scroll-styles');
    } else {
        content.classList.remove('scroll-styles');
    }
    });

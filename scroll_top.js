document.addEventListener('DOMContentLoaded', () => {
    // Créer le bouton avec le SVG
    const button = document.createElement('button');
    button.className = 'scroll-to-top';
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path d="M450-160v-526L202-438l-42-42 320-320 320 320-42 42-248-248v526h-60Z"/>
    </svg>`;
    document.body.appendChild(button);

    // Gérer l'affichage du bouton
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });

    // Remonter en haut lors du clic
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
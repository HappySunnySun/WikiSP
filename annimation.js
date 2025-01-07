document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const target = document.querySelector(link.getAttribute('href'));
            
            if (target) {
                const windowHeight = window.innerHeight;
                const targetRect = target.getBoundingClientRect();
                const scrollTo = window.pageYOffset + targetRect.top - (windowHeight / 2);
                
                window.scrollTo({
                    top: scrollTo,
                    behavior: 'smooth'
                });
            }
        });
    });
});
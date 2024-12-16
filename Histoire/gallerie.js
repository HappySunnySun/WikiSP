// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item'); // Sélectionner tous les éléments de la galerie
    let currentIndex = 0;
    let modal = null;

    // Ajouter un gestionnaire d'événements de clic à chaque élément de la galerie
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index; 
            openModal(); 
            showImage(); 
        });
    });

    // Fonction pour ouvrir le modal
    function openModal() {
        // Créer le modal seulement s'il n'existe pas
        if (!modal) {
            modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <span class="close">&times;</span>
                <span class="nav prev">&#10094;</span>
                <img src="" alt="Image Agrandie">
                <span class="nav next">&#10095;</span>
            `;
            document.body.appendChild(modal);

            // Ajouter les gestionnaires d'événements pour fermer le modal et naviguer entre les images
            modal.querySelector('.close').addEventListener('click', closeModal);
            modal.querySelector('.prev').addEventListener('click', showPrev);
            modal.querySelector('.next').addEventListener('click', showNext);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal(); // Fermer le modal si on clique en dehors de l'image
                }
            });
        }

        modal.style.display = 'flex'; // Afficher le modal
    }

    // Fonction pour fermer le modal
    function closeModal() {
        if (modal) {
            modal.style.display = 'none'; // Masquer le modal
        }
    }

    // Fonction pour afficher l'image actuelle dans le modal
    function showImage() {
        const img = modal.querySelector('img');
        img.src = galleryItems[currentIndex].getAttribute('src'); // Mettre à jour la source de l'image
    }

    // Fonction pour afficher l'image précédente
    function showPrev(e) {
        e.stopPropagation(); // Empêcher la propagation de l'événement
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length; 
        showImage(); // Afficher l'image précédente
    }

    // Fonction pour afficher l'image suivante
    function showNext(e) {
        e.stopPropagation(); // Empêcher la propagation de l'événement
        currentIndex = (currentIndex + 1) % galleryItems.length; 
        showImage(); // Afficher l'image suivante
    }
});
// Fonction pour créer un cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Convertir les jours en millisecondes
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
    console.log(`Cookie "${name}" créé avec succès !`);
  }
  
  // Fonction pour lire un cookie
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) {
        console.log(`Valeur du cookie "${name}" : ${value}`);
        return value;
      }
    }
    console.log(`Cookie "${name}" introuvable.`);
    return null;
  }
  
  // Fonction pour supprimer un cookie
  function deleteCookie(name) {
    setCookie(name, "", -1); // Définir une date d'expiration passée
    alert(`Cookie "${name}" supprimé !`);
  }
  
  // Création automatique du cookie au chargement de la page
  document.addEventListener("DOMContentLoaded", () => {
    setCookie("utilisateur", "JeanDupont", 7); // Crée un cookie valide pendant 7 jours
  });
  
  // Gestion des boutons
  document.getElementById("getCookie").addEventListener("click", () => {
    getCookie("utilisateur"); // Lit le cookie "utilisateur"
  });
  
  document.getElementById("deleteCookie").addEventListener("click", () => {
    deleteCookie("utilisateur"); // Supprime le cookie "utilisateur"
  });
  
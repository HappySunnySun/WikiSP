// Création d'un cookie automatiquement
document.addEventListener("DOMContentLoaded", () => {
  const cookieName = "WikiScottPilgrim"; // Nom du cookie
  const cookieValue = "Utilisateur"; // Valeur par défaut
  const cookieDays = 7; // Expiration du cookie (en jours)

  // Fonction pour créer un cookie
  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Convertir les jours en millisecondes
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
    console.log(`Cookie "${name}" créé avec une durée de ${days} jour(s).`);
  };

  // Créer le cookie automatiquement
  setCookie(cookieName, cookieValue, cookieDays);
});
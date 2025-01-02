// Fonction pour créer un cookie avec une durée d'expiration
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Convertir les jours en millisecondes
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
  console.log(`Cookie "${name}" créé avec une expiration dans ${days} jour(s).`);
}

// Fonction pour lire un cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      alert(`Valeur du cookie "${name}" : ${value}`);
      return value;
    }
  }
  alert(`Cookie "${name}" introuvable.`);
  return null;
}

// Création automatique du cookie au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  setCookie("utilisateur", userName, 7); // Cookie valide pour 7 jours
});

// Gestion des boutons
document.getElementById("getCookie").addEventListener("click", () => {
  getCookie("utilisateur"); // Lire le cookie "utilisateur"
});

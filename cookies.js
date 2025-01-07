document.addEventListener("DOMContentLoaded", () => {
  const cookieName = "WikiScottPilgrim";
  const cookieValue = "Utilisateur";
  const cookieDays = 7;

  // Fonction pour vérifier si un cookie existe
  const checkCookie = (name) => {
      const cookies = document.cookie.split(';');
      for (let cookie of cookies) {
          const [cookieName, cookieValue] = cookie.trim().split('=');
          if (cookieName === name) {
              console.log(`Cookie "${name}" existe déjà.`);
              return true;
          }
      }
      return false;
  };

  // Fonction pour créer un cookie
  const setCookie = (name, value, days) => {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
      console.log(`Cookie "${name}" créé avec une durée de ${days} jour(s).`);
  };

  // Créer le cookie seulement s'il n'existe pas
  if (!checkCookie(cookieName)) {
      setCookie(cookieName, cookieValue, cookieDays);
  }
});
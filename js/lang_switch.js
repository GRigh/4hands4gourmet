document.addEventListener("DOMContentLoaded", () => {
  const langSwitch = document.getElementById("lang-switch");

  if (!langSwitch) return;

  const path = window.location.pathname;

  // capisci la lingua attuale
  const isItalian = path.includes("/it/");
  const isEnglish = path.includes("/en/");

  // imposta il testo del bottone per la lingua VERSO CUI cambiare
  if (isItalian) {
    langSwitch.textContent = "Inglese";
  } else if (isEnglish) {
    langSwitch.textContent = "Italiano";
  } else {
    // se non si capisce, default
    langSwitch.textContent = "Italiano";
  }

  langSwitch.addEventListener("click", (e) => {
    e.preventDefault();

    let newPath = "";

    if (isItalian) {
      // cambia a inglese
      newPath = path.replace("/it/", "/en/");
    } else if (isEnglish) {
      // cambia a italiano
      newPath = path.replace("/en/", "/it/");
    } else {
      // se non c’è nessuna lingua esplicita, vai alla home italiana
      newPath = "/4hands4gourmet/it/index.html";
    }

    window.location.href = newPath;
  });
});

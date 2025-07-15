document.addEventListener("DOMContentLoaded", () => {
  const interval = setInterval(() => {
    const langSwitch = document.getElementById("lang-switch");
    if (langSwitch) {
      clearInterval(interval);
      initLangSwitch(langSwitch);
    }
  }, 50);
});

function initLangSwitch(langSwitch) {
  const path = window.location.pathname;

  const isItalian = path.includes("/it/");
  const isEnglish = path.includes("/en/");

  // langSwitch.textContent = isItalian ? "ENG" : "ITA";

  langSwitch.addEventListener("click", (e) => {
    e.preventDefault();

    let newPath;

    if (isItalian) {
      // cambia solo la prima occorrenza di /it/ in /en/
      newPath = path.replace("/it/", "/en/");
    } else if (isEnglish) {
      newPath = path.replace("/en/", "/it/");
    } else {
      // fallback: se non siamo né in /it/ né in /en/
      newPath = "/4hands4gourmet/en/index.html";
    }

    // assicuriamoci che abbia sempre /index.html alla fine
    if (!newPath.endsWith(".html")) {
      if (!newPath.endsWith("/")) newPath += "/";
      newPath += "index.html";
    }

    window.location.href = newPath;
  });
}

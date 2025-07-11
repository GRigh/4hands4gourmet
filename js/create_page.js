document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  // controlla se sei su index.html
  let footerFile = "footer/footer.html";
  let navbarFile = "navbar/navbar-common.html";
  if (path === "/" || path.endsWith("index.html")) {
    navbarFile = "navbar/navbar-home.html";
  }

  fetch(navbarFile)
    .then(response => response.text())
    .then(html => {
      document.getElementById('navbar-home').innerHTML = html;
    });

  fetch(footerFile)
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer').innerHTML = html;
    });
});

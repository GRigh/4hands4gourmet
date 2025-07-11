document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  const footerFile = "footer/footer.html";
  let navbarFile = "navbar/navbar-common.html";
  let detailFile = "";

  if (path === "/" || path.endsWith("index.html")) {
    navbarFile = "navbar/navbar-home.html";
  }

  if (path.endsWith("about.html")) {
    detailFile = "navbar/detail/about.html";
  }

  // carica navbar
  fetch(navbarFile)
    .then(response => response.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;

      // solo ora il DOM della navbar esiste
      if (detailFile) {
        fetch(detailFile)
          .then(response => response.text())
          .then(html => {
            document.getElementById("detail-n").innerHTML = html;
          });
      }
    });

  // carica footer
  fetch(footerFile)
    .then(response => response.text())
    .then(html => {
      document.getElementById("footer").innerHTML = html;
    });
});

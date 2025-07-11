document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  const footerFile = "footer/footer.html";
  let navbarFile = "navbar/navbar.html";
  let detailFile = "";

  if (path === "/" || path.endsWith("index.html")) {
    detailFile = "navbar/detail/index.html";
  }

  if (path.endsWith("about.html")) {
    detailFile = "navbar/detail/about.html";
  }

  // carica navbar
  fetch(navbarFile)
    .then(response => response.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;
      const path = window.location.pathname.split("/").pop() || "index.html";
      //gestione link navbar
      document
        .querySelectorAll(".navbar-nav .nav-link")
        .forEach(link => {
          const href = link.getAttribute("href");

          if (href === path) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });

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

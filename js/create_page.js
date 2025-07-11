document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  // controlla se sei su index.html
  let footerFile = "footer/footer.html";
  let navbarFile = "navbar/navbar-common.html";
  if (path === "/" || path.endsWith("index.html")) {
    navbarFile = "navbar/navbar-home.html";
    console.log("!!!QUA!!!");
  }

  fetch(navbarFile)
    .then(response => response.text())
    .then(html => {
      document.getElementById('navbar').innerHTML = html;
    });

  fetch(footerFile)
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer').innerHTML = html;
    });
});

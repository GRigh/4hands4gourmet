document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const lang = getLang(path);
  const footerFile = `/${lang}/footer/footer.html`;
  const navbarFile = `/${lang}/navbar/navbar.html`;
  let detailFile = getDetailFile(path);
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

function getLang(path) {
  const parts = path.split("/").filter(Boolean);
  return (parts[0] === "it" || parts[0] === "en") ? parts[0] : "it";
}

function getDetailFile(path, lang) {
  if (path === "/" || path.endsWith("index.html")) {
    return `/${lang}/navbar/detail/index.html`;
  } else if (path.endsWith("about.html")) {
    return `/${lang}/navbar/detail/about.html`;
  } else if (path.endsWith("booking.html")) {
    return `/${lang}/navbar/detail/booking.html`;
  } else if (path.endsWith("contact.html")) {
    return `/${lang}/navbar/detail/contact.html`;
  } else if (path.endsWith("service.html")) {
    return `/${lang}/navbar/detail/service.html`;
  } else if (path.endsWith("team.html")) {
    return `/${lang}/navbar/detail/team.html`;
  } else if (path.endsWith("testimonial.html")) {
    return `/${lang}/navbar/detail/testimonial.html`;
  }
  return "";
}

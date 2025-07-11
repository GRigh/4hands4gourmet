document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  const footerFile = "footer/footer.html";
  let navbarFile = "navbar/navbar.html";
  let detailFile = getDetailFile(path);

  if (path === "/" || path.endsWith("index.html")) {
    detailFile = "navbar/detail/index.html";
  } else if (path.endsWith("about.html")) {
    detailFile = "navbar/detail/about.html";
  } else if (path.endsWith("booking.html")) {
    detailFile = "navbar/detail/booking.html";
  } else if (path.endsWith("contact.html")) {
    detailFile = "navbar/detail/contact.html";
  } else if (path.endsWith("service.html")) {
    detailFile = "navbar/detail/service.html";
  } else if (path.endsWith("team.html")) {
    detailFile = "navbar/detail/team.html";
  } else if (path.endsWith("testimonial.html")) {
    detailFile = "navbar/detail/testimonial.html";
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

function getDetailFile(path) {
  if (path === "/" || path.endsWith("index.html")) {
    return "navbar/detail/index.html";
  } else if (path.endsWith("about.html")) {
    return "navbar/detail/about.html";
  } else if (path.endsWith("booking.html")) {
    return "navbar/detail/booking.html";
  } else if (path.endsWith("contact.html")) {
    return "navbar/detail/contact.html";
  } else if (path.endsWith("service.html")) {
    return "navbar/detail/service.html";
  } else if (path.endsWith("team.html")) {
    return "navbar/detail/team.html";
  } else if (path.endsWith("testimonial.html")) {
    return "navbar/detail/testimonial.html";
  }
  // opzionale: se nessun caso corrisponde
  return "";
}

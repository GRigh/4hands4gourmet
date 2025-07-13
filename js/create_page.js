document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const langPrefix = path.split("/")[1] ? `/${path.split("/")[1]}` : "";
  const footerFile = "footer/footer.html";
  let navbarFile = "navbar/navbar.html";
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

function getDetailFile(path) {
  if (path === "/" || path.endsWith("index.html")) {
    return `${langPrefix}/navbar/detail/index.html`;
  } else if (path.endsWith("about.html")) {
    return `${langPrefix}/navbar/detail/about.html`;
  } else if (path.endsWith("booking.html")) {
    return `${langPrefix}/navbar/detail/booking.html`;
  } else if (path.endsWith("contact.html")) {
    return `${langPrefix}/navbar/detail/contact.html`;
  } else if (path.endsWith("service.html")) {
    return `${langPrefix}/navbar/detail/service.html`;
  } else if (path.endsWith("team.html")) {
    return `${langPrefix}/navbar/detail/team.html`;
  } else if (path.endsWith("testimonial.html")) {
    return `${langPrefix}/navbar/detail/testimonial.html`;
  }
  return "";
}

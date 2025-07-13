document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname; // es: /4hands4gourmet/it/about.html

  // Ricava la lingua: la prima cartella dopo /4hands4gourmet/
  const parts = path.split("/");
  // parts esempio: ["", "4hands4gourmet", "it", "about.html"]
  // se non c’è lingua, default a 'it'
  let lang = "it";
  if (parts.length > 2 && (parts[2] === "it" || parts[2] === "en")) {
    lang = parts[2];
  }

  const basePath = `/4hands4gourmet/${lang}/`;

  const footerFile = `${basePath}footer/footer.html`;
  const navbarFile = `${basePath}navbar/navbar.html`;

  // Funzione per dettaglio in base al file
  function getDetailFile(pathname) {
    if (pathname === "/" || pathname.endsWith("index.html")) {
      return `${basePath}navbar/detail/index.html`;
    } else if (pathname.endsWith("about.html")) {
      return `${basePath}navbar/detail/about.html`;
    } else if (pathname.endsWith("booking.html")) {
      return `${basePath}navbar/detail/booking.html`;
    } else if (pathname.endsWith("contact.html")) {
      return `${basePath}navbar/detail/contact.html`;
    } else if (pathname.endsWith("service.html")) {
      return `${basePath}navbar/detail/service.html`;
    } else if (pathname.endsWith("team.html")) {
      return `${basePath}navbar/detail/team.html`;
    } else if (pathname.endsWith("testimonial.html")) {
      return `${basePath}navbar/detail/testimonial.html`;
    }
    return "";
  }

  let detailFile = getDetailFile(path);

  // carica navbar
  fetch(navbarFile)
    .then(response => response.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;

      const currentPage = window.location.pathname.split("/").pop() || "index.html";

      // Gestione link navbar active
      document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPage) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      // Carica dettaglio solo dopo che navbar è caricata
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

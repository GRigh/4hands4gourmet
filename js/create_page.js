document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const lang = getLang(path);
  const basePath = "/4hands4gourmet";

  console.log("PATH:", path);
  console.log("LANG:", lang);

  const footerFile = `${basePath}/${lang}/footer/footer.html`;
  const navbarFile = `${basePath}/${lang}/navbar/navbar.html`;
  let detailFile = getDetailFile(path, lang);

  // carica navbar
  fetch(navbarFile)
    .then(response => response.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;
      const page = window.location.pathname.split("/").pop() || "index.html";
      // gestione link navbar
      document
        .querySelectorAll(".navbar-nav .nav-link")
        .forEach(link => {
          const href = link.getAttribute("href");
          if (href === page) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });

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
  const segments = path.split("/");
  if (segments.includes("en")) {
    return "en";
  }
  if (segments.includes("it")) {
    return "it";
  }
  return "it";
}

function getDetailFile(path, lang) {
  const basePath = "/4hands4gourmet";
  if (path === "/" || path.endsWith("index.html")) {
    return `${basePath}/${lang}/navbar/detail/index.html`;
  } else if (path.endsWith("about.html")) {
    return `${basePath}/${lang}/navbar/detail/about.html`;
  } else if (path.endsWith("booking.html")) {
    return `${basePath}/${lang}/navbar/detail/booking.html`;
  } else if (path.endsWith("contact.html")) {
    return `${basePath}/${lang}/navbar/detail/contact.html`;
  } else if (path.endsWith("service.html")) {
    return `${basePath}/${lang}/navbar/detail/service.html`;
  } else if (path.endsWith("team.html")) {
    return `${basePath}/${lang}/navbar/detail/team.html`;
  } else if (path.endsWith("testimonial.html")) {
    return `${basePath}/${lang}/navbar/detail/testimonial.html`;
  }
  return "";
}

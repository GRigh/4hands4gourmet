document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  let detail = "";
  if (path.endsWith("about.html")) {
    detail = "navbar/detail/about.html";
  }

  fetch(detail)
    .then(response => response.text())
    .then(html => {
      document.getElementById('detail-n').innerHTML = html;
    });
});

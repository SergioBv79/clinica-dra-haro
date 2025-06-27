// cookies-banner.js
document.addEventListener("DOMContentLoaded", function () {
  const hasConsent = localStorage.getItem("consent-analytics") !== null;

  if (!hasConsent) {
    const banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.className = "cookie-banner animate-fade-in shadow-lg bg-white border-top border-warning";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Aviso de cookies");
    banner.innerHTML = `
      <div class="container py-3 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <div class="d-flex align-items-start gap-2">
          <i class="fas fa-cookie-bite fa-2x text-warning mt-1"></i>
          <div>
            <strong>Este sitio web utiliza cookies</strong><br/>
            para mejorar la experiencia y mostrar contenido relevante.
          </div>
        </div>
        <div class="d-flex gap-2">
          <button id="accept-cookies" class="btn btn-warning btn-sm fw-semibold">Aceptar todas</button>
          <button id="config-cookies" class="btn btn-outline-secondary btn-sm">Configurar</button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);

    document.getElementById("accept-cookies").addEventListener("click", function () {
      localStorage.setItem("consent-analytics", "true");
      localStorage.setItem("consent-marketing", "true");
      banner.remove();
      location.reload();
    });

    document.getElementById("config-cookies").addEventListener("click", function () {
  window.location.href = "politica_cookies.html#panel-config";
});

  }
});

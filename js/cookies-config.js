// cookies-config.js
document.addEventListener("DOMContentLoaded", function () {
  const consentAnalytics = localStorage.getItem("consent-analytics") === "true";
  const consentMarketing = localStorage.getItem("consent-marketing") === "true";

  // ▶️ Google Analytics (solo si hay consentimiento de análisis)
  if (consentAnalytics) {
    // 🔧 CAMBIA 'G-XXXXXXX' POR TU ID REAL DE GA4 cuando publiques
    const gtagScript = document.createElement("script");
    gtagScript.setAttribute("async", "");
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"; // <-- CAMBIAR
    document.head.appendChild(gtagScript);

    gtagScript.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXX'); // <-- CAMBIAR
    };
  }

  // ▶️ YouTube (usa <div data-youtube="ID">)
  const ytPlaceholders = document.querySelectorAll('[data-youtube]');
  ytPlaceholders.forEach(el => {
    const videoId = el.getAttribute('data-youtube');
    if (consentMarketing) {
      el.innerHTML = `
        <iframe width="100%" height="315"
          src="https://www.youtube.com/embed/${videoId}"
          title="YouTube video"
          frameborder="0" allowfullscreen loading="lazy">
        </iframe>`;
    } else {
      el.innerHTML = `
        <div style="background:#eee; padding:1rem; text-align:center; border-radius:8px;">
          <p>Este vídeo está bloqueado hasta que aceptes las cookies de marketing.</p>
        </div>`;
    }
  });

  // ▶️ Google Maps (usa <div data-maps="URL">)
  const mapPlaceholders = document.querySelectorAll('[data-maps]');
  mapPlaceholders.forEach(el => {
    const url = el.getAttribute('data-maps');
    if (consentMarketing) {
      el.innerHTML = `
        <iframe src="${url}" width="100%" height="300"
          frameborder="0" style="border:0;" allowfullscreen="" loading="lazy">
        </iframe>`;
    } else {
      el.innerHTML = `
        <div style="background:#eee; padding:1rem; text-align:center; border-radius:8px;">
          <p>El mapa está bloqueado hasta que aceptes las cookies de marketing.</p>
        </div>`;
    }
  });
});

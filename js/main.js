import { CONFIG } from "./config.js";

const c = CONFIG.contact;
const wa = `https://wa.me/${c.whatsapp}`;
const page = location.pathname.split("/").pop() || "index.html";

// --- Iconos SVG (stroke) ---
const I = {
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  headset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2zM20 14a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2z"/><path d="M18 18v1a3 3 0 0 1-3 3h-3"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zM6.6 20.013c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9H16l-.4 2.9h-2.1v7A10 10 0 0 0 22 12z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
};

const CREDIT_TYPES = [
  "Crédito Personal", "Crédito para Empleados", "Crédito para Jubilados", "Crédito para Comercios",
];

function topbar() {
  return `
  <div class="topbar"><div class="container">
    <div class="tb-left"><span class="tb-item">${I.shield}<span>Empresa argentina con más de 15 años de trayectoria</span></span></div>
    <div class="tb-right">
      <span class="tb-item">${I.headset}<span>Atención personalizada</span></span>
      <a class="tb-item" href="${wa}" target="_blank" rel="noopener">${I.whatsapp}<span>${c.whatsappDisplay}</span></a>
    </div>
  </div></div>`;
}

function header() {
  const link = (href, label, extra = "") =>
    `<a href="${href}" class="${href === page ? "active" : ""}">${label}</a>${extra}`;
  const drop = `
    <div class="has-drop">
      <a href="solicita-tu-credito.html">Créditos</a>
      <div class="dropdown">${CREDIT_TYPES.map(t => `<a href="solicita-tu-credito.html">${t}</a>`).join("")}</div>
    </div>`;
  return `
  <header class="site-header"><div class="container nav">
    <a href="index.html" aria-label="MaxiCredit"><img class="logo" src="assets/logo.svg" alt="MaxiCredit"></a>
    <button class="nav-toggle" aria-label="Menú">☰</button>
    <nav class="nav-links">
      ${link("index.html", "Inicio")}
      ${drop}
      <a href="index.html#pasos">¿Cómo funciona?</a>
      ${link("preguntas-frecuentes.html", "Preguntas frecuentes")}
      ${link("contacto.html", "Contacto")}
      <a href="solicita-tu-credito.html" class="btn btn-primary">Solicitá tu crédito</a>
    </nav>
  </div></header>`;
}

function footer() {
  return `
  <footer class="site-footer"><div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img class="logo" src="assets/logo-white.svg" alt="MaxiCredit">
        <p>Te ofrecemos créditos personales rápidos, simples y 100% online.</p>
        <div class="footer-social">
          <a href="#" aria-label="Facebook">${I.facebook}</a>
          <a href="${c.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${I.instagram}</a>
          <a href="${wa}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.whatsapp}</a>
        </div>
      </div>
      <div>
        <h4>Enlaces rápidos</h4>
        <a href="index.html">Inicio</a>
        <a href="index.html#pasos">¿Cómo funciona?</a>
        <a href="preguntas-frecuentes.html">Preguntas frecuentes</a>
        <a href="contacto.html">Contacto</a>
      </div>
      <div>
        <h4>Créditos</h4>
        ${CREDIT_TYPES.map(t => `<a href="solicita-tu-credito.html">${t}</a>`).join("")}
      </div>
      <div class="footer-contact">
        <h4>Contactanos</h4>
        <a class="li" href="${wa}" target="_blank" rel="noopener">${I.whatsapp}<span>${c.whatsappDisplay}</span></a>
        <a class="li" href="mailto:${c.email}">${I.mail}<span>${c.email}</span></a>
        <p class="li">${I.pin}<span>${c.address}</span></p>
      </div>
    </div>
    <div class="footer-bottom">© ${new Date().getFullYear()} ${c.company}. Todos los derechos reservados.</div>
  </div></footer>`;
}

function mountChrome() {
  const h = document.querySelector("[data-header]");
  if (h) h.outerHTML = topbar() + header();
  const f = document.querySelector("[data-footer]");
  if (f) f.outerHTML = footer();

  const wf = document.createElement("a");
  wf.className = "wa-float";
  wf.href = wa; wf.target = "_blank"; wf.rel = "noopener";
  wf.setAttribute("aria-label", "WhatsApp");
  wf.innerHTML = I.whatsapp;
  document.body.appendChild(wf);

  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle) toggle.addEventListener("click", () => links.classList.toggle("open"));
}

// Expone iconos para uso en páginas
window.MC_ICONS = I;

document.addEventListener("DOMContentLoaded", mountChrome);

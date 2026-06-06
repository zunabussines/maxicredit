import { CONFIG } from "./config.js";

const NAV = [
  { href: "index.html", label: "Inicio" },
  { href: "solicita-tu-credito.html", label: "Solicitá tu Crédito" },
  { href: "preguntas-frecuentes.html", label: "Preguntas Frecuentes" },
  { href: "contacto.html", label: "Contacto" },
];

const page = location.pathname.split("/").pop() || "index.html";
const wa = `https://wa.me/${CONFIG.contact.whatsapp}`;

function header() {
  const links = NAV.map(n =>
    `<a href="${n.href}" class="${n.href === page ? "active" : ""}">${n.label}</a>`
  ).join("");
  return `
  <header class="site-header"><div class="container nav">
    <a href="index.html"><img class="logo" src="assets/logo.svg" alt="MaxiCredit"></a>
    <button class="nav-toggle" aria-label="Menú">☰</button>
    <nav class="nav-links">
      ${links}
      <a href="solicita-tu-credito.html" class="btn btn-primary">MI CRÉDITO AHORA</a>
    </nav>
  </div></header>`;
}

function footer() {
  const c = CONFIG.contact;
  return `
  <footer class="site-footer"><div class="container">
    <div class="footer-grid">
      <div>
        <img class="logo" src="assets/logo.svg" alt="MaxiCredit" style="height:38px;margin-bottom:14px">
        <p>Créditos personales y de consumo con más de 15 años de trayectoria.</p>
        <p>${c.company} — CUIT ${c.cuit}</p>
        <p>${c.address}</p>
      </div>
      <div>
        <h4>Navegación</h4>
        ${NAV.map(n => `<a href="${n.href}">${n.label}</a>`).join("")}
      </div>
      <div>
        <h4>Contacto</h4>
        <a href="mailto:${c.email}">${c.email}</a>
        <a href="${wa}" target="_blank" rel="noopener">WhatsApp ${c.whatsappDisplay}</a>
        <a href="${c.instagram}" target="_blank" rel="noopener">Instagram</a>
      </div>
    </div>
    <div class="footer-bottom">© ${new Date().getFullYear()} ${c.company}. Todos los derechos reservados.</div>
  </div></footer>`;
}

function mountChrome() {
  const h = document.querySelector("[data-header]");
  const f = document.querySelector("[data-footer]");
  if (h) h.innerHTML = header();
  if (f) f.innerHTML = footer();

  // WhatsApp flotante
  const wf = document.createElement("a");
  wf.className = "wa-float";
  wf.href = wa; wf.target = "_blank"; wf.rel = "noopener";
  wf.setAttribute("aria-label", "WhatsApp");
  wf.innerHTML = "💬";
  document.body.appendChild(wf);

  // Toggle menú mobile
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle) toggle.addEventListener("click", () => links.classList.toggle("open"));
}

function scrollReveal() {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => { mountChrome(); scrollReveal(); });

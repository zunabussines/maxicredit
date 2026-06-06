import { CONFIG } from "./config.js";
import { validateForm, buildPayload } from "./form-logic.js";

function getData(form) {
  const fd = new FormData(form);
  return {
    nombre: fd.get("nombre"), dni: fd.get("dni"), nacimiento: fd.get("nacimiento"),
    email: fd.get("email"), telefono: fd.get("telefono"), zona: fd.get("zona"),
    domicilio: fd.get("domicilio"), laboral: fd.get("laboral"),
    monto: fd.get("monto"), cuotas: fd.get("cuotas"), mensaje: fd.get("mensaje"),
    consentimiento: fd.get("consentimiento") === "on",
    honeypot: fd.get("botcheck"),
  };
}

function showErrors(form, errors) {
  form.querySelectorAll(".field").forEach(f => f.classList.remove("invalid"));
  Object.keys(errors).forEach(name => {
    const field = form.querySelector(`[name="${name}"]`)?.closest(".field");
    if (field) {
      field.classList.add("invalid");
      const err = field.querySelector(".err");
      if (err) err.textContent = errors[name];
    }
  });
}

function prefillFromQuery(form) {
  const q = new URLSearchParams(location.search);
  if (q.get("monto")) form.querySelector('[name="monto"]').value = q.get("monto");
  if (q.get("cuotas")) {
    const sel = form.querySelector('[name="cuotas"]');
    if (sel) sel.value = q.get("cuotas");
  }
}

function init() {
  const form = document.getElementById("credit-form");
  if (!form) return;
  prefillFromQuery(form);
  const msg = document.getElementById("form-msg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = getData(form);
    if (data.honeypot) return; // bot

    const { valid, errors } = validateForm(data);
    showErrors(form, errors);
    if (!valid) {
      msg.className = "form-msg bad";
      msg.textContent = "Revisá los campos marcados.";
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true; btn.textContent = "Enviando…";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(buildPayload(data, CONFIG.web3formsKey)),
      });
      const out = await res.json();
      if (out.success) {
        form.reset();
        msg.className = "form-msg ok";
        msg.innerHTML = "¡Listo! Recibimos tu solicitud, te vamos a contactar a la brevedad. " +
          `Si querés, escribinos también por <a href="https://wa.me/${CONFIG.contact.whatsapp}" target="_blank" rel="noopener">WhatsApp</a>.`;
      } else {
        throw new Error(out.message || "Error");
      }
    } catch (err) {
      msg.className = "form-msg bad";
      msg.innerHTML = "No pudimos enviar la solicitud. Probá de nuevo o escribinos por " +
        `<a href="https://wa.me/${CONFIG.contact.whatsapp}" target="_blank" rel="noopener">WhatsApp</a>.`;
    } finally {
      btn.disabled = false; btn.textContent = "Enviar solicitud";
    }
  });
}

document.addEventListener("DOMContentLoaded", init);

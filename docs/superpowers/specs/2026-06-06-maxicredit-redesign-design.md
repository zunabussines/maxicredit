# MaxiCredit — Rediseño del sitio web

**Fecha:** 2026-06-06
**Estado:** Aprobado (diseño)

---

## Contexto

MaxiCredit (razón social **GABAR SA**) es una empresa argentina de créditos personales y de
consumo con más de 15 años de trayectoria. Se rediseña su sitio actual (https://maxicredit.com.ar/)
con un look moderno tipo fintech. El dominio se conserva; la migración/hosting se resuelve al final.

### Datos de la empresa
- Razón social: GABAR SA — CUIT 33-70893607-9
- Domicilio: Entre Ríos 267, Venado Tuerto (2600), Santa Fe, Argentina
- Email: maxicredit_info@hotmail.com
- Teléfono / WhatsApp: 11 6232 8130
- Pilares de marca: **Seguridad, Compromiso, Rapidez**
- Servicios: créditos personales y de consumo; efectivo a domicilio; retiro en comercios
  adheridos; acreditación en cuenta bancaria
- Zonas de cobertura: CABA y GBA (Norte, Oeste, Sur)

---

## Decisiones (brainstorming)

| Tema | Decisión |
|------|----------|
| Alcance | Sitio **multipágina** (Inicio, Solicitá tu Crédito, FAQ, Contacto) |
| Envío del formulario | **Web3Forms** — sitio 100% estático, sin servidor |
| Mail destino | **Pendiente** — placeholder editable en `js/config.js` |
| Calculadora | **Sí**, interactiva — tasas/valores de ejemplo en config editable |
| Material de marca | Logo provisto por el cliente; resto de visuales generados |
| Dirección visual | **B · Fintech bold (oscuro)** — negro `#0A0A0A` + rojo `#E2231A` + blanco |
| Testimonios | Sí — reseñas **inventadas** (placeholder) en la home |

---

## Estructura

Elementos globales: header fijo + nav + botón "MI CRÉDITO AHORA"; footer con datos de GABAR SA;
botón flotante de WhatsApp. Inyectados por JS desde `js/config.js` (DRY).

- **Inicio:** hero + calculadora + servicios + cómo funciona + por qué + reseñas + zonas + FAQ resumida + CTA.
- **Solicitá tu Crédito:** formulario (conversión principal) → Web3Forms.
- **Preguntas Frecuentes:** FAQ real en acordeón.
- **Contacto:** datos, WhatsApp, mail, dirección, mapa.

### Calculadora
Slider de monto + selector de cuotas → cuota mensual estimada (sistema francés) y total.
CTA precarga el formulario con monto/cuotas. Config en `js/config.js`.

### Formulario
Campos: nombre y apellido, DNI, fecha de nacimiento, email, teléfono/WhatsApp, zona, domicilio,
situación laboral, monto, cuotas, mensaje (opcional), consentimiento. Validación en cliente,
honeypot anti-spam, envío a Web3Forms (mail destino vía access key configurable).

---

## Tecnología
HTML + CSS + JavaScript vanilla (ES modules). Sitio estático. Responsive mobile-first.
Tests de lógica pura con `node:test`. Dominio `maxicredit.com.ar` se conserva.

### Puntos configurables (todo en `js/config.js`)
1. Mail destino del formulario (Web3Forms access key).
2. Tasas / montos / cuotas de la calculadora.
3. Datos de contacto.
4. Reseñas/testimonios.

---

## Fuera de alcance (por ahora)
- Migración real de hosting y dominio.
- Tasas/valores reales de la calculadora.
- Mail destino final del formulario.
- Contenido real del Instagram.
- Integración con scoring/aprobación crediticia real.

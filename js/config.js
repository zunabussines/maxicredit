// =============================================================
//  CONFIGURACIÓN DE MAXICREDIT — editá SOLO este archivo
// =============================================================

export const CONFIG = {
  // --- Datos de contacto (se muestran en header, footer y contacto) ---
  contact: {
    company: "GABAR SA",
    cuit: "33-70893607-9",
    email: "maxicredit_info@hotmail.com",
    whatsapp: "5491162328130",        // formato internacional para wa.me (sin + ni espacios)
    whatsappDisplay: "11 6232 8130",  // como se muestra al usuario
    address: "Entre Ríos 267, Venado Tuerto (2600), Santa Fe, Argentina",
    instagram: "https://www.instagram.com/maxicredit/",
  },

  // --- Envío del formulario (Web3Forms) ---
  // PENDIENTE: crear cuenta gratis en https://web3forms.com, asociar el MAIL DESTINO
  // y pegar acá la "Access Key". El mail al que llegan las solicitudes se define
  // en el panel de Web3Forms vinculado a esta key.
  web3formsKey: "REEMPLAZAR-CON-TU-ACCESS-KEY",

  // --- Calculadora (VALORES DE EJEMPLO — reemplazar por los reales) ---
  calculator: {
    minAmount: 50000,
    maxAmount: 1000000,
    stepAmount: 10000,
    defaultAmount: 300000,
    terms: [3, 6, 9, 12, 18, 24],   // cuotas disponibles
    defaultTerm: 12,
    monthlyRate: 0.12,              // tasa mensual de EJEMPLO (12%). REEMPLAZAR.
  },

  // --- Reseñas (PLACEHOLDER — inventadas, reemplazar por reales) ---
  reviews: [
    { name: "Carla M.",   place: "Moreno, GBA Oeste",  stars: 5,
      text: "Necesitaba la plata para un arreglo urgente y en el día me la aprobaron. Trato bárbaro y todo clarito." },
    { name: "Diego R.",   place: "Lanús, GBA Sur",     stars: 5,
      text: "Pensé que iba a ser un trámite eterno y fue al revés. Cargué el formulario y me llamaron enseguida." },
    { name: "Romina P.",  place: "San Fernando, GBA Norte", stars: 5,
      text: "Me explicaron las cuotas sin letra chica. Recomiendo MaxiCredit, cumplen lo que dicen." },
    { name: "Sergio A.",  place: "CABA",               stars: 4,
      text: "Rápido y sin tantas vueltas. La plata la recibí donde les dije. Muy conformes en casa." },
  ],
};

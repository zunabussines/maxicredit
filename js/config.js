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
  // Las solicitudes deben llegar a: info@maxicredit.com.ar
  // PASO PENDIENTE: entrar a https://web3forms.com, generar una Access Key para
  // info@maxicredit.com.ar (te la envían a esa casilla) y pegarla acá abajo.
  formRecipient: "info@maxicredit.com.ar",
  web3formsKey: "REEMPLAZAR-CON-TU-ACCESS-KEY",

  // --- Calculadora (VALORES DE EJEMPLO — reemplazar por los reales) ---
  calculator: {
    minAmount: 50000,
    maxAmount: 300000,
    stepAmount: 10000,
    defaultAmount: 150000,
    terms: [3, 6, 9, 12, 18, 24],   // cuotas disponibles
    defaultTerm: 12,
    monthlyRate: 0.12,              // tasa mensual de EJEMPLO (12%). REEMPLAZAR.
  },

  // --- Localidades cubiertas (Zona Norte del GBA) ---
  zonasNorte: [
    "Vicente López", "Olivos", "Florida", "Munro", "La Lucila", "Villa Adelina",
    "San Isidro", "Martínez", "Acassuso", "Beccar", "Boulogne", "San Fernando",
    "Victoria", "Virreyes", "Tigre", "Don Torcuato", "General Pacheco", "Benavídez",
    "Rincón de Milberg", "Nordelta", "Escobar", "Garín", "Ingeniero Maschwitz",
    "Belén de Escobar", "Pilar", "Del Viso", "Malvinas Argentinas", "Los Polvorines",
    "Grand Bourg", "José C. Paz", "San Miguel", "Bella Vista", "Muñiz",
    "General San Martín", "Villa Ballester", "San Andrés", "Tres de Febrero",
    "Caseros", "Santos Lugares",
  ],

  // --- Reseñas (PLACEHOLDER — inventadas, reemplazar por reales) ---
  reviews: [
    { name: "Carla M.",   place: "San Isidro",  stars: 5,
      text: "Me la aprobaron en el día. Trato bárbaro." },
    { name: "Diego R.",   place: "Tigre",     stars: 5,
      text: "Cargué el formulario y me llamaron enseguida." },
    { name: "Romina P.",  place: "San Fernando", stars: 5,
      text: "Me explicaron todo sin letra chica. Cumplen." },
    { name: "Sergio A.",  place: "Vicente López", stars: 4,
      text: "Rápido y la plata donde la necesitaba." },
  ],
};

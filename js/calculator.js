// Cálculo de cuota por sistema francés (cuota fija).
export function computeQuote(amount, term, monthlyRate) {
  const P = Number(amount);
  const n = Number(term);
  const i = Number(monthlyRate);
  if (!P || !n) return { monthly: 0, total: 0 };

  let monthly;
  if (i === 0) {
    monthly = P / n;
  } else {
    monthly = (P * i) / (1 - Math.pow(1 + i, -n));
  }
  return { monthly, total: monthly * n };
}

// Formatea un número como pesos argentinos sin decimales.
export function formatARS(value) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

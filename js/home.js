import { CONFIG } from "./config.js";
import { computeQuote, formatARS } from "./calculator.js";

const cfg = CONFIG.calculator;
let amount = cfg.defaultAmount;
let term = cfg.defaultTerm;

function renderTerms() {
  const wrap = document.getElementById("calc-terms");
  wrap.innerHTML = cfg.terms.map(t =>
    `<button data-term="${t}" class="${t === term ? "active" : ""}">${t}</button>`
  ).join("");
  wrap.querySelectorAll("button").forEach(b =>
    b.addEventListener("click", () => { term = Number(b.dataset.term); renderTerms(); update(); })
  );
}

function update() {
  const { monthly, total } = computeQuote(amount, term, cfg.monthlyRate);
  document.getElementById("calc-amount-out").textContent = formatARS(amount);
  document.getElementById("calc-monthly").textContent = formatARS(monthly);
  document.getElementById("calc-total").textContent = formatARS(total);
  const link = document.getElementById("calc-cta");
  link.href = `solicita-tu-credito.html?monto=${amount}&cuotas=${term}`;
}

function init() {
  const slider = document.getElementById("calc-range");
  if (!slider) return;
  slider.min = cfg.minAmount; slider.max = cfg.maxAmount;
  slider.step = cfg.stepAmount; slider.value = amount;
  slider.addEventListener("input", () => { amount = Number(slider.value); update(); });
  renderTerms();
  update();
}

document.addEventListener("DOMContentLoaded", init);

import { test } from "node:test";
import assert from "node:assert/strict";
import { computeQuote, formatARS } from "../js/calculator.js";

test("computeQuote con tasa 12% mensual, 12 cuotas", () => {
  const r = computeQuote(300000, 12, 0.12);
  // cuota francesa ≈ 48431.04 ; total ≈ 581172.5
  assert.ok(Math.abs(r.monthly - 48431.04) < 1, `monthly fue ${r.monthly}`);
  assert.ok(Math.abs(r.total - r.monthly * 12) < 0.01);
});

test("computeQuote con tasa 0 reparte en cuotas iguales", () => {
  const r = computeQuote(120000, 6, 0);
  assert.equal(r.monthly, 20000);
  assert.equal(r.total, 120000);
});

test("formatARS formatea en pesos sin decimales", () => {
  const s = formatARS(48433.86);
  assert.ok(s.includes("48.434") || s.includes("48,434"), `fue ${s}`);
  assert.ok(s.includes("$"));
});

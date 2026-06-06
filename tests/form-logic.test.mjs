import { test } from "node:test";
import assert from "node:assert/strict";
import { validateForm, buildPayload } from "../js/form-logic.js";

const ok = {
  nombre: "Juan Perez", dni: "30111222", nacimiento: "1990-05-10",
  email: "juan@mail.com", telefono: "1162328130", zona: "GBA Sur",
  domicilio: "Calle 1 123", laboral: "Relación de dependencia",
  monto: "300000", cuotas: "12", consentimiento: true,
};

test("validateForm acepta datos completos", () => {
  const r = validateForm(ok);
  assert.equal(r.valid, true);
  assert.deepEqual(r.errors, {});
});

test("validateForm marca requeridos faltantes", () => {
  const r = validateForm({ ...ok, nombre: "", email: "" });
  assert.equal(r.valid, false);
  assert.ok(r.errors.nombre);
  assert.ok(r.errors.email);
});

test("validateForm valida email y consentimiento", () => {
  const r = validateForm({ ...ok, email: "no-es-mail", consentimiento: false });
  assert.equal(r.valid, false);
  assert.ok(r.errors.email);
  assert.ok(r.errors.consentimiento);
});

test("buildPayload incluye access_key y subject", () => {
  const p = buildPayload(ok, "KEY123");
  assert.equal(p.access_key, "KEY123");
  assert.ok(p.subject.includes("Solicitud"));
  assert.equal(p.nombre, "Juan Perez");
  assert.equal(p.monto, "300000");
});

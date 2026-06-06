const REQUIRED = ["nombre", "dni", "nacimiento", "email", "telefono",
                  "zona", "domicilio", "laboral", "monto", "cuotas"];

export function validateForm(data) {
  const errors = {};
  for (const f of REQUIRED) {
    if (!data[f] || String(data[f]).trim() === "") {
      errors[f] = "Este campo es obligatorio.";
    }
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Ingresá un email válido.";
  }
  if (!data.consentimiento) {
    errors.consentimiento = "Tenés que aceptar para continuar.";
  }
  return { valid: Object.keys(errors).length === 0, errors };
}

export function buildPayload(data, accessKey) {
  return {
    access_key: accessKey,
    subject: `Nueva Solicitud de Crédito — ${data.nombre || ""}`.trim(),
    from_name: "Web MaxiCredit",
    nombre: data.nombre,
    dni: data.dni,
    nacimiento: data.nacimiento,
    email: data.email,
    telefono: data.telefono,
    zona: data.zona,
    domicilio: data.domicilio,
    situacion_laboral: data.laboral,
    monto: data.monto,
    cuotas: data.cuotas,
    mensaje: data.mensaje || "",
  };
}

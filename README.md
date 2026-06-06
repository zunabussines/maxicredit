# MaxiCredit — Sitio web

Sitio estático (HTML + CSS + JS). No requiere servidor para funcionar; sí un servicio
externo (Web3Forms) para que el formulario envíe los mails.

## Cómo correrlo localmente
```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Tests
```bash
npm test
```

## Qué configurar (TODO en `js/config.js`)

1. **Mail destino del formulario** → `web3formsKey`
   - Crear cuenta gratis en https://web3forms.com
   - Asociar el mail donde querés recibir las solicitudes
   - Pegar la "Access Key" en `web3formsKey`
2. **Tasas / montos / cuotas de la calculadora** → objeto `calculator`
   (los valores actuales son de EJEMPLO)
3. **Datos de contacto** → objeto `contact`
4. **Reseñas** → array `reviews` (las actuales son placeholder inventadas)

## Reemplazar el logo
El logo está recreado en `assets/logo.svg`. Si tenés el PNG/SVG oficial,
reemplazá ese archivo manteniendo el nombre.

## Estructura
```
index.html / solicita-tu-credito.html / preguntas-frecuentes.html / contacto.html
css/styles.css          → sistema de diseño y estilos
js/config.js            → ÚNICO archivo a editar por el cliente
js/calculator.js        → cálculo de cuota (sistema francés)
js/form-logic.js        → validación y armado del payload
js/main.js              → header/footer/whatsapp + nav + scroll reveal
js/home.js              → calculadora interactiva
js/form.js              → envío del formulario a Web3Forms
tests/                  → tests de la lógica pura
```

## Deploy / dominio
El sitio se puede subir a cualquier hosting estático manteniendo el dominio
`maxicredit.com.ar`. (Pendiente de definir.)

# CCR Consultores Contables — sitio web

Sitio estático: **HTML + CSS + JavaScript puro**. No necesita instalar nada, ni Node, ni compilar.
Para verlo: doble clic en `index.html`.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Inicio (resumen de servicios, socios y contacto) |
| `servicios.html` | Auditoría, Contabilidad y Asesoramiento Financiero |
| `nosotros.html` | Los tres socios y cómo trabaja el despacho |
| `contacto.html` | Datos, mapa y formulario |
| `styles.css` | Todo el diseño (colores y tipografías al inicio, en `:root`) |
| `script.js` | Menú móvil, animaciones de scroll, parallax y correo del formulario |
| `img/` | 7 fotografías (Unsplash, uso comercial libre) |

## Datos que trae cargados

- Teléfono: **477 123 4567**
- Correo: **ccr_contadores@gmail.com**
- Dirección: **Blvd. Adolfo López Mateos 1802, piso 3, Col. Jardines del Moral, C.P. 37160, León, Gto.** (inventada — cambiar por la real cuando exista)
- Socios: Mario Alberto Campos Rocha (Director General y Auditor), Juan Pablo Chávez Acosta (Consultor Financiero), Marco Antonio Rodríguez Cruz (Consultor Contable)

## Animaciones y parallax

- **Entradas al hacer scroll:** se activan poniendo `anim` + `anim-up`, `anim-left`, `anim-right`
  o `anim-zoom` en cualquier elemento. Para escalonar varios, agrega `style="--d:.1s"`.
- **Bandas oscuras (fondo fijo):** la foto va dentro de `<div class="bg-clip">` y se queda
  quieta mientras la banda se desliza encima. Es puro CSS, sin JavaScript: `clip` recorta la
  imagen fija sin anclarla. No pongas `transform`, `filter` ni `will-change` en `.parallax`
  o la foto dejaría de ser fija. En móvil se desactiva sola (consume batería y salta en iOS).
- **Fotos enmarcadas:** llevan `data-speed="0.18"`. Más alto = se mueve más; el sobrante de
  la imagen (200 px por lado) aguanta hasta `0.2`.
- Todo se apaga solo si el sistema del visitante pide menos movimiento, y si el
  JavaScript falla el contenido se ve igual (nunca queda invisible).

## Iconos

Son SVG escritos directamente en el HTML (no hay Font Awesome ni ninguna librería que cargar).
Todos usan la clase `icon` y toman el color del texto que los rodea, así que para cambiarles
el color basta con cambiar el color del contenedor. El tamaño se ajusta en `styles.css`,
sección "Iconos".

Están en: la cédula del hero, los renglones de servicios, el marco sobre cada foto de
`servicios.html`, los compromisos de `nosotros.html`, los datos de contacto y el pie de página.
Las palomitas de las listas de servicios se generan desde el CSS (`.checklist li::before`).

## Fotografías

Están en `img/` y son de Unsplash (licencia libre, uso comercial sin atribución obligatoria).
Cuando el despacho tenga fotos reales de su oficina y su equipo, se reemplazan con el mismo
nombre de archivo y no hay que tocar el código.

## Cómo cambiar cosas

- **Colores:** `styles.css`, bloque `:root` (`--ink` tinta, `--brass` dorado, `--paper` fondo).
- **Teléfono:** buscar `477 123 4567` y `tel:+524771234567` en los cuatro HTML.
- **Correo:** buscar `ccr_contadores@gmail.com` (también está en `script.js`).
- **Menú, pie de página:** están repetidos en cada HTML; si cambias uno, cambia los cuatro.

## El formulario

No hay servidor, así que al enviar se abre el correo del visitante con el mensaje ya redactado hacia
`ccr_contadores@gmail.com`. Si más adelante quieren que llegue solo, se conecta gratis con Formspree
o Web3Forms cambiando dos líneas.

## Subirlo a internet gratis (sin comprar dominio)

**Opción rápida — Netlify Drop:** entrar a `app.netlify.com/drop`, arrastrar la carpeta completa.
En segundos da una dirección tipo `ccr-consultores.netlify.app`. Gratis y sin cuenta para la primera vez.

**Opción estable — GitHub Pages:** subir la carpeta a un repositorio, entrar a Settings → Pages,
elegir la rama `main`. Queda en `usuario.github.io/ccr-consultores`.

En ambos casos el dominio propio (`ccrconsultores.com.mx`) se puede conectar después sin rehacer nada.

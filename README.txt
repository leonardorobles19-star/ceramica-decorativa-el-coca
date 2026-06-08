================================================================================
  CERÁMICA DECORATIVA — Guía para administrar tu sitio web
================================================================================

Esta guía explica, paso a paso, cómo actualizar tu sitio sin saber programación.
Solo necesitas un editor de texto (Bloc de notas, Notepad++, VS Code, etc.).

--------------------------------------------------------------------------------
1. CÓMO AGREGAR UN NUEVO PRODUCTO
--------------------------------------------------------------------------------

1. Dentro de assets/images/ crea una carpeta nueva con el nombre productoN
   (donde N es el número siguiente al último producto, ejemplo: si el último es
   producto16, crea producto17)

2. Coloca todas las fotos de esa pieza dentro de la carpeta con nombres:
   1.jpg, 2.jpg, 3.jpg...

3. Abre assets/js/products.js

4. Copia el último objeto del array y agrégalo al final (antes del punto y coma
   final)

5. Cambia estos campos:
   - id: número siguiente al último
   - nombre: nombre de la pieza
   - descripcion: descripción corta mencionando la resina
   - categoria: debe ser exactamente una de estas:
     "figura", "personaje", "animal", "llavero", "adorno"
   - tamano: debe ser exactamente uno de estos:
     "pequeño", "mediano", "grande"
   - disponible: true si está disponible, false si está reservada
   - imagenes: lista de rutas, ejemplo:
     ["assets/images/producto17/1.jpg", "assets/images/producto17/2.jpg"]
   - medidas: ejemplo "15cm × 10cm × 8cm"

6. Guarda el archivo. El producto aparece automáticamente en el catálogo.

--------------------------------------------------------------------------------
CÓMO CAMBIAR EL LOGO
--------------------------------------------------------------------------------

1. Prepara tu nuevo logo en formato PNG con fondo transparente o SVG
   Tamaño recomendado: 400x150px o similar formato horizontal

2. Nómbralo logo.png (o logo.svg)

3. Reemplaza el archivo en assets/images/

4. El logo se actualizará automáticamente en todo el sitio

--------------------------------------------------------------------------------
2. CÓMO MARCAR UNA PIEZA COMO RESERVADA
--------------------------------------------------------------------------------

1. Abre: assets/js/products.js

2. Busca el producto por su nombre o por su número de id.

3. Cambia la línea:
      disponible: true
   por:
      disponible: false

4. Guarda el archivo. En el catálogo aparecerá el badge "Reservado".

Para volver a marcarla como disponible, haz lo contrario (false → true).

--------------------------------------------------------------------------------
3. CÓMO CAMBIAR EL NÚMERO DE WHATSAPP
--------------------------------------------------------------------------------

Tu número actual en el sitio es: 593967834687
(formato: código de país + número, sin espacios, sin signo +)

Busca y reemplaza "593967834687" por tu nuevo número en estos archivos:

   - index.html
   - catalogo.html
   - contacto.html
   - assets/js/catalogo.js
   - partials/whatsapp.html  (fragmento de referencia, por si lo usas)

En el editor de texto usa "Buscar en todos los archivos" para no olvidar ninguno.

NOTA: main.js NO contiene el número de WhatsApp.

--------------------------------------------------------------------------------
4. CÓMO CAMBIAR LOS COLORES
--------------------------------------------------------------------------------

1. Abre: assets/css/styles.css

2. Al inicio del archivo verás la sección :root con variables de color.

3. Para cambiar el naranja principal del sitio, modifica:
      --color-primario: #FF8C42;
   por el color que prefieras (ejemplo: #E91E63 para rosa).

4. Guarda el archivo y recarga la página en el navegador.

--------------------------------------------------------------------------------
5. CÓMO CAMBIAR LOS LINKS DE REDES SOCIALES
--------------------------------------------------------------------------------

1. Abre contacto.html y busca los enlaces href="#" junto a Instagram, TikTok
   y Facebook (en la sección "Síguenos en redes").

2. Reemplaza cada # por la dirección completa de tu perfil, por ejemplo:
      https://www.instagram.com/tu_usuario

3. Repite lo mismo en el pie de página (footer) de:
      - index.html
      - catalogo.html
      - contacto.html

--------------------------------------------------------------------------------
6. CÓMO SUBIR EL SITIO A GITHUB PAGES
--------------------------------------------------------------------------------

1. Crea una cuenta gratuita en https://github.com

2. Crea un repositorio nuevo (cualquier nombre, por ejemplo: ceramica-decorativa)

3. Sube TODAS las carpetas y archivos del proyecto:
      - index.html, catalogo.html, contacto.html
      - carpeta assets/ (con css, js, images, videos)
      - README.txt y demás archivos

4. En el repositorio ve a: Settings → Pages

5. En "Branch" elige: main (o master) y carpeta / (root) → Save

6. Espera unos minutos. Tu sitio quedará en:
      https://tunombre.github.io/nombredelrepositorio

   (reemplaza tunombre y nombredelrepositorio con los tuyos reales)

--------------------------------------------------------------------------------
7. CÓMO CONECTAR EL FORMULARIO DE CONTACTO
--------------------------------------------------------------------------------

1. Crea una cuenta gratuita en https://formspree.io

2. Crea un formulario nuevo y copia tu código (ejemplo: xpzgkwqr)

3. Abre contacto.html y busca la palabra: TUCODIGO

4. Reemplázala por tu código. Quedará así:
      action="https://formspree.io/f/xpzgkwqr"

5. En Formspree, configura la redirección después de enviar a:
      contacto.html?enviado=1
   (así se mostrará el mensaje "¡Mensaje enviado! Te contactaremos pronto.")

6. Guarda y prueba enviando un mensaje de prueba.

--------------------------------------------------------------------------------
8. CÓMO AGREGAR EL VIDEO DEL HERO (página de inicio)
--------------------------------------------------------------------------------

1. Graba o exporta tu video con el nombre: hero.mp4

2. Colócalo en la carpeta: assets/videos

3. No hace falta cambiar código: index.html ya está preparado para usarlo.

   Recomendación: video corto, liviano (menos de 10 MB) para que cargue rápido.

================================================================================
  ESTRUCTURA DE CARPETAS DEL PROYECTO
================================================================================

ceramica/
├── index.html          → Página de inicio
├── catalogo.html       → Catálogo de productos
├── contacto.html       → Formulario y datos de contacto
├── README.txt          → Esta guía
├── assets/
│   ├── css/
│   │   ├── styles.css      → Estilos globales y colores
│   │   ├── inicio.css      → Solo página de inicio
│   │   ├── catalogo.css    → Solo catálogo
│   │   └── contacto.css    → Solo contacto
│   ├── js/
│   │   ├── products.js     → Lista de productos (¡edítalo aquí!)
│   │   ├── catalogo.js     → Filtros y modal del catálogo
│   │   └── main.js         → Menú y funciones comunes
│   ├── images/             → Fotos de productos (foto (1).jpg, etc.)
│   └── videos/
│       └── hero.mp4        → Video de la portada
└── partials/             → Fragmentos de referencia (nav, footer, whatsapp)

================================================================================
  ANTES DE PUBLICAR — LISTA DE VERIFICACIÓN
================================================================================

Marca cada punto antes de subir el sitio a internet:

[ ] Los 3 HTML (index, catalogo, contacto) tienen el mismo menú, footer y
    botón flotante de WhatsApp.

[ ] El número 593967834687 está correcto en index.html, catalogo.html,
    contacto.html y assets/js/catalogo.js.

[ ] Los nombres en products.js (ej: "foto (1).jpg") coinciden EXACTAMENTE
    con los archivos en assets/images (incluyendo espacios y paréntesis).

[ ] catalogo.html carga los scripts en este orden:
    products.js → main.js → catalogo.js

[ ] En los 3 HTML, styles.css se carga ANTES del CSS de cada página
    (inicio.css, catalogo.css o contacto.css).

[ ] En contacto.html reemplazaste TUCODIGO por tu código real de Formspree.

[ ] El video hero.mp4 está en assets/videos (si quieres video en la portada).

[ ] Cambiaste tucorreo@email.com por tu correo real en contacto.html.

[ ] Actualizaste los links de redes sociales (no dejes href="#").

================================================================================
  FIN DE LA GUÍA
================================================================================

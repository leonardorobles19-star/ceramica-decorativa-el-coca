/**
 * catalogo.js — Lógica del catálogo de productos
 * Depende de products.js (array global "products")
 */

const RUTA_IMAGENES = 'assets/images/';
const WHATSAPP_BASE = 'https://wa.me/593967834687?text=';

/** Referencias al DOM (se asignan al cargar la página) */
let gridProductos;
let mensajeVacio;
let contadorProductos;
let modalProducto;

/**
 * Construye la ruta completa de una imagen a partir del nombre del archivo.
 */
function rutaImagen(rutaImagenProducto) {
  if (rutaImagenProducto.indexOf('assets/') === 0) {
    return rutaImagenProducto;
  }
  return RUTA_IMAGENES + rutaImagenProducto;
}

/**
 * Genera el HTML string de una tarjeta .tarjeta-producto para un producto.
 * Incluye imagen, nombre, descripción, badge de disponibilidad y botón "Ver detalles".
 */
function renderTarjeta(producto) {
  const badgeClase = producto.disponible ? 'disponible' : 'reservado';
  const badgeTexto = producto.disponible ? '✅ Disponible' : '❌ Reservado';
  return (
    '<article class="tarjeta-producto" role="listitem" data-id="' + producto.id + '">' +
      '<div class="tarjeta-producto-imagen">' +
        '<img src="' + producto.imagenes[0] + '" alt="' + producto.nombre + '" loading="lazy">' +
      '</div>' +
      '<div class="tarjeta-producto-cuerpo">' +
        '<span class="tarjeta-badge ' + badgeClase + '">' + badgeTexto + '</span>' +
        '<h3 class="tarjeta-producto-nombre">' + producto.nombre + '</h3>' +
        '<p class="tarjeta-producto-descripcion">' + producto.descripcion + '</p>' +
        '<button type="button" class="btn-secundario tarjeta-producto-btn" onclick="abrirModal(' + producto.id + ')">Ver detalles</button>' +
      '</div>' +
    '</article>'
  );
}

/**
 * Renderiza el grid con la lista de productos recibida.
 * Actualiza el contador y muestra u oculta el mensaje de lista vacía.
 */
function renderGrid(lista) {
  gridProductos.innerHTML = '';

  if (lista.length === 0) {
    mensajeVacio.hidden = false;
    mensajeVacio.textContent = 'No se encontraron piezas con esos filtros';
    gridProductos.setAttribute('aria-hidden', 'true');
  } else {
    mensajeVacio.hidden = true;
    gridProductos.removeAttribute('aria-hidden');

    lista.forEach(function (producto) {
      gridProductos.insertAdjacentHTML('beforeend', renderTarjeta(producto));
    });
  }

  const totalProductos = typeof products !== 'undefined' ? products.length : lista.length;
  contadorProductos.textContent =
    'Mostrando ' + lista.length + ' de ' + totalProductos + ' piezas';
}

/**
 * Lee buscador y filtros activos, filtra el array products y pasa el resultado a renderGrid.
 */
function filtrarProductos() {
  const buscador = document.getElementById('buscador');
  const terminoBusqueda = buscador ? buscador.value.trim().toLowerCase() : '';

  const categoriaActiva = document.querySelector('.filtro-pills[data-filtro="categoria"] .filtro-pill.activo');
  const tamanoActivo = document.querySelector('.filtro-pills[data-filtro="tamano"] .filtro-pill.activo');
  const disponibilidadActiva = document.querySelector('.filtro-pills[data-filtro="disponibilidad"] .filtro-pill.activo');

  const valorCategoria = categoriaActiva ? categoriaActiva.getAttribute('data-valor') : 'todas';
  const valorTamano = tamanoActivo ? tamanoActivo.getAttribute('data-valor') : 'todos';
  const valorDisponibilidad = disponibilidadActiva ? disponibilidadActiva.getAttribute('data-valor') : 'todas';

  const resultado = products.filter(function (producto) {
    const coincideNombre =
      terminoBusqueda === '' ||
      producto.nombre.toLowerCase().includes(terminoBusqueda);

    const coincideCategoria =
      valorCategoria === 'todas' ||
      producto.categoria === valorCategoria;

    const coincideTamano =
      valorTamano === 'todos' ||
      producto.tamano === valorTamano;

    let coincideDisponibilidad = true;
    if (valorDisponibilidad === 'disponibles') {
      coincideDisponibilidad = producto.disponible === true;
    } else if (valorDisponibilidad === 'reservadas') {
      coincideDisponibilidad = producto.disponible === false;
    }

    return coincideNombre && coincideCategoria && coincideTamano && coincideDisponibilidad;
  });

  renderGrid(resultado);
}

/**
 * Busca un producto por id, rellena el modal y lo muestra.
 * Genera miniaturas si hay más de una imagen y arma el enlace de WhatsApp.
 */
function abrirModal(id) {
  const producto = products.find(function (p) {
    return p.id === id;
  });

  if (!producto) return;

  const imgPrincipal = document.getElementById('modal-img-principal');
  const contenedorMiniaturas = document.getElementById('modal-miniaturas');
  const titulo = document.getElementById('modal-titulo');
  const descripcion = document.getElementById('modal-descripcion');
  const medidas = document.getElementById('modal-medidas');
  const badge = document.getElementById('modal-badge');
  const btnWhatsapp = document.getElementById('modal-btn-whatsapp');

  imgPrincipal.src = producto.imagenes[0];
  imgPrincipal.alt = producto.nombre;

  contenedorMiniaturas.innerHTML = '';

  if (producto.imagenes.length > 1) {
    producto.imagenes.forEach(function (archivo, indice) {
      const botonMiniatura = document.createElement('button');
      botonMiniatura.type = 'button';
      botonMiniatura.className = 'modal-miniatura' + (indice === 0 ? ' activa' : '');
      botonMiniatura.setAttribute('aria-label', 'Ver imagen ' + (indice + 1));
      botonMiniatura.innerHTML = '<img src="' + archivo + '" alt="">';

      botonMiniatura.addEventListener('click', function () {
        imgPrincipal.src = archivo;
        contenedorMiniaturas.querySelectorAll('.modal-miniatura').forEach(function (mini) {
          mini.classList.remove('activa');
        });
        botonMiniatura.classList.add('activa');
      });

      contenedorMiniaturas.appendChild(botonMiniatura);
    });
  }

  titulo.textContent = producto.nombre;
  descripcion.textContent = producto.descripcion;
  medidas.textContent = producto.medidas;

  badge.className = 'tarjeta-badge ' + (producto.disponible ? 'disponible' : 'reservado');
  badge.textContent = producto.disponible ? '✅ Disponible' : '❌ Reservado';

  const mensajeWhatsapp = 'Hola, me interesa reservar: ' + producto.nombre;
  btnWhatsapp.href = WHATSAPP_BASE + encodeURIComponent(mensajeWhatsapp);

  modalProducto.classList.add('activo');
  modalProducto.style.display = 'flex';
  modalProducto.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

/**
 * Oculta el modal y restaura el scroll del body.
 */
function cerrarModal() {
  modalProducto.classList.remove('activo');
  modalProducto.style.display = 'none';
  modalProducto.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

/**
 * Activa los listeners de los botones pill de categoría, tamaño y disponibilidad.
 */
function inicializarFiltros() {
  document.querySelectorAll('.filtro-pills').forEach(function (grupo) {
    const botones = grupo.querySelectorAll('.filtro-pill');

    botones.forEach(function (boton) {
      boton.addEventListener('click', function () {
        botones.forEach(function (b) {
          b.classList.remove('activo');
        });
        boton.classList.add('activo');
        filtrarProductos();
      });
    });
  });
}

/**
 * Escucha cada tecla en el buscador y vuelve a filtrar los productos.
 */
function inicializarBuscador() {
  const buscador = document.getElementById('buscador');

  if (!buscador) return;

  buscador.addEventListener('input', function () {
    filtrarProductos();
  });
}

/**
 * Resetea buscador y filtros al estado inicial y muestra todos los productos.
 */
function limpiarFiltros() {
  const buscador = document.getElementById('buscador');
  if (buscador) buscador.value = '';

  document.querySelectorAll('.filtro-pills').forEach(function (grupo) {
    const botones = grupo.querySelectorAll('.filtro-pill');
    botones.forEach(function (boton) {
      boton.classList.remove('activo');
    });
    botones[0].classList.add('activo');
  });

  renderGrid(products);
}

/**
 * Despliega u oculta el panel de filtros (categoría, tamaño, disponibilidad).
 */
function toggleFiltros() {
  const panel = document.getElementById('panel-filtros');
  const boton = document.getElementById('btn-toggle-filtros');

  if (!panel || !boton) return;

  panel.classList.toggle('abierto');

  if (panel.classList.contains('abierto')) {
    boton.textContent = '⚙️ Ocultar filtros';
    boton.setAttribute('aria-expanded', 'true');
  } else {
    boton.textContent = '⚙️ Filtros';
    boton.setAttribute('aria-expanded', 'false');
  }
}

/**
 * Abre el lightbox con la imagen recibida.
 */
function abrirLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImagen = document.getElementById('lightbox-imagen');

  if (!lightbox || !lightboxImagen) return;

  lightboxImagen.src = src;
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

/**
 * Cierra el lightbox y restaura el scroll del body si el modal también está cerrado.
 */
function cerrarLightbox() {
  const lightbox = document.getElementById('lightbox');
  const modal = document.getElementById('modal-producto');

  if (!lightbox) return;

  lightbox.style.display = 'none';

  // Restaurar scroll solo si el modal también está cerrado
  if (!modal || modal.style.display === 'none' || modal.hasAttribute('hidden')) {
    document.body.style.overflow = '';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (typeof products === 'undefined') return;

  gridProductos = document.getElementById('grid-productos');
  mensajeVacio = document.getElementById('mensaje-vacio');
  contadorProductos = document.getElementById('contador-productos');
  modalProducto = document.getElementById('modal-producto');

  if (!gridProductos || !modalProducto) return;

  inicializarFiltros();
  inicializarBuscador();
  renderGrid(products);

  const botonCerrar = modalProducto.querySelector('.modal-cerrar');
  const overlay = modalProducto.querySelector('.modal-overlay');

  if (botonCerrar) {
    botonCerrar.addEventListener('click', cerrarModal);
  }

  if (overlay) {
    overlay.addEventListener('click', cerrarModal);
  }

  const botonLimpiar = document.getElementById('limpiar-filtros');
  if (botonLimpiar) {
    botonLimpiar.addEventListener('click', limpiarFiltros);
  }

  const botonToggleFiltros = document.getElementById('btn-toggle-filtros');
  if (botonToggleFiltros) {
    botonToggleFiltros.addEventListener('click', toggleFiltros);
  }

  // Event listeners del lightbox
  const imgPrincipal = document.getElementById('modal-img-principal');
  const lightbox = document.getElementById('lightbox');
  const lightboxCerrar = document.getElementById('lightbox-cerrar');
  const lightboxImagen = document.getElementById('lightbox-imagen');

  // Clic en imagen principal del modal abre lightbox
  if (imgPrincipal) {
    imgPrincipal.addEventListener('click', function () {
      abrirLightbox(imgPrincipal.src);
    });
  }

  // Clic en botón cerrar lightbox
  if (lightboxCerrar) {
    lightboxCerrar.addEventListener('click', cerrarLightbox);
  }

  // Clic en fondo del lightbox cierra lightbox (pero no en la imagen)
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        cerrarLightbox();
      }
    });
  }

  // Tecla Escape cierra lightbox o modal
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (lightbox && lightbox.style.display === 'flex') {
        cerrarLightbox();
      } else if (modalProducto && modalProducto.style.display === 'flex') {
        cerrarModal();
      }
    }
  });
});

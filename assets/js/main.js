/**
 * main.js - JavaScript global del sitio Cerámica Decorativa
 */

/**
 * Inicializa el menú hamburguesa.
 * Abre y cierra el panel lateral añadiendo/quitando la clase .activo
 * en el menú, el overlay y opcionalmente el botón.
 */
function initMenuHamburguesa() {
  const botonHamburguesa = document.querySelector('.nav-hamburguesa');
  const menu = document.querySelector('.nav-menu');
  const overlay = document.querySelector('.nav-overlay');

  if (!botonHamburguesa || !menu) return;

  function abrirMenu() {
    menu.classList.add('activo');
    if (overlay) overlay.classList.add('activo');
    botonHamburguesa.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function cerrarMenu() {
    menu.classList.remove('activo');
    if (overlay) overlay.classList.remove('activo');
    botonHamburguesa.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (menu.classList.contains('activo')) {
      cerrarMenu();
    } else {
      abrirMenu();
    }
  }

  botonHamburguesa.addEventListener('click', toggleMenu);

  if (overlay) {
    overlay.addEventListener('click', cerrarMenu);
  }

  // Cerrar al hacer clic en un enlace del menú
  const enlacesMenu = menu.querySelectorAll('a');
  enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener('click', cerrarMenu);
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && menu.classList.contains('activo')) {
      cerrarMenu();
    }
  });
}

/**
 * Smooth scroll para enlaces internos (anclas # en la misma página).
 * Respeta prefers-reduced-motion cuando el usuario lo tiene activado.
 */
function initSmoothScroll() {
  const enlacesInternos = document.querySelectorAll('a[href^="#"]');
  const prefiereReducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  enlacesInternos.forEach(function (enlace) {
    enlace.addEventListener('click', function (evento) {
      const destinoId = enlace.getAttribute('href');

      // Ignorar href="#" vacío o solo #
      if (!destinoId || destinoId === '#') return;

      const destino = document.querySelector(destinoId);
      if (!destino) return;

      evento.preventDefault();

      if (prefiereReducir) {
        destino.scrollIntoView();
      } else {
        destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/**
 * Muestra el mensaje de éxito en contacto.html tras enviar el formulario con Formspree.
 * Configura en Formspree la redirección a: contacto.html?enviado=1
 */
function initMensajeFormularioEnviado() {
  const mensaje = document.getElementById('mensaje-enviado');
  if (!mensaje) return;

  const parametros = new URLSearchParams(window.location.search);
  if (parametros.get('enviado') !== '1') return;

  mensaje.hidden = false;
  mensaje.classList.add('visible');

  const formulario = document.querySelector('.contacto-form');
  if (formulario) formulario.style.display = 'none';
}

/**
 * Punto de entrada: ejecuta todas las funciones al cargar el DOM.
 */
document.addEventListener('DOMContentLoaded', function () {
  initMenuHamburguesa();
  initSmoothScroll();
  initMensajeFormularioEnviado();
});

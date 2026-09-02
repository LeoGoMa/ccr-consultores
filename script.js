/* CCR Consultores Contables — comportamiento del sitio, sin librerías externas.
   El parallax de las bandas oscuras NO vive aquí: es CSS puro (fondo fijo). */

(function () {
  'use strict';

  var menosMovimiento = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ======================================================================
     1. Menú móvil
     ====================================================================== */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var abierto = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      burger.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ======================================================================
     2. Sombra del encabezado al bajar
     ====================================================================== */
  var header = document.querySelector('.site-header');

  if (header) {
    var pendiente = false;

    var marcar = function () {
      pendiente = false;
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };

    var alDesplazar = function () {
      if (!pendiente) {
        pendiente = true;
        window.requestAnimationFrame(marcar);
      }
    };

    marcar();
    window.addEventListener('scroll', alDesplazar, { passive: true });
  }

  /* ======================================================================
     3. Animaciones de entrada (fadeInUp / Left / Right al hacer scroll)
     ====================================================================== */
  var animables = document.querySelectorAll('.anim, .figure');

  if (menosMovimiento || !('IntersectionObserver' in window)) {
    // Sin animación: todo visible de inmediato
    for (var i = 0; i < animables.length; i++) {
      animables[i].classList.add('is-in');
    }
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-in');
          observador.unobserve(entrada.target);
        }
      });
    }, {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.08
    });

    for (var j = 0; j < animables.length; j++) {
      observador.observe(animables[j]);
    }
  }

  /* ======================================================================
     4. Formulario: arma el correo con los datos capturados
     ====================================================================== */
  var form = document.getElementById('form-contacto');
  if (form) {
    var msg = document.getElementById('form-msg');
    var CORREO = 'ccr_contadores@gmail.com';

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var v = function (id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : '';
      };

      var nombre = v('nombre');
      var correo = v('correo');

      if (!nombre || !correo) {
        msg.textContent = 'Falta su nombre o su correo para poder responderle.';
        return;
      }

      var asunto = 'Solicitud de ' + v('servicio') + ' — ' + nombre;
      var cuerpo =
        'Nombre: ' + nombre + '\n' +
        'Empresa: ' + (v('empresa') || 'No especificada') + '\n' +
        'Correo: ' + correo + '\n' +
        'Teléfono: ' + (v('telefono') || 'No especificado') + '\n' +
        'Servicio: ' + v('servicio') + '\n\n' +
        'Mensaje:\n' + (v('mensaje') || '(sin mensaje)');

      msg.textContent = 'Abriendo su correo con el mensaje listo para enviar…';

      window.location.href =
        'mailto:' + CORREO +
        '?subject=' + encodeURIComponent(asunto) +
        '&body=' + encodeURIComponent(cuerpo);
    });
  }
})();

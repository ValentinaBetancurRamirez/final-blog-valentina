(function () {
  var botones = document.querySelectorAll('.ampliar');
  if (!botones.length || typeof HTMLDialogElement === 'undefined') return;

  var visor = document.createElement('dialog');
  visor.className = 'visor';
  visor.setAttribute('aria-label', 'Foto ampliada');

  var imagen = document.createElement('img');
  var cerrar = document.createElement('button');
  cerrar.type = 'button';
  cerrar.className = 'visor-cerrar';
  cerrar.setAttribute('aria-label', 'Cerrar foto');
  cerrar.textContent = '\u00d7';

  visor.appendChild(imagen);
  visor.appendChild(cerrar);
  document.body.appendChild(visor);

  botones.forEach(function (boton) {
    boton.addEventListener('click', function () {
      var foto = boton.querySelector('img');
      imagen.src = foto.currentSrc || foto.src;
      imagen.alt = foto.alt;
      visor.showModal();
    });
  });

  cerrar.addEventListener('click', function () { visor.close(); });

  visor.addEventListener('click', function (evento) {
    if (evento.target === visor || evento.target === imagen) visor.close();
  });
})();

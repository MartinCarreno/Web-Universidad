// Manipulación dinámica del DOM: mostrar mensaje de bienvenida personalizado
function mostrarBienvenida() {
  const nombre = localStorage.getItem('nombreUsuario');
  if (nombre) {
    const bienvenida = document.createElement('div');
    bienvenida.textContent = `¡Bienvenido/a, ${nombre}!`;
    bienvenida.className = 'bienvenida-usuario';
    document.body.insertBefore(bienvenida, document.body.firstChild);
  }
}

// Manejo de eventos: guardar nombre al inscribirse
document.addEventListener('DOMContentLoaded', function() {
  mostrarBienvenida();

  const form = document.querySelector('form[action="procesar-registro.php"]');
  if (form) {
    form.addEventListener('submit', function(e) {
      const nombreInput = document.getElementById('nombre');
      if (nombreInput && nombreInput.value.length >= 3) {
        localStorage.setItem('nombreUsuario', nombreInput.value);
      }
    });
  }

  // Ejemplo de manipulación dinámica: filtrar expositores por rol
  const rolSelect = document.getElementById('rol');
  if (rolSelect) {
    rolSelect.addEventListener('change', function() {
      const expositores = document.querySelectorAll('.exponentes-container article');
      expositores.forEach(function(expositor) {
        if (rolSelect.value === 'expositor') {
          expositor.style.background = '#e0f7fa';
        } else {
          expositor.style.background = '';
        }
      });
    });
  }
});

// Opcional: consumo de datos externos (ejemplo usando fetch para mostrar eventos)
function cargarEventos() {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    .then(response => response.json())
    .then(data => {
      const eventosSection = document.getElementById('ubicacion');
      if (eventosSection) {
        const lista = document.createElement('ul');
        lista.innerHTML = '<h3>Eventos externos de ejemplo:</h3>';
        data.forEach(evento => {
          const item = document.createElement('li');
          item.textContent = evento.title;
          lista.appendChild(item);
        });
        eventosSection.appendChild(lista);
      }
    });
}
cargarEventos();
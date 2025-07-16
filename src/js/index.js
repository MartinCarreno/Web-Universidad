// Scroll suave al botón "↑"
document.addEventListener("DOMContentLoaded", () => {
  const volverBtn = document.querySelector('.btn-volver-header');
  volverBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Validación adicional (preventiva, sin backend)
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const rol = document.getElementById("rol").value;

    if (nombre.length < 3 || !correo.includes("@") || rol === "") {
      alert("Por favor complete todos los campos correctamente.");
      e.preventDefault();
    }
  });
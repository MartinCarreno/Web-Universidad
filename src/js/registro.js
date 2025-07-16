document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector(".registro-asistentes");

  // Crea un campo de búsqueda
  const buscador = document.createElement("input");
  buscador.setAttribute("type", "text");
  buscador.setAttribute("placeholder", "Buscar expositor...");
  buscador.style.margin = "20px";
  contenedor.parentElement.insertBefore(buscador, contenedor);

  buscador.addEventListener("input", () => {
    const valor = buscador.value.toLowerCase();
    const asistentes = document.querySelectorAll(".asistente");

    asistentes.forEach((asistente) => {
      const nombre = asistente.querySelector("h3").textContent.toLowerCase();
      asistente.style.display = nombre.includes(valor) ? "block" : "none";
    });
  });
});

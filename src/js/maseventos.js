document.addEventListener("DOMContentLoaded", () => {
  const eventos = document.querySelectorAll(".evento");

  eventos.forEach((evento) => {
    evento.style.cursor = "pointer";
    evento.addEventListener("click", () => {
      const nombre = evento.querySelector("h3").textContent;
      alert(`Más información sobre: ${nombre}`);
    });
  });
});
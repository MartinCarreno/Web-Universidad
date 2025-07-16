document.addEventListener("DOMContentLoaded", () => {
  const dias = document.querySelectorAll(".actividades article");

  dias.forEach((dia) => {
    const titulo = dia.querySelector("h3");
    titulo.style.cursor = "pointer";

    titulo.addEventListener("click", () => {
      const lista = dia.querySelector("ul");
      lista.style.display = (lista.style.display === "none") ? "block" : "none";
    });
  });
});
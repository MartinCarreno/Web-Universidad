document.addEventListener("DOMContentLoaded", () => {
  const expositores = document.querySelectorAll(".expositor");

  expositores.forEach((expo) => {
    expo.addEventListener("mouseenter", () => {
      expo.style.transform = "scale(1.05)";
      expo.style.transition = "transform 0.3s ease";
    });

    expo.addEventListener("mouseleave", () => {
      expo.style.transform = "scale(1)";
    });
  });
});
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const cerrar = document.getElementById("cerrar");
const imagenes = document.querySelectorAll(".img-mini");

imagenes.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

cerrar.addEventListener("click", () => {
  lightbox.style.display = "none";
});
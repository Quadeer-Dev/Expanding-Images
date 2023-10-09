const images = document.querySelectorAll(".image");

images.forEach((a) => {
  a.addEventListener("click", () => {
    removeActiveClass();
    a.classList.add("active");
  });
});

function removeActiveClass() {
  images.forEach((a) => {
    a.classList.remove("active");
  });
}

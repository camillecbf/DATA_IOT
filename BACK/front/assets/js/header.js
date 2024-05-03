document.addEventListener("DOMContentLoaded", () => {
  let accordions = document.querySelectorAll(".accordeon");
  accordions.forEach(function (item) {
    //lorsqu'on clique sur l'élément
    item.addEventListener("click", function () {
      this.classList.toggle("open");
    });
  });
});

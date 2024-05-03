let li = document.querySelectorAll(".tabli li");
let div = document.querySelectorAll(".content");

//sélectionner tous les li
li.forEach(function (item) {
  //ajouter un evenement click pour chaque élément de la boucle
  item.addEventListener("click", function () {
    //sélectionner tous les li et retirer la class tab-active
    li.forEach(function (li) {
      li.classList.remove("tab-active");
    });

    this.classList.add("tab-active");

    //sélectionner toutes les divs, et retirer la class active à tous les éléments
    div.forEach(function (div) {
      div.classList.remove("active");
    });

    //faire 5 conditions qui vérifient que <li> contient dans ses classes la class tab-nomDeLaxe

    if (this.classList.contains("tab-1")) {
      const divsTab1 = document.querySelectorAll(".fav1");
      divsTab1.forEach((div) => {
        div.classList.add("active");
      });
    } else if (this.classList.contains("tab-2")) {
      const divsTab2 = document.querySelectorAll(".fav2");
      divsTab2.forEach((div) => {
        div.classList.add("active");
      });
    } else if (this.classList.contains("tab-3")) {
      const divsTab3 = document.querySelectorAll(".fav3");
      divsTab3.forEach((div) => {
        div.classList.add("active");
      });
    } else if (this.classList.contains("tab-4")) {
      const divsTab4 = document.querySelectorAll(".fav4");
      divsTab4.forEach((div) => {
        div.classList.add("active");
      });
    } else if (this.classList.contains("tab-5")) {
      const divsTab5 = document.querySelectorAll(".fav5");
      divsTab5.forEach((div) => {
        div.classList.add("active");
      });
    }
  });
});

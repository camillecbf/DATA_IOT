document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const cardSlug = params.get("slug");

  async function fetchCards(slug) {
    const url = `https://hp-api.lainocs.fr/characters/${slug}`;
    const response = await fetch(url);
    const data = await response.json();
    displayCards(data);
  }

  function displayCards(card) {
    const template = document.getElementById("card-details");

    template.style.display = "block"; // Rend la carte visible
    template.slug = ""; // Enlève l'id pour éviter les doublons
    template.querySelector(".card-title").textContent = card.name;
    template.querySelector(".card-description").textContent = card.house;
    template.querySelector(".card-image").src = card.image;
    template.querySelector(
      ".card-eyes"
    ).textContent = `Eye color: ${card.eyes}`;
    template.querySelector(
      ".card-hairs"
    ).textContent = `Hair color: ${card.hairs}`;
    template.querySelector(
      ".card-birthday"
    ).textContent = `Birthday: ${card.birthday}`;
    template.querySelector(".card-blood").textContent = `Blood: ${card.blood}`;
    template.querySelector(".card-role").textContent = `Role: ${card.role}`;
    template.querySelector(
      ".card-actor"
    ).textContent = `Actor/ Actress: ${card.actor}`;

    fetch("http://172.20.10.2:3000", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ house: card.house }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  fetchCards(cardSlug);
});

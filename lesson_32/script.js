document.addEventListener("DOMContentLoaded", function () {
  const pokemonList = document.getElementById("pokemon-list");

  fetch("https://dummyapi.online/api/pokemon", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((pokemon) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
                <img src="${pokemon.image}" alt="${pokemon.name}">
                <strong>${pokemon.name}</strong>
                Тип: ${pokemon.type.join(", ")}
                Висота: ${pokemon.height} м
                Вага: ${pokemon.weight} кг
            `;
        pokemonList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Помилка при завантаженні даних:", error);
    });
});

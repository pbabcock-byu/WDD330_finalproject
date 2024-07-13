import { getParams } from "./utils.mjs";
import { allPokemonByType } from "./pokemonTypes.mjs";

document.addEventListener("DOMContentLoaded", async () => {
  const category = getParams("category");
  if (category) {
    await displayPokemonByType(category);
  }
});

async function displayPokemonByType(type) {
  try {
    const typeName = document.getElementById("pokemonCategory");
    typeName.textContent = type;
    const pokemonList = await allPokemonByType(type);
    const pokemonByTypeContainer = document.getElementById("type-list");
    const pokemonByTypeList = document.createElement("ul");
    pokemonByTypeList.id = "list";

    pokemonList.forEach((pokemon) => {
      const pokemonItem = document.createElement("li");

      // Display image
      if (pokemon.images && pokemon.images.large) {
        const image = document.createElement("img");
        image.src = pokemon.images.small;
        image.alt = pokemon.name;
        pokemonItem.appendChild(image);
      }

      // Display name
      const name = document.createElement("p");
      name.textContent = pokemon.name;
      pokemonItem.appendChild(name);

      pokemonByTypeList.appendChild(pokemonItem);
    });
    pokemonByTypeContainer.appendChild(pokemonByTypeList);
  } catch (error) {
    console.error(`Error displaying Pokémon type ${type}:`, error);
  }
}

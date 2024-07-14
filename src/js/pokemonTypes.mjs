import pokemon from "pokemontcgsdk";
const apiKey = import.meta.env.VITE_API_KEY;
pokemon.configure({
  apiKey,
});

// Fetch Pokemon TCG API types
export async function fetchPokemonTypes() {
  try {
    return await pokemon.type.all();
  } catch (error) {
    console.error("Error fetching Pokémon types:", error);
    throw error;
  }
}

/* Get image for each type to display on HOME page */
async function typeImage(type) {
  try {
    const pokemonImageMap = {
      Colorless: "Arceus",
      Darkness: "Umbreon",
      Dragon: "Charizard",
      Fairy: "Sylveon",
      Fighting: "Machamp",
      Fire: "Arcanine",
      Grass: "Venusaur",
      Lightning: "Pikachu",
      Metal: "Metagross",
      Psychic: "Alakazam",
      Water: "Greninja",
    };

    if (!(type in pokemonImageMap)) {
      throw new Error(`Invalid type: ${type}`);
    }

    const pokemonName = pokemonImageMap[type];

    const pokemonData = await pokemon.card.where({
      q: `name:${pokemonName}`,
    });

    if (pokemonData.data.length === 0) {
      throw new Error(`Pokemon not found: ${pokemonName}`);
    }

    return pokemonData.data[0].images.large;
  } catch (error) {
    console.error(`Error fetching image for type ${type}:`, error);
    throw error;
  }
}

// Create a list of pokemon types with images for the Home page
export async function typesListNLink(types) {
  // Create an unordered list of types
  const typesList = document.createElement("ul");

  /* Get all type images with a promise */
  const imgPromises = types.map(async (type) => {
    const typeImg = await typeImage(type);
    //console.log(type);
    return {
      type,
      img: typeImg,
    };
  });

  const typeImages = await Promise.all(imgPromises);

  for (const { type, img } of typeImages) {
    const typeItem = document.createElement("li");
    // add the class "fade" to each li element
    typeItem.classList.add("pCard");
    // Create a link for each type by passing in the type
    const typeLink = document.createElement("a");
    typeLink.textContent = type;
    typeLink.href = `/type/${type}`;

    // Create image element
    const typeImageElement = document.createElement("img");
    typeImageElement.src = img;
    typeImageElement.alt = `${type} Type`;

    // Append the image to card-types
    typeLink.appendChild(typeImageElement);

    // Append the link to card-types
    typeItem.appendChild(typeLink);

    // Add the type item to card-types
    typesList.appendChild(typeItem).classList.add("card-type");
  }
  return typesList;
}

// Add list on src\pokemonTypes\index.html (nav: Pokémon Types)
export async function displayTypes() {
  try {
    // Show the loading message
    const loadingMessage = document.getElementById("loading-message");
    loadingMessage.style.display = "block";

    const types = await fetchPokemonTypes();
    const typesContainer = document.getElementById("pokemon-types");
    const typesList = await typesListNLink(types);

    // Add a click event listener to each types link
    typesList.querySelectorAll("a").forEach((typeLink) => {
      typeLink.addEventListener("click", (event) => {
        event.preventDefault();
        const selectedType = typeLink.textContent;

        // Go to pokemonByType/index.html and display all associated pokemon of that type
        window.location.href = `/pokemonByType/index.html?category=${selectedType}`;
        console.log(`Selected type: ${selectedType}`);
      });
    });

    // Hide the loading message
    loadingMessage.style.display = "none";

    // Append the types list to the container
    typesContainer.appendChild(typesList);
  } catch (error) {
    console.error("Error displaying Pokémon types:", error);
    // Hide the loading message if an error occurs
    const loadingMessage = document.getElementById("loading-message");
    loadingMessage.style.display = "none";
  }
}

// Function to fetch all Pokémon of a specific type
export async function allPokemonByType(type) {
  try {
    // Use the where method to filter cards by type
    const result = await pokemon.card.where({
      q: `types:${type}`,
    });
    return result.data;
  } catch (error) {
    console.error(`Error fetching Pokémon of type ${type}:`, error);
    throw error;
  }
}


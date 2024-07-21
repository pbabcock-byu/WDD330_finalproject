//TERMINAL: npm install pokemontcgsdk
import pokemon from "pokemontcgsdk";

import { loadHeaderFooter, getLocalStorage } from "./utils.mjs";
import { updateGreeting } from "./auth.mjs";

const apiKey = import.meta.env.VITE_API_KEY;

pokemon.configure({
  apiKey,
});

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeaderFooter();

  // Update greeting with username if stored in local storage
  const storedUsername = localStorage.getItem("userName");
  if (storedUsername) {
    updateGreeting(storedUsername);
  }

  // PB: Superscript for the cart counter in the header
  // need to chage "so-cart" to read in local host
  const cartItems = getLocalStorage("so-cart");
  const cartItemCount = cartItems.length;
  const cartItemCountElement = document.querySelector("#cartItemCount");
  if (cartItemCountElement != null) {
    cartItemCountElement.textContent = cartItemCount;
  }

});


/* Pokeball animation on home page
const pokeball = document.getElementById("Layer_1");

pokeball.addEventListener('animationiteration', () => {
  pokeball.style.transform = 'translateX(0px) translateY(-5px)'; // Reset to left edge with slight bounce
}); */
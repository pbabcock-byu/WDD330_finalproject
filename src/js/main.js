//TERMINAL: npm install pokemontcgsdk
import pokemon from "pokemontcgsdk";

import { loadHeaderFooter, getLocalStorage } from "./utils.mjs";

const apiKey = import.meta.env.VITE_API_KEY;

pokemon.configure({
  apiKey,
});

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeaderFooter();

  // PB: Superscript for the cart counter in the header
  // need to chage "so-cart" to read in local host
  const cartItems = getLocalStorage("so-cart");
  const cartItemCount = cartItems.length;
  const cartItemCountElement = document.querySelector("#cartItemCount");
  if (cartItemCountElement != null) {
    cartItemCountElement.textContent = cartItemCount;
  }
});

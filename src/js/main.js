import { loadHeaderFooter, getLocalStorage } from "./utils.mjs";


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

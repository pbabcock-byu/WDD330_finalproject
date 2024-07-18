import { resolve } from "path";
// eslint-disable-next-line import/namespace
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        type: resolve(__dirname, "src/pokemonByType/index.html"),
        pokemon: resolve(__dirname, "src/pokemonPage/index.html"),
        pokemontypes: resolve(__dirname, "src/pokemonTypes/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        //product: resolve(__dirname, "src/product_pages/index.html"),
        product_listing: resolve(__dirname, "src/product-listing/index.html"),
        //checkout: resolve(__dirname, "src/checkout/index.html"),
        register: resolve(__dirname, "src/register/index.html"),
        login: resolve(__dirname, "src/login/index.html"),
      },
    },
  },
});


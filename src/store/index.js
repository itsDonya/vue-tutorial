import { createStore } from "vuex";

// Modules
import productsModule from "./modules/products";
import cartModule from "./modules/cart";

const store = createStore({
  modules: {
    theProducts: productsModule,
    theCart: cartModule,
  },
});

export default store;

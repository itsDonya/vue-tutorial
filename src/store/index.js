import { createStore } from "vuex";

// Modules
import productsModule from "./modules/products";

const store = createStore({
  modules: {
    products: productsModule,
  },
});

export default store;

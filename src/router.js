import { createRouter, createWebHistory } from "vue-router";

// Components
import TheProducts from "./view/TheProducts.vue";
import TheCart from "./view/TheCart.vue";

// Routers
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/products", component: TheProducts, alias: "/" },
    { path: "/cart", component: TheCart },
  ],
  linkActiveClass: "active-tab",
});

export default router;

<template>
  <header>
    <h1>{{ title }}</h1>
    <div class="navigate-buttons">
      <router-link to="/products">Products</router-link>
      <router-link to="/cart"
        >Cart <span id="cart-counter">12</span></router-link
      >
    </div>
    <button id="login">Login</button>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

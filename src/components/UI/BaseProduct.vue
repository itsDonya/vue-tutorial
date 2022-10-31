<template>
  <div class="product">
    <img :src="image" :alt="title" class="product-img" />
    <div class="product-details">
      <h4 class="product-title">{{ title }}</h4>
      <span class="product-price">${{ price }}</span>
      <p class="product-description">{{ description }}</p>
      <button class="product-button" @click="addedToCart(id)">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    description: String,
    price: Number,
    image: String,
  },
  methods: {
    addedToCart(proId) {
      this.$emit("saveProduct", proId);
    },
  },
};
</script>

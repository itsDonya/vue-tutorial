<template>
  <div class="cart-item">
    <img :src="image" class="item-image" alt="Item Image" />
    <h4 class="item-title">{{ title }}</h4>
    <div>
      <p class="item-price">
        Price per item: <span>${{ price }}</span>
      </p>
      <p class="item-qty">
        Quantity: <span>{{ qty }}</span>
      </p>
    </div>
    <p class="item-total">Total: ${{ total }}</p>
    <button class="item-button">Remove</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    price: Number,
    qty: Number,
    total: Number,
    image: String,
  },
};
</script>

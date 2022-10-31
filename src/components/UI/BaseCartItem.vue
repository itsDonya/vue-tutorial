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
    <p class="item-total">
      Total: <span>${{ total }}</span>
    </p>
    <button class="item-button" @click="removeItem(index)">Remove</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    index: Number,
    id: String,
    title: String,
    price: Number,
    qty: Number,
    total: Number,
    image: String,
  },
  methods: {
    removeItem(index) {
      this.$emit("remove-item", index);
    },
    ...mapMutations("theCart", ["removeItem"]),
  },
};
</script>

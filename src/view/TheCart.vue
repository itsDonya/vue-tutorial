<template>
  <section class="cart-items">
    <h2>Your Cart</h2>
    <hr width="72%" />
    <p id="total-amount">
      Total Amount: <span>${{ cartTotalAmount }}</span>
    </p>
    <BaseCartItem
      v-for="(item, i) in cartItems"
      :key="i"
      v-bind="item"
      :index="i"
    />
  </section>
</template>

<script>
import BaseCartItem from "../components/UI/BaseCartItem";
import { mapGetters } from "vuex";
export default {
  components: {
    BaseCartItem,
  },
  computed: {
    ...mapGetters("theCart", ["cartTotalAmount", "cartItems"]),
  },
};
</script>

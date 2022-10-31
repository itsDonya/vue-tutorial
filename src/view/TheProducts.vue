<template>
  <section class="products">
    <BaseProduct
      v-for="(product, i) in products"
      :key="i"
      v-bind="product"
      @save-product="saveToCart(product)"
    />
  </section>
</template>

<script>
import BaseProduct from "@/components/UI/BaseProduct.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    BaseProduct,
  },
  computed: {
    ...mapGetters("theProducts", ["products"]),
  },
  methods: {
    ...mapActions("theCart", ["saveToCart"]),
  },
};
</script>

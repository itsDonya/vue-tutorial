<template>
  <section class="products">
    <BaseProduct v-for="(product, i) in products" :key="i" v-bind="product" />
  </section>
</template>

<script>
import BaseProduct from "@/components/UI/BaseProduct.vue";
export default {
  components: {
    BaseProduct,
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>

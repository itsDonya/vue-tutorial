<template>
  <TheHeader title="VueShop" />
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

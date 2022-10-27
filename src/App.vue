<template>
  <MyContainer title="VueX">
    <TheCounter />
    <button @click="upOne">Up 1</button>
  </MyContainer>
</template>

<script>
import MyContainer from "./components/MyContainer.vue";
import TheCounter from "./components/TheCounter.vue";
export default {
  components: {
    MyContainer,
    TheCounter,
  },
  methods: {
    upOne() {
      this.$store.state.counter++;
    },
  },
};
</script>

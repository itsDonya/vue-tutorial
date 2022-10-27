<template>
  <MyContainer title="VueX">
    <TheCounter />
    <button @click="Increase">Add 4</button>
    <ChangeCounter />
  </MyContainer>
</template>

<script>
import MyContainer from "./components/MyContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
export default {
  components: {
    MyContainer,
    TheCounter,
    ChangeCounter,
  },
  methods: {
    Increase() {
      this.$store.commit("addFour");
    },
  },
};
</script>

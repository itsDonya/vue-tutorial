<template>
  <MyContainer title="VueX">
    <TheCounter />
    <DubbledCounter />
    <NormalizedCounter />
    <button @click="decrease">Reduce 2</button>
    <button @click="addTwo">Add 2</button>
    <button @click="increase">Add 4</button>
    <ChangeCounter />
  </MyContainer>
</template>

<script>
import MyContainer from "./components/MyContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import DubbledCounter from "./components/DubbledCounter.vue";
import NormalizedCounter from "./components/NormalizedCounter.vue";
export default {
  components: {
    MyContainer,
    TheCounter,
    ChangeCounter,
    DubbledCounter,
    NormalizedCounter,
  },
  methods: {
    increase() {
      this.$store.commit("addFour");
    },
    addTwo() {
      this.$store.dispatch("addTwo");
    },
    decrease() {
      this.$store.commit("reduceTwo");
    },
  },
};
</script>

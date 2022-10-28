<template>
  <my-container title="Auth">
    <TheAuthorization />
  </my-container>
  <my-container title="VueX" v-if="isAuth">
    <TheCounter />
    <DubbledCounter />
    <NormalizedCounter />
    <button @click="decrease">Reduce 2</button>
    <button @click="addTwo">Add 2</button>
    <button @click="increase">Add 4</button>
    <ChangeCounter />
  </my-container>
  <my-container title="Counter" v-if="isAuth">
    <RequestHandling />
  </my-container>
</template>

<script>
import MyContainer from "./components/MyContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import DubbledCounter from "./components/DubbledCounter.vue";
import NormalizedCounter from "./components/NormalizedCounter.vue";
import RequestHandling from "./components/RequestHandling.vue";
import TheAuthorization from "./components/TheAuthorization.vue";
export default {
  components: {
    MyContainer,
    TheCounter,
    ChangeCounter,
    DubbledCounter,
    NormalizedCounter,
    RequestHandling,
    TheAuthorization,
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuthorized;
    },
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

<style scoped>
div:first-child {
  height: 120px;
}
</style>

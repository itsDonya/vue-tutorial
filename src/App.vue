<template>
  <MyContainer title="VueX">
    <h3>{{ $store.state.counter }}</h3>
    <button @click="upOne">Up 1</button>
  </MyContainer>
</template>

<script>
import MyContainer from "./components/MyContainer.vue";
export default {
  components: {
    MyContainer,
  },
  methods: {
    upOne() {
      this.$store.state.counter++;
    },
  },
};
</script>

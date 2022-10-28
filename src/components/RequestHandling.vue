<template>
  <h2>{{ counter }}</h2>
  <button @click="addOne">Add 1</button>
  <button @click="sendCounterValue">Send Counter Value</button>
  <button @click="getCounterValue">Get Counter Value</button>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.newCounter;
    },
  },
  methods: {
    addOne() {
      this.$store.commit("addOne");
    },
    sendCounterValue() {
      this.$store.dispatch("sendCounterValue", 500);
    },
    getCounterValue() {
      this.$store.dispatch("getCounterValue", 500);
    },
  },
};
</script>

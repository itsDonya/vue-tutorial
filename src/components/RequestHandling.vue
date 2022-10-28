<template>
  <h2>{{ counter }}</h2>
  <button @click="addOne">Add 1</button>
  <button @click="sendCounterValue(500)">Send Counter Value</button>
  <button @click="getCounterValue(500)">Get Counter Value</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    counter() {
      return this.$store.state.myNewCounter.newCounter;
    },
  },
  methods: {
    addOne() {
      this.$store.commit("addOne");
    },
    ...mapActions(["sendCounterValue", "getCounterValue"]),
  },
};
</script>

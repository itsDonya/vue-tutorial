<template>
  <button @click="addTen">Add 10</button>
</template>

<script>
export default {
  methods: {
    addTen() {
      // First way
      // this.$store.commit("increaseOptional", 10);

      // Second way
      // this.$store.commit("increaseOptional", { value: 10 });

      // Third way
      this.$store.commit({
        type: "increaseOptional",
        value: 10,
      });
    },
  },
};
</script>

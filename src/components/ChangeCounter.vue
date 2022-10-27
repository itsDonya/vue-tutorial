<template>
  <button @click="addFour">Add 4</button>
</template>

<script>
export default {
  methods: {
    addFour() {
      this.$store.commit("addFour");
    },
  },
};
</script>

<template>
  <h4>{{ normalizedCounter }}</h4>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("myCounter", ["normalizedCounter"]),
  },
};
</script>

<style scoped>
h4 {
  color: red;
}
</style>

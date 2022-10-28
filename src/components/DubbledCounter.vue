<template>
  <h4>{{ dubbledCounter }}</h4>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["dubbledCounter"]),
  },
};
</script>

<style scoped>
h4 {
  color: rebeccapurple;
}
</style>

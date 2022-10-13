<template>
  <h5 class="add-contact-title" :style="{ color: color }">Add New Contact</h5>
</template>

<script>
export default {
  props: ["colorHex"],
  data() {
    return {
      color: this.colorHex,
    };
  },
};
</script>

<style scoped>
h5 {
  font-size: 18px;
  text-align: center;
}
</style>

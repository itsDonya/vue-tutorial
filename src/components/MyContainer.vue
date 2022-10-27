<template>
  <div>
    <h1>{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
div {
  width: 600px;
  height: 260px;
  margin: 4rem auto;
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding: 1.4rem;
  box-shadow: 0px 0px 12px 12px #eeeeee;
  border-radius: 18px;
}
</style>

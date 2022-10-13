<template>
  <div id="contacts-container" v-if="$slots.myContact">
    <slot name="myContact"></slot>
  </div>
</template>

<script></script>

<style scoped>
p {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 24px;
  color: rebeccapurple;
  text-align: center;
}
</style>

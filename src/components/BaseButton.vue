<template>
  <component
    :is="href ? 'a' : to ? 'nuxt-link' : 'button'"
    :href="href"
    :to="to"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>
* {
  font-family: sans-serif;
  font-size: 1.2rem;
}
button {
  background-color: white;
  border: 4px solid pink;
  color: pink;
  padding: 1.2rem 1.8rem;
  border-radius: 12px;
}
button:hover {
  background-color: #ffc0cb49;
  cursor: pointer;
}
a {
  color: yellowgreen;
  text-decoration: underline 3px green;
}
nuxt-link {
  display: inline-block;
  color: white;
  background-color: red;
  border-radius: 12px;
  padding: 1.2rem 1.8rem;
  cursor: pointer;
}
</style>

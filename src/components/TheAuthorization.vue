<template>
  <button @click="login" v-if="!isAuth">Log in</button>
  <button @click="logout" v-else>Log out</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("authorization", ["login", "logout"]),
  },
  computed: {
    isAuth() {
      return this.$store.getters["authorization/isAuthorized"];
    },
  },
};
</script>

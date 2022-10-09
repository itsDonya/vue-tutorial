<template>
  <div>
    <h4 class="name">{{ friend.name }}</h4>
    <button class="details-btn" @click="isDetailsVisible = !isDetailsVisible">
      {{ isDetailsVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="isDetailsVisible">
      <li class="phone">{{ friend.phone }}</li>
      <li class="email">{{ friend.email }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDetailsVisible: false,
      friend: {
        name: "Arezoo",
        phone: "09112345678",
        email: "arezoo@gmail.com",
      },
    };
  },
};
</script>

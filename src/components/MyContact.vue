<template>
  <div class="contact">
    <h4 class="name">{{ friend.name }}</h4>
    <button class="details-btn" @click="isDetailsVisible = !isDetailsVisible">
      {{ isDetailsVisible ? "Hide" : "Show" }} Details
    </button>
    <ul class="details" v-if="isDetailsVisible">
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

<style>
.contact {
  width: 310px;
  height: auto;
  padding: 1.2rem;
  background-color: #eeeeee80;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 1.2rem auto;
}
.name {
  font-size: 22px;
}
.details-btn {
  color: #eeeeee;
  background-color: #252525;
  border-radius: 4px;
  padding: 0.4rem 0.6rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.details-btn:hover {
  color: #252525;
  background-color: #cccccc;
}
.details {
  width: 80%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 0;
}
.phone,
.email {
  width: 100%;
  color: #252525;
  background-color: #cccccc;
  text-align: center;
  border-radius: 6px;
  padding: 0.6rem 0;
  margin: 0;
}
</style>

<template>
  <div class="contact">
    <h4 class="name">{{ name }} {{ isFavorite == "1" ? "(Favorite)" : "" }}</h4>
    <button class="btn" @click="toggleDetails">
      {{ isDetailsVisible ? "Hide" : "Show" }} Details
    </button>
    <button class="btn" @click="toggleFavorite">Favorite</button>
    <ul class="details" v-if="isDetailsVisible">
      <li class="phone">{{ phoneNumber }}</li>
      <li class="email">{{ emailAddress }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["name", "phoneNumber", "emailAddress", "favorite"],
  data() {
    return {
      isDetailsVisible: false,
      isFavorite: this.favorite,
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
    toggleFavorite() {
      if (this.isFavorite == "1") {
        this.isFavorite = "0";
      } else {
        this.isFavorite = "1";
      }
    },
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
.btn {
  color: #eeeeee;
  background-color: #252525;
  border-radius: 4px;
  padding: 0.4rem 0.6rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin: 0.2rem auto;
}
.btn:hover {
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

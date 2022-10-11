<template>
  <div class="contact">
    <h4 class="name">
      {{ name }}
      <span class="favorite">{{ favorite ? "(Favorite)" : "" }}</span>
    </h4>
    <button class="btn" @click="toggleDetails">
      {{ details ? "Hide" : "Show" }} Details
    </button>
    <button
      class="btn"
      id="favorite-btn"
      :style="{
        textDecoration: favorite ? '1px line-through red' : 'none',
      }"
      @click="toggleFavorite"
    >
      Favorite
    </button>
    <ul class="details" v-if="details">
      <li class="phone">{{ phoneNumber }}</li>
      <li class="email">{{ emailAddress }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    emailAddress: String,
    phoneNumber: String,
    favorite: Boolean,
    details: Boolean,
  },
  methods: {
    toggleDetails() {
      this.$emit("toggle-details", this.id);
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
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
.favorite {
  color: rebeccapurple;
  font-size: 14px;
}
.btn {
  color: #eeeeee;
  background-color: #252525;
  border-radius: 4px;
  padding: 0.5rem 0.7rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin: 0.2rem auto;
  border: none;
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
.notFavorite {
  text-decoration: 2px line-through red !important;
}
</style>

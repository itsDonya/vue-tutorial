<template>
  <h1 class="title">My Contacts</h1>
  <div class="contacts">
    <my-contact
      v-for="friend in friends"
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :phone-number="friend.phone"
      :email-address="friend.email"
      :favorite="friend.favorite"
      @toggle-favorite="toggleFavorite"
      :details="friend.detailsVisible"
      @toggle-details="toggleDetails"
    ></my-contact>
  </div>
</template>
<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "1",
          name: "Arezoo Delrooz",
          phone: "09123456789",
          email: "arezoo@gmail.com",
          favorite: true,
          detailsVisible: false,
        },
        {
          id: "2",
          name: "Nima Azizi",
          phone: "09917654321",
          email: "nima@gmail.com",
          favorite: false,
          detailsVisible: false,
        },
        {
          id: "3",
          name: "Donya Davoodi",
          phone: "09021029245",
          email: "donya@gmail.com",
          favorite: true,
          detailsVisible: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.favorite = !identifiedFriend.favorite;
    },
    toggleDetails(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.detailsVisible = !identifiedFriend.detailsVisible;
    },
  },
};
</script>

<style>
.title {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: center;
}
</style>

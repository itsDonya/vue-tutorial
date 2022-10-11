<template>
  <h1 class="title">My Contacts</h1>
  <div class="contacts">
    <add-contact @add-contact="addContact"></add-contact>
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
      @delete-contact="deleteContact"
    ></my-contact>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
      friends: [],
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
    addContact(newContact) {
      const { contactName, contactPhone, contactEmail, contactFavorite } =
        newContact;
      this.friends.unshift({
        id: String(this.counter),
        name: contactName,
        phone: String(contactPhone),
        email: contactEmail,
        favorite: contactFavorite,
        detailsVisible: false,
      });
      this.counter++;
    },
    deleteContact(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      this.friends.splice(identifiedFriend, 1);
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

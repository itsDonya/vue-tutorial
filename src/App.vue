<template>
  <h1 class="title">My Contacts</h1>
  <div class="contacts">
    <AddContact @add-contact="addContact">
      <FormTitle />
    </AddContact>
    <ContactsContainer>
      <template v-slot:myContact>
        <MyContact
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
        />
      </template>
    </ContactsContainer>
  </div>
</template>
<script>
import MyContact from "./components/MyContact.vue";
import ContactsContainer from "./components/ContactsContainer.vue";
import AddContact from "./components/AddContact.vue";
import FormTitle from "./components/FormTitle.vue";

export default {
  components: {
    MyContact,
    ContactsContainer,
    AddContact,
    FormTitle,
  },
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

<style scoped>
.title {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: center;
}
</style>

<template>
  <form class="add-contact">
    <slot></slot>
    <div>
      <label for="contact-name">Full name</label>
      <input
        id="contact-name"
        type="text"
        v-model="newContactInfo.contactName"
      />
    </div>
    <div>
      <label for="contact-phone">Phone number</label>
      <input
        id="contact-phone"
        type="number"
        v-model="newContactInfo.contactPhone"
      />
    </div>
    <div>
      <label for="contact-email">Email address</label>
      <input
        id="contact-email"
        type="email"
        v-model="newContactInfo.contactEmail"
      />
    </div>
    <div>
      <input
        id="contact-favorite"
        type="checkbox"
        v-model="newContactInfo.contactFavorite"
      />
      <label for="contact-favorite">This is my favorite contact</label>
    </div>
    <button @click.prevent="addContact" type="submit">Add Contact</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newContactInfo: {
        contactName: "",
        contactPhone: "",
        contactEmail: "",
        contactFavorite: false,
      },
    };
  },
  methods: {
    addContact() {
      if (
        this.newContactInfo.contactName &&
        this.newContactInfo.contactPhone &&
        this.newContactInfo.contactEmail
      ) {
        this.$emit("add-contact", this.newContactInfo);
        this.newContactInfo.contactName = "";
        this.newContactInfo.contactPhone = "";
        this.newContactInfo.contactEmail = "";
        this.newContactInfo.contactFavorite = false;
      }
    },
  },
};
</script>

<style scoped>
.add-contact {
  width: 310px;
  height: 360px;
  padding: 1.2rem;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin: auto;
  box-shadow: inset -4px -4px 12px #cccccc90, inset 4px 4px 12px #ffffff;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.add-contact div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 8px auto;
}
.add-contact div label {
  color: #252525;
  margin-bottom: 2px;
}
.add-contact div input {
  width: 280px;
  height: 24px;
  color: #252525;
  background-color: #ffffff;
  padding: 0.2rem 0.4rem;
  border: 1px solid #252525;
  border-radius: 4px;
}
#contact-favorite {
  width: auto;
  box-shadow: none;
  appearance: unset;
  width: 13px;
  height: 13px;
  margin-right: 4px;
  cursor: pointer;
}
#contact-favorite:checked {
  background-color: #252525;
}
.add-contact div input:focus {
  outline: none;
}
.add-contact div:nth-child(5) {
  flex-direction: row;
  justify-content: start;
  align-items: center;
}
.add-contact button {
  color: white;
  background-color: #252525;
  border: none;
  width: 290px;
  height: 34px;
  border-radius: 6px;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  margin-top: 1rem;
}
.add-contact button:hover {
  filter: brightness(80%);
}
</style>

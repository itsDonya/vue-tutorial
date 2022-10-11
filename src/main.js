import { createApp } from "vue";
import App from "./App.vue";

// Components
import MyContact from "./components/MyContact.vue";
import AddContact from "./components/AddContact.vue";

const contacts = createApp(App);

contacts.component("my-contact", MyContact);
contacts.component("add-contact", AddContact);

contacts.mount("#app");

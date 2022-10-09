import { createApp } from "vue";
import App from "./App.vue";

// Components
import MyContact from "./components/MyContact.vue";

const contacts = createApp(App);
contacts.component("my-contact", MyContact);
contacts.mount("#app");

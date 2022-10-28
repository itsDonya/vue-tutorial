import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

const app = createApp(App);

app.config.globalProperties.$store = store;
app.use(store);

app.mount("#app");

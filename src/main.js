import { createApp } from "vue";
import App from "./App.vue";

// Global mixins
import logger from "./logger";

const app = createApp(App);

app.mixin(logger);

app.mount("#app");

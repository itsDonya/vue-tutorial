import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    addFour(state) {
      state.counter += 4;
    },
  },
});

const app = createApp(App);

app.config.globalProperties.$store = store;
app.use(store);

app.mount("#app");

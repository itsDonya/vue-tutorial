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
    addTwo(state) {
      state.counter += 2;
    },
    addFour(state) {
      state.counter += 4;
    },
    reduceTwo(state) {
      state.counter -= 2;
    },
    increaseOptional(state, payload) {
      // First way
      // state.counter = state.counter + payload;

      // Second way
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    addTwo(context) {
      setTimeout(function () {
        context.commit("addTwo");
      }, 3000);
    },
  },
  getters: {
    dubbledCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(state, getters) {
      const dubbledCounter = getters.dubbledCounter;
      // If counter is less than 0, it keeps showing 0
      if (state.counter < 0) {
        return 0;
      }
      // If counter is more than 0, it returns the counter * 2
      return dubbledCounter;
    },
  },
});

const app = createApp(App);

app.config.globalProperties.$store = store;
app.use(store);

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      counter: 0,
      newCounter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    addOne(state) {
      state.newCounter++;
    },
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
    sendCounterValue(state) {
      fetch(
        "https://vue-demo-6d620-default-rtdb.firebaseio.com/counters.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            counter: state.newCounter,
          }),
        }
      )
        .then(() => console.log("The value sent"))
        .catch(() => {
          console.log("Can't send the value");
        });
    },
    getCounterValue(state) {
      fetch("https://vue-demo-6d620-default-rtdb.firebaseio.com/counters.json")
        .then((res) => res.json())
        .then((data) => {
          let counters = [];
          for (let id in data) {
            counters.push(data[id].counter);
          }
          // Get the last (newest) counter value
          const lastCounterValue = counters[counters.length - 1];
          state.newCounter = lastCounterValue;
        })
        .catch(() => {
          console.log("Can't get the requested value");
        });
    },
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    addTwo(context) {
      setTimeout(function () {
        context.commit("addTwo");
      }, 3000);
    },
    sendCounterValue(context, delay) {
      setTimeout(() => {
        context.commit("sendCounterValue");
      }, delay);
    },
    getCounterValue(context, delay) {
      setTimeout(() => {
        context.commit("getCounterValue");
      }, delay);
    },
    login(context) {
      context.commit("setAuth", { isAuth: true });
    },
    logout(context) {
      context.commit("setAuth", { isAuth: false });
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
    isAuthorized(state) {
      return state.isLoggedIn;
    },
  },
});

const app = createApp(App);

app.config.globalProperties.$store = store;
app.use(store);

app.mount("#app");

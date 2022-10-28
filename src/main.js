import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";

const counterModule = {
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
};

const newCounterModule = {
  state() {
    return {
      newCounter: 0,
    };
  },
  mutations: {
    addOne(state) {
      state.newCounter++;
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
  },
  actions: {
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
  },
};

const authorizationModule = {
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit("setAuth", { isAuth: true });
    },
    logout(context) {
      context.commit("setAuth", { isAuth: false });
    },
  },
  getters: {
    isAuthorized(state) {
      return state.isLoggedIn;
    },
  },
};

const store = createStore({
  modules: {
    myCounter: counterModule,
    myNewCounter: newCounterModule,
    authorization: authorizationModule,
  },
});

const app = createApp(App);

app.config.globalProperties.$store = store;
app.use(store);

app.mount("#app");

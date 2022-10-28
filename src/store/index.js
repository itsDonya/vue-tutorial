import { createStore } from "vuex";

// Modules
import counterModule from "./counter";
import newCounterModule from "./newCounter";
import authorizationModule from "./authorization";

const store = createStore({
  modules: {
    myCounter: counterModule,
    myNewCounter: newCounterModule,
    authorization: authorizationModule,
  },
});

export default store;

import { createStore } from "vuex";

// Modules
import counterModule from "./modules/counter";
import newCounterModule from "./modules/newCounter";
import authorizationModule from "./modules/authorization";

const store = createStore({
  modules: {
    myCounter: counterModule,
    myNewCounter: newCounterModule,
    authorization: authorizationModule,
  },
});

export default store;

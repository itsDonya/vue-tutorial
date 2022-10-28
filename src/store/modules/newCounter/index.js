import newCounterMutations from "./mutations";
import newCounterActions from "./actions";

const newCounterModule = {
  namespaced: true,
  state() {
    return {
      newCounter: 0,
    };
  },
  mutations: newCounterMutations,
  actions: newCounterActions,
};

export default newCounterModule;

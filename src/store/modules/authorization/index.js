import authorizationMutations from "./mutations";
import authorizationActions from "./actions";
import authorizationGetters from "./getters";

const authorizationModule = {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: authorizationMutations,
  actions: authorizationActions,
  getters: authorizationGetters,
};
export default authorizationModule;

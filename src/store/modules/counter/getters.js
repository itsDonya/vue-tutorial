export default {
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
};

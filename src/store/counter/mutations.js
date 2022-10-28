export default {
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
};

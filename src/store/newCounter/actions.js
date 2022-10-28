export default {
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
};

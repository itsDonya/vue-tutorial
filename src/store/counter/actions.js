export default {
  addTwo(context) {
    setTimeout(function () {
      context.commit("addTwo");
    }, 3000);
  },
};

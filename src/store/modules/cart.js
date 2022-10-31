export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  mutations: {
    saveNewItem(state, product) {
      state.items.push({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        total: product.price,
        qty: 1,
      });
      state.qty++;
      state.total += product.price;
    },
    saveExistingItem(state, product) {
      const existedItem = state.items.find((item) => item.id === product.id);
      existedItem.qty++;
      existedItem.total = existedItem.qty * product.price;
      state.qty++;
      state.total += product.price;
    },
    removeItem(state, index) {
      state.items.splice(index, 1);
    },
  },
  actions: {
    saveToCart(context, product) {
      const itemIndex = context.state.items.findIndex(
        (item) => item.id === product.id
      );
      if (itemIndex >= 0) {
        context.commit("saveExistingItem", product);
      } else {
        context.commit("saveNewItem", product);
      }
    },
  },
  getters: {
    quantity(state) {
      return state.qty;
    },
    cartItems(state) {
      return state.items;
    },
    cartTotalAmount(state) {
      return state.total;
    },
  },
};

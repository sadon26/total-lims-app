export default {
  setProductName(state, payload) {
    state.productName = payload;
  },
  successAddingProduct(state, payload) {
    state.successAddingProduct = payload;
  },
  loadingProduct(state, payload) {
    state.loadingProduct = payload;
  },
  setProductCategory(state, payload) {
    state.productCategory = payload;
  },
  loadingProductCategory(state, payload) {
    state.loadingProductCategory = payload;
  },
  testsIds(state, payload) {
    state.testsIds = payload;
  },
  productsInCategory(state, payload) {
    state.productsInCategory = payload;
  },
};

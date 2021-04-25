import axios from 'axios';

export default {
  createProduct({ commit, getters, dispatch }, products) {
    const { adminDetails, productCategory } = getters;
    const token = adminDetails.token;
    const config = { headers: { token } };
    commit('loadingProduct', true);
    axios
      .post('/admin/products/new-product', products, config)
      .then((res) => {
        commit('successAddingProduct', true);
        commit('loadingProduct', false);

        dispatch('getProductsInCategory', productCategory.id)
          .then(({ data }) => {
            const { data: products } = data;
            commit('productsInCategory', products);
          })
          .catch((err) => err);
      })
      .catch((err) => {
        commit('loadingProduct', false);
      });
  },
  getAllProducts({ commit, getters }) {
    const token = getters.adminDetails.token;
    const config = { headers: { token } };
    axios
      .get('/admin/products/blend', config)
      .then((res) => {
        commit('loadingProduct', false);
      })
      .catch((err) => {
        commit('loadingProduct', false);
      });
  },
  async getTestIds({ commit, getters }, id) {
    const token = getters.adminDetails.token;
    const config = { headers: { token } };
    try {
      let response = await axios.get(`/admin/products/test/${id}`, config);
      const { data } = response.data;
      commit('testsIds', data);
    } catch (err) {
      return err;
    }
  },
  async setProductName({ commit, dispatch }, payload) {
    commit('loadingProductCategory', true);
    try {
      let categories = await dispatch('getCategories');
      const { data } = categories.data;
      const productCategory = data.find((el) => el.product_type === payload);

      // Get all tests
      dispatch('getTestIds', productCategory.id);

      try {
        // Get all products in the specific category
        let productsInCategory = dispatch(
          'getProductsInCategory',
          productCategory.id
        );
        const { data: products } = productsInCategory.data;
        commit('productsInCategory', products);
      } catch (error) {
        return error;
      }

      commit('setProductCategory', productCategory);
    } catch (error) {
      return error;
    } finally {
      commit('loadingProductCategory', false);
    }
  },
  async getCategories({ getters }) {
    const token = getters.adminDetails.token;
    const config = { headers: { token } };
    try {
      const response = await axios.get(`/admin/products/categories`, config);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async getProductsInCategory({ getters }, id) {
    const token = getters.adminDetails.token;
    const config = { headers: { token } };
    try {
      const response = await axios.get(`/admin/products/all/${id}`, config);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async deleteProductInCategory({ getters }, id) {
    const token = getters.adminDetails.token;
    const config = { headers: { token } };

    try {
      const response = await axios.delete(`/admin/products/${id}`, config);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async updateProduct({ getters }, payload) {
    const token = getters.adminDetails.token;
    const config = { headers: { token } };
    const { id, specification: productSpecification } = payload;

    try {
      const response = await axios.put(
        `/admin/products/edit/${id}`,
        {
          productSpecification,
        },
        config
      );
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

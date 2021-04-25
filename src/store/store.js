import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import auth from './modules/auth/index';
import staffs from './modules/staffs/index';
import popup from './modules/popup/index';
import product from './modules/product/index';

const vuexPersistence = new VuexPersistence({
  storage: localStorage,
});

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    staffs,
    popup,
    product,
  },
  plugins: [vuexPersistence.plugin],
});

import axios from 'axios';
import Vue from 'vue';
//NProgress Loader for HTTP requests
axios.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

axios.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    NProgress.done();
    return error;
  }
);
// axios baseURL
axios.defaults.baseURL = 'https://lims-total.herokuapp.com/api/v1';
Vue.prototype.axios = axios;

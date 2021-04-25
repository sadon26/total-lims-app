import axios from 'axios';

export default {
  createStaff({ commit, getters }, payload) {
    const { token } = getters.adminDetails;
    const config = { headers: { token } };
    commit('addingUser', true);
    axios
      .post('/admin/auth/signup', payload, config)
      .then((res) => {
        commit('addingUser', false);
        commit('dynamicMsg', res.data.message);
        setTimeout(() => commit('dynamicMsg', ''), 4000);
      })
      .catch((err) => {
        commit('addingUser', false);
        commit('dynamicMsg', err.response.data.message);
        setTimeout(() => commit('dynamicMsg', ''), 4000);
        console.log(err.response.data.message);
      });
  },
  getAllStaffs({ commit, getters }) {
    const token = getters.adminDetails.token;
    commit('loadingStaff', true);
    const config = { headers: { token } };
    axios
      .get('/admin/staff/all', config)
      .then((res) => {
        commit('loadingStaff', false);
        commit('setAllStaffs', res.data.data);
      })
      .catch((err) => {
        commit('loadingStaff', false);
      });
  },
};

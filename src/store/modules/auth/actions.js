import router from '../../../router/index';
import axios from 'axios';

export default {
  login({ commit }, payload) {
    commit('isProcessing', true);
    commit('loginError', false);
    axios
      .post('/admin/auth/login', payload)
      .then((res) => {
        const { first_name, last_name, id, token, role } = res.data.data;
        const details = { first_name, last_name, id, token, role };

        let path = router.history.current.path;
        let isStaff = path === '/login' && details.role === 'staff';
        let isAdmin = path === '/admin-login' && details.role === 'super';

        if (isStaff) {
          commit('isProcessing', false);
          commit('login', details);
          router.push('/user-profile');
        }

        if (isAdmin) {
          commit('isProcessing', false);
          commit('login', details);
          router.push('/admin-dashboard');
        }

        if (!isStaff && !isAdmin) {
          throw new Error('There was an error trying to log in');
        }
      })
      .catch((err) => {
        commit('isProcessing', false);
        commit('loginError', true);
        console.log(err.response.data.message);
      });
  },
};

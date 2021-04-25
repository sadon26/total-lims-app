import initialAuthState from '../../../utils/initialAuthState';
import router from '../../../router/index';

export default {
  isProcessing(state, payload) {
    state.isProcessing = payload;
  },
  login(state, payload) {
    const { first_name, last_name, id, token, role } = payload;
    state.adminDetails = { first_name, last_name, id, token, role };
    state.isLoggedIn = true;
  },
  logout(state) {
    if (state.adminDetails.role === 'staff') {
      Object.assign(state, initialAuthState);
      router.push('/login');
    } else {
      Object.assign(state, initialAuthState);
      router.push('/admin-login');
    }
  },
  loginError(state, payload) {
    state.loginError = payload;
  },
};

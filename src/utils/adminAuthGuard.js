import { store } from '../store/store';

export const adminAuthGuard = {
  beforeEnter(to, _, next) {
    let isLoggedIn =
      store.getters.isLoggedIn && store.getters.adminDetails.role === 'super';
    if (isLoggedIn) {
      to.path === '/admin-login' ? next('admin-dashboard') : next();
    } else {
      if (to.path === '/admin-login') {
        next();
      } else {
        next('/admin-login');
      }
    }
  },
};

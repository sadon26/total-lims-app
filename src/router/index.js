import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from '../store/store';
import { adminAuthGuard } from '../utils/adminAuthGuard';

Vue.use(VueRouter);

const userAuthGuard = {
  beforeEnter(to, from, next) {
    if (
      store.getters.isLoggedIn &&
      store.getters.adminDetails.role !== 'super'
    ) {
      next();
    } else {
      next('/login');
    }
  },
};

const routes = [
  {
    path: '',
    name: 'LandingPage',
    component: () => import('../views/LandingPage.vue'),
  },
  {
    path: '/login',
    name: 'StaffLogin',
    component: () => import('../views/StaffLogin.vue'),
  },
  {
    path: '/admin-login',
    name: 'AdminLogin',
    ...adminAuthGuard,
    component: () => import('../views/admin profile/AdminLogin.vue'),
  },
  {
    path: '/user-profile',
    component: () => import('../views/user profile/UserProfile.vue'),
    children: [
      {
        path: '',
        name: 'SearchOrCreate',
        component: () => import('../views/user profile/SearchOrCreate.vue'),
      },
      {
        path: 'blend',
        name: 'BlendCert',
        component: () => import('../views/user profile/CreateCertificate'),
      },
    ],
  },
  {
    path: '/admin-dashboard',
    ...adminAuthGuard,
    component: () => import('../views/admin profile/AdminDashboard.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import('../views/admin profile/AdminHome.vue'),
      },
      {
        path: 'add-user',
        name: 'AdminAddStaff',
        component: () => import('../views/admin profile/AdminAddStaff.vue'),
      },
      {
        path: 'product',
        name: 'AdminProduct',
        component: () => import('../views/admin profile/AdminProduct.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

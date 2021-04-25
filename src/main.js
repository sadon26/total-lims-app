import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/store';
import jwt_decode from 'jwt-decode';
import idleVue from 'idle-vue';
import PortalVue from 'portal-vue';
import './services/axios-instance';

export const eventBus = new Vue();

Vue.use(idleVue, {
  eventEmitter: eventBus,
  store,
  idleTime: 600000, //10mins
  startAtIdle: false,
});

Vue.use(PortalVue);

//NProgress for route change
router.beforeResolve((to, _, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  computed: {
    userDetails() {
      return store.getters.adminDetails;
    },
  },
  methods: {
    hasTokenExpired(expiryDate, currentDate) {
      return expiryDate <= currentDate;
    },
  },
  watch: {
    'userDetails.token': {
      handler(token) {
        clearInterval(this.interval);
        if (token) {
          const decoded = jwt_decode(token);

          const tokenExpiryDate = decoded.exp;
          this.interval = setInterval(() => {
            const currentDate = Number(
              new Date()
                .getTime()
                .toString()
                .slice(0, 10)
            );
            let hasTokenExpired = this.hasTokenExpired(
              tokenExpiryDate,
              currentDate
            );
            hasTokenExpired && store.commit('logout');
          }, 1000);
        }
      },
      immediate: true,
    },
  },
  render: (h) => h(App),
}).$mount('#app');

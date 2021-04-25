<template>
  <div>
    <AdminNavBar />
    <div class="admin-section">
      <AdminSideBar />
      <transition name="land" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import AdminNavBar from '../../components/admin/AdminNavBar';
import AdminSideBar from '../../components/admin/AdminSideBar';

export default {
  name: 'adminDashboard',
  components: {
    AdminNavBar,
    AdminSideBar,
  },
  computed: {
    isIdle() {
      return this.isAppIdle;
    },
  },
  watch: {
    isIdle(val) {
      if (val) {
        this.$store.commit('logout');
        this.$store.commit(
          'inactiveMsg',
          'You were logged out due to inactivity'
        );
      }
    },
  },
};
</script>

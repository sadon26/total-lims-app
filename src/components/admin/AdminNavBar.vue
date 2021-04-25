<template>
  <div class="admin-nav__bar">
    <router-link :to="{ name: 'LandingPage' }" class="__logo">
      <img src="../../assets/images/total-logo 1.svg" alt="total-logo" />
    </router-link>
    <div class="user__details">
      <div class="__left">
        <div class="__wrap">
          <h1 v-if="Object.keys(adminDetails).length">
            {{ `${adminDetails.last_name} ${adminDetails.first_name}` }}
          </h1>
          <div>
            <div class="__dot"></div>
            <p>Admin</p>
          </div>
        </div>
        <div class="profile__pic">
          <img src="../../assets/images/admin user 1.svg" alt="profile-pic" />
        </div>
      </div>
      <div class="__separator"></div>
      <div @click="logout" class="__logout-icon">
        <img src="../../assets/images/admin logout.svg" alt="logout-icon" />
        <div class="logout__text">Logout</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['adminDetails']),
  },
  methods: {
    ...mapMutations(['logout']),
  },
};
</script>

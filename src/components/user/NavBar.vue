<template>
  <div class="nav__bar">
    <router-link :to="{ name: 'LandingPage' }" class="__logo">
      <img src="../../assets/images/total-logo 1.svg" alt="total-logo" />
    </router-link>
    <div class="user__details">
      <div class="__left">
        <div class="__wrap">
          <h1>{{ details('last_name') }} {{ details('first_name') }}</h1>
          <div>
            <div class="__dot"></div>
            <p>{{ details('role') }}</p>
          </div>
        </div>
        <div class="profile__pic">
          <img src="../../assets/images/user 1.svg" alt="profile-pic" />
        </div>
      </div>
      <div class="__separator"></div>
      <div @click="logout" class="__logout-icon">
        <img src="../../assets/images/logout.svg" alt="logout-icon" />
        <div class="logout__text">Logout</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'NavBar',
  computed: {
    ...mapGetters({
      userDetails: 'adminDetails',
    }),
  },
  methods: {
    ...mapMutations(['logout']),
    details(key) {
      return this.userDetails?.[key];
    },
  },
};
</script>

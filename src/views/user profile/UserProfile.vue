<template>
  <div>
    <NavBar />
    <transition name="land" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from '../../components/user/NavBar.vue';

export default {
  components: {
    NavBar,
  },
}
</script>

<style lang="scss">
.land-leave-active {
  animation: land .5s ease-out;
}
</style>
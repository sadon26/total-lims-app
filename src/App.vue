<template>
  <div id="app">
    <router-view />
    <portal-target name="root"></portal-target>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import '@/assets/scss/main';

body {
  margin: 0;
  background: rgb(247, 247, 247);
  font-family: Lato;
}

.land-leave-active {
  animation: land 0.5s ease-in;
}

.inactive-msg-leave-active {
  animation: 1s fade-in reverse ease-out forwards;
}

.no-product-name-enter-active {
  animation: 0.5s fade-in cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.no-product-name-leave-active {
  animation: 0.5s fade-in cubic-bezier(0.34, 1.56, 0.64, 1) both reverse;
}

.no-product-name-enter-active {
  animation: 0.5s fade-from-left cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.no-product-name-leave-active {
  animation: 0.5s fade-from-left cubic-bezier(0.34, 1.56, 0.64, 1) both reverse;
}

.fade-table-in-enter-active {
  animation: 0.5s fade-in cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.products-list-enter-active {
  animation: 0.5s slide-down cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
</style>

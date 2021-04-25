<template>
<transition name="add-user-popup" mode="out-in">
    <div class="add-user-msg">
    <div class="add-user-msg__dashed-around">
      <div class="add-user-msg__text">
        <span>{{ dynamicMsg }}</span>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'dynamicMsg'
      ])
    },
    created() {
      this.$store.commit('dynamicMsg', '');
    }
  }
</script>

<style lang="scss" scoped>

.add-user-popup-enter-active {
  animation: .5s fade-in both;
}

.add-user-popup-leave-active {
  animation: .5s fade-in reverse both;
}
</style>
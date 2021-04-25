<template>
  <div class="add-new-user-container">
    <DynamicMsgComp v-show="dynamicMsg" />

    <div class="add-new-user-wrapper">
      <form @submit.prevent="addUser" class="add-new-user stagger__in--1">
        <p class="add-new-user__heading">Add New User</p>
        <div class="add-new-user__row">
          <div class="add-new-user__wrapper">
            <input
              class="add-new-user__wrapper__input"
              type="text"
              v-model="first_name"
              required
            />
            <label class="add-new-user__wrapper__text" for="first_name"
              >First Name</label
            >
          </div>
          <div class="add-new-user__wrapper">
            <input
              class="add-new-user__wrapper__input"
              type="text"
              v-model="last_name"
              required
            />
            <label class="add-new-user__wrapper__text" for="last_name"
              >Last Name</label
            >
          </div>
        </div>
        <div class="add-new-user__row">
          <div class="add-new-user__wrapper">
            <input
              class="add-new-user__wrapper__input"
              type="text"
              v-model="igg"
              required
            />
            <label class="add-new-user__wrapper__text" for="first_name"
              >IGG</label
            >
          </div>
          <div class="add-new-user__wrapper">
            <input
              class="add-new-user__wrapper__input"
              type="text"
              v-model="email"
              required
            />
            <label class="add-new-user__wrapper__text" for="last_name"
              >Email</label
            >
          </div>
        </div>
        <button v-if="!addingUser" class="add-new-user-btn">Create User</button>
        <div v-else class="adding-user">
          <div class="adding-user__spinner">
            <img
              src="../../assets/images/Ripple.svg"
              alt="adding-user-spinner"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DynamicMsgComp from '../../components/Popup/DynamicMsgComp';

export default {
  data() {
    return {
      first_name: '',
      last_name: '',
      igg: '',
      email: '',
    };
  },
  components: {
    DynamicMsgComp,
  },
  computed: {
    ...mapGetters(['addingUser', 'dynamicMsg']),
  },
  methods: {
    addUser() {
      const staffDetails = {
        first_name: this.first_name,
        last_name: this.last_name,
        igg: this.igg,
        email: this.email,
      };
      this.$store.dispatch('createStaff', staffDetails);
    },
  },
  created() {
    this.$store.commit('addingUser', false);
  },
  watch: {
    dynamicMsg(value) {
      if (value === 'Successfully registered staff') {
        this.first_name = '';
        this.last_name = '';
        this.igg = '';
        this.email = '';
      }
    },
  },
};
</script>

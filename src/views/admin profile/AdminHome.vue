<template>
  <div class="admin__home">
    <div class="admin__home-heading stagger__in--1">
      <p class="admin__home-heading-text">Dashboard</p>
      <div class="admin__home-bg">
        <img src="../../assets/images/admin-home-bg.png" alt="admin-home-bg" />
      </div>
    </div>

    <div class="admin__home-staff-n-updates">
      <div class="admin__home-staff-n-updates-staff stagger__in--2">
        <p class="admin__home-staff-n-updates-staff-heading">
          All Staffs
        </p>

        <div
          class="admin__home-staff-n-updates-loading-staff"
          v-if="loadingStaff"
        >
          <div class="admin__home-staff-n-updates-loading-staff-icon">
            <img src="../../assets/images/Spin.svg" alt="animated-spin-icon" />
          </div>
        </div>
        <transition name="fade-table-in">
          <table v-if="!loadingStaff">
            <thead>
              <tr>
                <th>Name</th>
                <th>IGG</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(data, index) in paginatedData" :key="index">
                <td>{{ data.first_name }} {{ data.last_name }}</td>
                <td>{{ data.igg }}</td>
                <td>{{ data.email }}</td>
              </tr>
            </tbody>
          </table>
        </transition>

        <div class="admin__home-range">
          <span v-if="!loadingStaff" class="admin__home-range-count"
            >Showing page {{ currentPage }} of {{ pagination.pageCount }}</span
          >
          <div v-if="!loadingStaff" class="admin__home-range-wrapper">
            <button
              @click="pageToShow(currentPage - 1)"
              :disabled="currentPage === 1"
              class="admin__home-range-wrapper-left-arrow"
              :class="{
                'admin__home-range-wrapper-left-arrow--not-clickable':
                  currentPage === 1,
              }"
            >
              <img
                src="../../assets/images/left-range-arrow.svg"
                alt="left range arrow"
              />
            </button>

            <button
              v-for="(num, index) in rangeData"
              :key="index"
              @click="pageToShow(num)"
              class="admin__home-range-wrapper-btn"
              :class="[
                num === currentPage
                  ? 'admin__home-range-wrapper-btn--current'
                  : null,
                num > pagination.pageCount
                  ? 'admin__home-range-wrapper-btn--not-clickable'
                  : null,
              ]"
            >
              {{ num }}
            </button>

            <button
              :disabled="currentPage === pagination.pageCount"
              @click="pageToShow(currentPage + 1)"
              class="admin__home-range-wrapper-right-arrow"
              :class="{
                'admin__home-range-wrapper-right-arrow--not-clickable':
                  currentPage === pagination.pageCount,
              }"
            >
              <img
                src="../../assets/images/right-range-arrow.svg"
                alt="right range arrow"
              />
            </button>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      staffs: [],
      perPage: 5,
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters(['loadingStaff', 'allStaffs']),
    pagination() {
      let from = this.currentPage * this.perPage - this.perPage;
      let to = from + this.perPage;
      return {
        pageCount: Math.ceil(this.staffs.length / this.perPage),
        from,
        to,
      };
    },
    rangeData() {
      let negativePoint = this.currentPage - 2;
      let positivePoint = this.currentPage + 2;

      let range = [];
      for (let i = negativePoint; i <= positivePoint; i++) {
        range.push(i);
      }
      return range.filter((el) => el > 0);
    },
    paginatedData() {
      return this.staffs.slice(this.pagination.from, this.pagination.to);
    },
  },
  methods: {
    pageToShow(page) {
      this.currentPage = page;
    },
  },
  created() {
    this.$store.dispatch('getAllStaffs');
    this.staffs = this.allStaffs;
  },
};
</script>

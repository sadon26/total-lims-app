export default {
  addingUser(state, payload) {
    state.addingUser = payload;
  },
  setAllStaffs(state, payload) {
    state.allStaffs = payload;
  },
  loadingStaff(state, payload) {
    state.loadingStaff = payload;
  },
}
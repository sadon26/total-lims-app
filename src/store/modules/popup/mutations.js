export default {
  dynamicMsg(state, payload) {
    state.dynamicMsg = payload;
  },
  inactiveMsg(state, payload) {
    state.inactiveMsg = payload;
  }
}
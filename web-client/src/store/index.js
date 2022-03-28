import { createStore } from "vuex";

export default createStore({
  state: {
    messages: [],
    openTime: {},
  },
  getters: {},
  mutations: {
    setMessage(state, payload) {
      state.messages = payload;
    },
    setOpenTime(state, payload) {
      state.openTime = payload;
    },
  },
  actions: {},
  modules: {},
});

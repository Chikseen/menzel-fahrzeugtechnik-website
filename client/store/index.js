export const state = () => ({
  messages: [],
  openTime: {},
})

export const getters = {
  getCounter(state) {
    return state.counter
  }
}

export const mutations = {
  setMessage(state, payload) {
    state.messages = payload;
  },
  setOpenTime(state, payload) {
    state.openTime = payload;
  },
}

export const actions = {
  async fetchCounter(state) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  }
}
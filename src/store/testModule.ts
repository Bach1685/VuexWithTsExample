export const testModule = {
  state: {
    countModule: 10,
  },
  mutations: {
    setCountModule(state: any, newValue: any) {
      state.countModule = newValue;
    },
  },
  getters: {
    getCountModule(state: any) {
      return state.countModule;
    },
  },
};

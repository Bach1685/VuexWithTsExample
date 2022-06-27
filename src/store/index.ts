import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { testModule } from "./testModule";

// define your typings for the store state
export interface State {
  count: number;
}

// export interface Mutation {
//   setCount(val: any): any;
// }

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 7,
  },
  mutations: {
    setCount(state: any, newValue: any) {
      state.count = newValue;
    },
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
  modules: {
    test: testModule,
  },
});
// import { createStore } from "vuex";
// import { testModule } from "./testModule";

// export default createStore({
//   state() {
//     return {
//       name: "Alex",
//     };
//   },
//   getters: {
//     getName(state: any) {
//       return state.name;
//     },
//   },
//   mutations: {},
//   actions: {},
//   modules: {
//     test: testModule,
//   },
// });

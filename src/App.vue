<template>
  <div>{{ getNumber }}</div>
  <button @click="setCount">кнопка</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations, mapState, useStore } from "vuex";
import { key, store } from "./store";

export default defineComponent({
  computed: {
    getNumber() {
      return store.getters.getCountModule;
    },
  },
  methods: {
    setCount() {
      store.commit("setCount", 12);
    },
  },
  // computed: {
  //   // ...mapState({placeholder: (state: any) => state.placeholder,}),
  //   ...mapGetters({ name: "getName" }),
  // },
});
</script>

<style>
</style>

import { defineStore } from "pinia";

export const LoadingStore = defineStore("LoadingtStore", {
  state: () => ({
    isLoading: false,
    isDisabled: false,
  }),
  actions: {
    toggleLoading() {
      this.isLoading = !this.isLoading;
    },
    toggleDisabled() {
      this.isDisabled = !this.isDisabled;
    },
  },
});

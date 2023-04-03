<template>
  <HeaderView />
  <RouterView />
  <FooterView />
</template>

<script>
import FooterView from "../components/frontend/FooterView.vue";
import HeaderView from "../components/frontend/HeaderView.vue";

export default {
  components: {
    HeaderView,
    FooterView,
  },
};
</script>

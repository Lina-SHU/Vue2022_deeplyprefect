<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<script>
import FooterComponent from "@/components/frontend/FooterComponent.vue";
import HeaderComponent from "@/components/frontend/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

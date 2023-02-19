<template>
  <header>
    <nav>
      後臺管理平台
      <RouterLink to="/">home</RouterLink> |
      <RouterLink to="/admin/products">products admin</RouterLink> |
      <RouterLink to="/admin/orders">orders admin</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<script>
import { RouterView, RouterLink } from "vue-router";
const { VITE_URL } = import.meta.env;

export default {
  components: {
    RouterView,
    RouterLink
  },
  methods: {
    checkToken() {
      const url = `${VITE_URL}api/user/check`;
      this.$http.post(url).catch(() => {
        this.$router.push("/login");
      });
    },
  },
  mounted() {
    this.checkToken();
  }
};
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">home</RouterLink> |
        <RouterLink to="/admin/products">products admin</RouterLink> |
        <RouterLink to="/admin/orders">orders admin</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script>
import { RouterView, RouterLink } from "vue-router";

export default {
  components: {
    RouterView,
    RouterLink
  },
  methods: {
    checkToken() {
      const url = `${import.meta.env.VITE_URL}api/user/check`;
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

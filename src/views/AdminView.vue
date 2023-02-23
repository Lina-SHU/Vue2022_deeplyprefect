<template>
  <header>
    <nav>
      後臺管理平台
      <RouterLink to="/">home</RouterLink> |
      <RouterLink to="/admin/products">products admin</RouterLink> |
      <RouterLink to="/admin/orders">orders admin</RouterLink> |
      <RouterLink to="/admin/coupon">coupon admin</RouterLink>
      <button type="button" class="btn btn-primary ms-3" @click="logout">
        Logout
      </button>
    </nav>
  </header>
  <div v-if="isLogin">
    <RouterView />
  </div>
</template>

<script>
import { RouterView, RouterLink } from "vue-router";
import Swal from "sweetalert2";
const { VITE_URL } = import.meta.env;

export default {
  components: {
    RouterView,
    RouterLink,
  },
  data() {
    return {
      isLogin: false,
    };
  },
  methods: {
    checkToken() {
      const url = `${VITE_URL}api/user/check`;
      this.$http
        .post(url)
        .then(() => {
          this.isLogin = true;
        })
        .catch(() => {
          this.$router.push("/login");
        });
    },
    logout() {
      const url = `${VITE_URL}logout`;
      this.$http
        .post(url)
        .then(() => {
          Swal.fire({
            toast: true,
            title: "您已登出",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
          this.$router.push("/login");
        })
        .catch((err) => {
          Swal.fire({
            title: err.response.data.message,
            icon: "error",
          });
        });
    },
  },
  mounted() {
    this.checkToken();
  },
};
</script>

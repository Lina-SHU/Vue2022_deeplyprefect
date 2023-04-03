<template>
  <header>
    <nav>
      後臺管理平台
      <RouterLink to="/">回前台首頁</RouterLink> |
      <RouterLink to="/admin/products">商品管理</RouterLink> |
      <RouterLink to="/admin/orders">訂單管理</RouterLink> |
      <RouterLink to="/admin/coupon">優惠券管理</RouterLink>
      <button
        type="button"
        class="btn btn-outline-primary-dark ms-3"
        @click="logout"
      >
        登出
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
          document.cookie = `PToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT`;
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

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <h1 class="fs-5">後臺管理平台</h1>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminHeader"
          aria-controls="adminHeader"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="adminHeader">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/">回前台首頁</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/admin/products" class="nav-link"
                >商品管理</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/admin/orders" class="nav-link"
                >訂單管理</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/admin/coupon" class="nav-link"
                >優惠券管理</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
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

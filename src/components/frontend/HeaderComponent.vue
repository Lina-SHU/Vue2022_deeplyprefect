<template>
  <nav
    class="position-fixed top-0 start-0 end-0 navbar navbar-expand-lg navbar-light bg-white-opacity z-index-5 py-3"
  >
    <div class="container-fluid">
      <h1 class="d-flex justify-content-center aligns-items.center mb-0">
        <RouterLink to="/" class="navbar-brand text-dark" href="#"
          >DeeplyPrefect
        </RouterLink>
      </h1>
      <div class="ms-auto">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          ref="navbar"
          class="collapse navbar-collapse ms-auto"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink
                to="/productlist"
                class="nav-link py-3 py-lg-0 px-4"
                :class="{
                  'nav-item-active': $route.fullPath.match('/productlist'),
                }"
                @click.prevent="this.$refs.navbar.classList.remove('show')"
              >
                保養去
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                to="/custom"
                class="nav-link py-3 py-lg-0 px-4"
                @click.prevent="this.$refs.navbar.classList.remove('show')"
                :class="{
                  'nav-item-active': $route.fullPath === '/custom',
                }"
                >客製保養</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink
                to="/trials"
                class="nav-link py-3 py-lg-0 px-4"
                @click.prevent="this.$refs.navbar.classList.remove('show')"
                :class="{
                  'nav-item-active': $route.fullPath === '/trials',
                }"
              >
                立即體驗
              </RouterLink>
            </li>
            <!-- <li class="nav-item">
              <a
                class="nav-link py-3 py-lg-0 px-4"
                href="#"
                @click.prevent="this.$refs.navbar.classList.remove('show')"
                >部落格</a
              >
            </li> -->
          </ul>
        </div>
      </div>
      <a href="#" class="position-relative" @click.prevent="openOffcanvas">
        <p
          v-if="cartNum"
          class="cartNumIcon d-flex jusitfy-content-center align-items-center position-absolute bg-danger text-white rounded-circle mb-0"
        >
          {{ cartNum }}
        </p>
        <img src="../../assets/img/cart.png" alt="購物車" />
      </a>
    </div>
  </nav>
  <CartOffcanvas ref="offcanvas"></CartOffcanvas>
</template>
<script>
import CartOffcanvas from "./CartOffcanvas.vue";
import { mapState } from "pinia";
import { CartStore } from "@/stores/CartStore.js";

export default {
  components: {
    CartOffcanvas,
  },
  methods: {
    openOffcanvas() {
      this.$refs.offcanvas.openOffcanvas();
    },
  },
  computed: {
    ...mapState(CartStore, ["cartNum"]),
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Edu NSW ACT Foundation", cursive;
}

.navbar-collapse {
  @media (max-width: 992px) {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
  }
}

.navbar-nav .nav-link {
  @media (max-width: 992px) {
    background-color: #fff;
  }
}
</style>

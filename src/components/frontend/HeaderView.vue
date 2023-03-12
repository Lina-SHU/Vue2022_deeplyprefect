<template>
  <nav
    class="position-fixed top-0 start-0 end-0 navbar navbar-expand-lg navbar-light bg-white-opacity z-index-5 py-3"
  >
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" href="#"
        >DeeplyPrefect</router-link
      >
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
        <div class="collapse navbar-collapse ms-auto" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                to="/productlist"
                class="nav-link active pe-0 pe-lg-4"
              >
                保養去
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 px-lg-4" href="#">客製保養</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ps-0 px-lg-4" href="#">部落格</a>
            </li>
          </ul>
        </div>
      </div>
      <a href="#" @click.prevent="openOffcanvas">
        <img src="../../assets/img/cart.png" alt="購物車" />
      </a>
    </div>
  </nav>
  <CartOffcanvas ref="offcanvas"></CartOffcanvas>
</template>
<script>
import CartOffcanvas from "./CartOffcanvas.vue";

export default {
  components: {
    CartOffcanvas,
  },
  methods: {
    openOffcanvas() {
      this.$refs.offcanvas.openOffcanvas();
    },
  },
};
</script>

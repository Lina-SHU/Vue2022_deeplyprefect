<template>
  <div class="container">
    <div class="row gy-3">
      <div
        class="col-6 col-md-4 col-lg-3"
        v-for="product in products"
        :key="product.id"
      >
        <div class="card">
          <div
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
            class="bg-center"
          ></div>
          <div class="card-body p-2">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="fs-5 text-end">
              ${{ product.price
              }}<del class="text-danger fs-6 ms-1"
                >${{ product.origin_price }}</del
              >
            </p>
            <router-link
              :to="`/product/${product.id}`"
              class="btn btn-outline-primary me-1"
            >
              查看詳細
            </router-link>
            <a
              href="#"
              class="btn btn-danger"
              @click.prevent="addToCart(product.id)"
              >加入購物車</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      const url = `${VITE_URL}api/${VITE_PATH}/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          Swal.fire({
            title: err.response.data.message,
            icon: "error",
          });
        });
    },
    addToCart(id, qty = 1) {
      const obj = {
        product_id: id,
        qty,
      };
      const url = `${VITE_URL}api/${VITE_PATH}/cart`;
      this.$http
        .post(url, { data: obj })
        .then(() => {
          Swal.fire({
            toast: true,
            title: "已將商品加入到購物車！",
            icon: "success",
            timer: 2000,
            position: "top-end",
            showConfirmButton: false,
          });
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
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
.bg-center {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 150px;
}
</style>

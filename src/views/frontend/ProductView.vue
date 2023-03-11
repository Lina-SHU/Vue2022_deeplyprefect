<template>

  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <img :src="product.imageUrl" :alt="product.title" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <h1 class="fs-4">{{ product.title }}</h1>
        <p>{{ product.description }}</p>
        <p class="fs-5 text-end">
          $ {{ product.price
          }}<del class="text-danger fs-6 ms-2"
            >$ {{ product.origin_price }}</del
          >
        </p>
        <div class="input-group mb-3">
          <select class="form-select" v-model="qty">
            <option :value="i" v-for="i in 20" :key="i">
              {{ i }}
            </option>
          </select>
          <button
            type="button"
            class="btn btn-danger"
            @click.prevent="addToCart(product.id, qty)"
            :disabled="isDisabled"
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>

    <loading v-model:active="isLoading" />
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import Swal from "sweetalert2";
import { mapState, mapActions } from "pinia";
import { CartStore } from "@/stores/CartStore.js";
import { LoadingStore } from "@/stores/LoadingStore.js";
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  components: {
    Loading,
  },
  data() {
    return {
      product: [],
      id: "",
      qty: 1,
    };
  },
  methods: {
    ...mapActions(CartStore, ["addToCart"]),
    ...mapActions(LoadingStore, ["toggleLoading"]),
    getProduct() {
      this.toggleLoading();
      const url = `${VITE_URL}api/${VITE_PATH}/product/${this.id}`;
      this.$http
        .get(url)
        .then((res) => {
          this.toggleLoading();
          this.product = res.data.product;
        })
        .catch((err) => {
          Swal.fire({
            title: err.response.data.message,
            icon: "error",
          });
        });
    },
  },
  computed: {
    ...mapState(LoadingStore, ["isLoading", "isDisabled"]),
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProduct();
  },
};
</script>

<template>
  <div class="card text-dark border-0 rounded-0">
    <div class="card-image position-relative">
      <div
        class="card-content position-absolute z-index-3 d-flex justify-content-center align-items-center"
      >
        <div class="text-center">
          <router-link
            :to="{ path: `/product/${prd.id}` }"
            type="button"
            class="btn btn-outline-primary d-block mb-3"
          >
            查看商品
          </router-link>
          <button
            type="button"
            class="btn btn-primary d-block"
            @click="addToCart(prd.id)"
            :disabled="isDisabled"
          >
            加入購物車
          </button>
        </div>
      </div>
      <div class="ratio ratio-1x1">
        <img
          :src="prd.imageUrl"
          class="img-fluid object-cover"
          alt="prd.title"
        />
      </div>
    </div>
    <div class="card-body p-2">
      <h5 class="fs-6 card-title">{{ prd.title }}</h5>
      <p class="card-text">${{ $currency(prd.price) }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { CartStore } from "@/stores/CartStore.js";
import { LoadingStore } from "@/stores/LoadingStore.js";

export default {
  props: ["prd"],
  methods: {
    ...mapActions(CartStore, ["addToCart"]),
  },
  computed: {
    ...mapState(LoadingStore, ["isDisabled"]),
  },
};
</script>

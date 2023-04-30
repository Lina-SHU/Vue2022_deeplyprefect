<template>
  <div ref="cartOffcanvas" class="offcanvas offcanvas-end" tabindex="-1">
    <div class="offcanvas-header">
      <button
        type="button"
        class="btn-close text-reset ms-auto"
        @click="closeOffcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div v-if="!carts.carts?.length">
        <p class="text-center">目前購物車是空的喔！</p>
        <RouterLink
          to="/productlist"
          class="btn btn-primary d-block w-100"
          @click.prevent="closeOffcanvas"
          >保養去</RouterLink
        >
      </div>
      <div v-else class="d-flex flex-column justify-content-between h-100">
        <table class="table">
          <tbody class="align-middle">
            <tr v-for="cart in carts.carts" :key="cart">
              <td width="25%">
                <img
                  :src="cart.product.imageUrl"
                  :alt="cart.name"
                  class="img-fluid"
                />
              </td>
              <td>
                <div class="input-group align-items-center">
                  <select
                    class="form-select"
                    v-model="cart.qty"
                    @change="changeCartItem(cart)"
                    :disabled="isDisabled"
                  >
                    <option
                      :value="i"
                      v-for="i in cart.qty > 20 ? cart.qty : 20"
                      :key="i"
                    >
                      {{ i }}
                    </option>
                  </select>
                </div>
              </td>
              <td>
                <p class="text-primary-dark mb-0">{{ cart.product.title }}</p>
                <p>{{ $currency(cart.final_total) }}</p>
              </td>
              <td>
                <a href="#" @click.prevent="deleteCartItem(cart.id)">
                  <i class="bi bi-trash3 text-danger"></i>
                </a>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="5" class="text-end">
                總金額： $ {{ $currency(carts.final_total) }} 元
              </td>
            </tr>
          </tfoot>
        </table>
        <RouterLink
          to="/checkCart"
          type="button"
          class="btn btn-primary d-block w-100"
          @click="closeOffcanvas"
        >
          立即結帳
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import Offcanvas from "bootstrap/js/dist/offcanvas";
import { mapActions, mapState } from "pinia";
import { CartStore } from "@/stores/CartStore.js";
import { LoadingStore } from "@/stores/LoadingStore.js";

export default {
  data() {
    return {
      cartMsg: "",
    };
  },
  methods: {
    ...mapActions(CartStore, ["getCart", "changeCartItem", "deleteCartItem"]),
    openOffcanvas() {
      this.cartMsg.show();
    },
    closeOffcanvas() {
      this.cartMsg.hide();
    },
  },
  computed: {
    ...mapState(CartStore, ["carts"]),
    ...mapState(LoadingStore, ["isDisabled"]),
  },
  mounted() {
    this.cartMsg = new Offcanvas(this.$refs.cartOffcanvas);
    this.getCart();
  },
};
</script>

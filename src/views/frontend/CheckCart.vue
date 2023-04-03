<template>
  <main class="bg-homeSection">
    <section class="bg-prds bg-white">
      <div
        class="bg-prdBanner position-relative"
        style="
          background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/lina-vueapi/1677852996621.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WNOBLbEn%2B4HFspBIWLRXuJ6pxbN%2B3ijsN7Tn3ac5rK9j1iMrd21A0VrstKPZhlGdWGjscnrSJTlqJPkCJ%2FCDWL87%2BjBecMHbEgfZzvhI0OoTnz3m5pQB6kWWacJC0C03Fby%2FtZDOvZGyg4rnsWPW0hQzRTPE5COpDG8HIqaFufRUaVHS5bEBvXuEfGYNAzN3W6tphbsBTuFwFgCVwNDmKvJ9TP%2FM9XVRZSflFto45njpC8Zi4r%2B2pZuUyZyncbDcmy5XqKmbRbc72DJnB881%2FMj2G9KLeWPDih%2BEUiOJXmXfkpSFsTWPEQYWPX%2F5JtmaIZ9HW2Nx32ls%2FmlpZksqlQ%3D%3D');
        "
      >
        <div class="banner-cta bg-white-opacity position-absolute">
          <div class="d-inline-block">
            <h2 class="font-banner text-primary-dark">
              立即訂購<br />重啟年輕煥光肌
            </h2>
          </div>
        </div>
      </div>
      <div class="container bg-white py-5 py-lg-7">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <!-- 結帳流程 -->
            <ul
              class="cartlist list-unstyled d-flex justify-content-between mx-auto w-75 mb-5 mb-lg-7"
            >
              <li
                class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-white bg-primary-dark mb-0"
              >
                1
              </li>
              <li
                class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-primary-dark bg-primary mb-0"
              >
                2
              </li>
              <li
                class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-primary-dark bg-primary mb-0"
              >
                3
              </li>
              <li
                class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-primary-dark bg-primary mb-0"
              >
                4
              </li>
            </ul>
            <!-- 購物車 -->
            <table class="table my-4">
              <thead class="text-center">
                <tr>
                  <th>品名</th>
                  <th class="d-none d-lg-table-cell">單價</th>
                  <th>數量/單位</th>
                  <th>小計</th>
                  <th></th>
                </tr>
              </thead>
              <tbody v-if="!carts.carts?.length">
                <tr>
                  <td colspan="5" class="py-5 text-center text-dark">
                    <p class="mb-3">目前購物車是空的喔！</p>
                    <router-link
                      to="/productlist"
                      class="btn btn-lg btn-primary"
                      >保養去</router-link
                    >
                  </td>
                </tr>
              </tbody>
              <tbody v-else class="align-middle">
                <tr v-for="cart in carts.carts" :key="cart">
                  <td class="d-flex align-items-center">
                    <div class="ratio ratio-1x1 w-50 me-2">
                      <img
                        :src="cart.product.imageUrl"
                        :alt="cart.name"
                        class="img-fluid object-cover"
                      />
                    </div>
                    <router-link :to="`/product/${cart.product.id}`">
                      {{ cart.product.title }}
                    </router-link>
                  </td>
                  <td class="text-end d-none d-lg-table-cell">
                    {{ $currency(cart.product.price) }}
                  </td>
                  <td>
                    <div class="input-group align-items-center">
                      <select
                        class="form-select me-2"
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
                      {{ cart.product.unit }}
                    </div>
                  </td>
                  <td class="text-end">{{ $currency(cart.final_total) }}</td>
                  <td class="text-center">
                    <a href="#" @click.prevent="deleteCartItem(cart.id)">
                      <i class="bi bi-trash3 text-danger"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="5" class="text-end py-3">
                    總金額： $ {{ $currency(carts.final_total) }} 元
                  </td>
                </tr>
              </tfoot>
            </table>
            <div
              v-if="carts.carts?.length"
              class="d-flex justify-content-between"
            >
              <router-link
                to="/productlist"
                class="btn btn-outline-primary-dark"
                >繼續購物</router-link
              >
              <router-link to="/checkInfo" class="btn btn-primary-dark ms-2"
                >前往結帳</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { CartStore } from "@/stores/CartStore.js";
import { LoadingStore } from "@/stores/LoadingStore.js";

export default {
  methods: {
    ...mapActions(CartStore, ["getCart", "changeCartItem", "deleteCartItem"]),
  },
  computed: {
    ...mapState(CartStore, ["carts"]),
    ...mapState(LoadingStore, ["isDisabled"]),
  },
  mounted() {
    this.getCart();
  },
};
</script>

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
              訂購完成<br />重啟年輕煥光肌
            </h2>
          </div>
        </div>
      </div>
      <div class="container bg-white py-5">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <!-- 結帳流程 -->
            <ul
              class="cartlist list-unstyled d-flex justify-content-between mx-auto w-75 mb-7"
            >
              <li
                class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-primary-dark fs-5 bg-primary mb-0"
              >
                1
              </li>
              <li
                class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-primary-dark fs-5 bg-primary mb-0"
              >
                2
              </li>
              <li
                class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-primary-dark fs-5 bg-primary mb-0"
              >
                3
              </li>
              <li
                class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-white fs-5 bg-primary-dark mb-0"
              >
                4
              </li>
            </ul>
          </div>
        </div>
        <!-- 訂單完成 -->
        <div class="text-center mb-5">
          <p
            v-if="order.is_paid"
            class="fs-5 d-inline-block py-2 px-4 px-lg-7 border border-primary-dark text-primary-dark"
          >
            感謝您的訂購，以下為您的訂單
          </p>
          <p
            v-else
            class="fs-5 d-inline-block py-2 px-4 px-lg-7 border border-danger text-danger"
          >
            付款失敗！請洽客服
          </p>
        </div>
        <div class="row gx-">
          <div class="col-lg-6">
            <table class="table">
              <thead class="text-center">
                <tr>
                  <th>品名</th>
                  <th>單價</th>
                  <th>數量/單位</th>
                  <th>小計</th>
                </tr>
              </thead>
              <tbody class="align-middle">
                <tr v-for="order in order.products" :key="order">
                  <td class="d-flex align-items-center">
                    <div class="ratio ratio-1x1 w-50 me-2">
                      <img
                        :src="order.product.imageUrl"
                        :alt="order.name"
                        class="img-fluid object-cover"
                      />
                    </div>
                    <router-link :to="`/product/${order.product.id}`">
                      {{ order.product.title }}
                    </router-link>
                  </td>
                  <td class="text-end">
                    {{ $currency(order.product.price) }}
                  </td>
                  <td class="text-center">
                    {{ order.qty }}
                    {{ order.product.unit }}
                  </td>
                  <td class="text-end">{{ $currency(order.final_total) }}</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between px-2">
              <p>總計：</p>
              <p>{{ order.total }}</p>
            </div>
          </div>
          <div class="col-lg-6">
            <table class="table">
              <tbody>
                <tr>
                  <th class="px-3 py-3">下單日期</th>
                  <td class="px-3 py-3">
                    {{ new Date(order.create_at * 1000).toLocaleDateString() }}
                  </td>
                </tr>
                <tr>
                  <th class="px-3 py-3">訂單編號</th>
                  <td class="px-3 py-3">{{ order.id }}</td>
                </tr>
                <tr>
                  <th class="px-3 py-3">收件人姓名</th>
                  <td class="px-3 py-3">{{ order.user?.name }}</td>
                </tr>
                <tr>
                  <th class="px-3 py-3">連絡電話</th>
                  <td class="px-3 py-3">{{ order.user?.tel }}</td>
                </tr>
                <tr>
                  <th class="px-3 py-3">Email</th>
                  <td class="px-3 py-3">{{ order.user?.email }}</td>
                </tr>
                <tr>
                  <th class="px-3 py-3">聯絡地址</th>
                  <td class="px-3 py-3">{{ order.user?.address }}</td>
                </tr>
                <tr>
                  <th class="px-3 py-3">是否付款</th>
                  <td class="px-3 py-3">
                    {{ order.is_paid ? "已付款" : "尚未付款" }}
                  </td>
                </tr>
              </tbody>
            </table>
            <router-link
              to="/productlist"
              class="btn btn-primary-dark d-block w-100 mb-2"
            >
              繼續逛逛
            </router-link>
            <router-link
              to="/"
              class="btn btn-outline-primary-dark d-block w-100"
            >
              回首頁
            </router-link>
          </div>
        </div>
      </div>
      <loading v-model:active="isLoading" />
    </section>
  </main>
</template>

<script>
import orderSrv from "@/service/order-service.js";
import Swal from "sweetalert2";
import { mapActions, mapState } from "pinia";
import { LoadingStore } from "@/stores/LoadingStore.js";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

export default {
  components: {
    Loading,
  },
  data() {
    return {
      order: {},
      orderId: "",
    };
  },
  methods: {
    ...mapActions(LoadingStore, ["toggleLoading"]),
    getOrder() {
      this.toggleLoading();
      this.id = this.$route.params.id;
      orderSrv.getOrder(this.id).then((res) => {
        this.toggleLoading();
        if (!res.isSuccess) {
          Swal.fire({
            title: res.msg,
            icon: "error",
          });
        } else {
          this.order = res.order.order;
        }
      });
    },
    payOrder() {
      this.toggleLoading();
      orderSrv.payOrder(this.id).then((res) => {
        this.toggleLoading();
        if (!res.isSuccess) {
          Swal.fire({
            title: res.msg,
            icon: "error",
          });
        } else {
          this.$router.push(`/orderCompleted/${this.id}`);
        }
      });
    },
  },
  computed: {
    ...mapState(LoadingStore, ["isLoading"]),
  },
  mounted() {
    this.getOrder();
  },
};
</script>

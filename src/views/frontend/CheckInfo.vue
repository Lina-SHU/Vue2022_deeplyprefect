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
                class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-white fs-5 bg-primary-dark mb-0"
              >
                2
              </li>
              <li
                class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-primary-dark fs-5 bg-primary mb-0"
              >
                3
              </li>
              <li
                class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-primary-dark fs-5 bg-primary mb-0"
              >
                4
              </li>
            </ul>
          </div>
        </div>
        <!-- 填寫資訊 -->
        <div class="row gx-5">
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
                <tr v-for="cart in carts.carts" :key="cart">
                  <td class="d-flex align-items-center">
                    <div class="ratio ratio-1x1 w-50 me-2">
                      <img
                        :src="cart.product.imageUrl"
                        :alt="cart.name"
                        class="img-fluid"
                      />
                    </div>
                    <router-link :to="`/product/${cart.product.id}`">
                      {{ cart.product.title }}
                    </router-link>
                  </td>
                  <td class="text-end">
                    {{ cart.product.price }}
                  </td>
                  <td class="text-center">
                    {{ cart.qty }}
                    {{ cart.product.unit }}
                  </td>
                  <td class="text-end">{{ cart.final_total }}</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between px-2">
              <p>小計：</p>
              <p>{{ carts.total }}</p>
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="couponCode" />
              <button class="btn btn-primary" type="button" @click="useCoupon">
                使用折價券
              </button>
            </div>
            <div class="d-flex justify-content-between px-2">
              <p>總計：</p>
              <p>{{ carts.final_total }}</p>
            </div>
          </div>
          <div class="col-lg-6">
            <VForm v-slot="{ errors }" @submit="onSubmit">
              <div class="mb-3">
                <label for="email">姓名</label>
                <VField
                  id="name"
                  name="姓名"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名"
                  rules="required"
                  v-model.trim="user.name"
                ></VField>
                <error-message
                  name="姓名"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="mb-3">
                <label for="email">Email</label>
                <VField
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email"
                  rules="email|required"
                  v-model="user.email"
                ></VField>
                <error-message
                  name="email"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="mb-3">
                <label for="email">電話</label>
                <VField
                  id="tel"
                  name="電話"
                  type="tel"
                  class="form-control"
                  :class="{ 'is-invalid': errors['電話'] }"
                  placeholder="請輸入電話"
                  :rules="isPhone"
                  v-model.trim="user.tel"
                ></VField>
                <error-message
                  name="電話"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="mb-3">
                <label for="address">地址</label>
                <VField
                  id="address"
                  name="地址"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址"
                  rules="required"
                  v-model.trim="user.address"
                ></VField>
                <error-message
                  name="地址"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">留言</label>
                <textarea
                  id="message"
                  class="form-control"
                  cols="30"
                  rows="5"
                  v-model="message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-100">
                送出訂單
              </button>
            </VForm>
          </div>
        </div>
      </div>
      <loading v-model:active="isLoading" />
    </section>
  </main>
</template>

<script>
import { mapState } from "pinia";
import { CartStore } from "@/stores/CartStore.js";
import Swal from "sweetalert2";
import OrderSrv from "@/service/order-service.js";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import { LoadingStore } from "@/stores/LoadingStore.js";
import { mapActions } from "pinia";

export default {
  components: {
    Loading,
  },
  data() {
    return {
      user: {},
      message: "",
      couponCode: "prefect666",
    };
  },
  methods: {
    ...mapActions(LoadingStore, ["toggleLoading"]),
    ...mapActions(CartStore, ["getCart"]),
    useCoupon() {
      this.toggleLoading();
      OrderSrv.useCoupon(this.couponCode).then((res) => {
        this.toggleLoading();
        if (!res.isSuccess) {
          Swal.fire({
            title: res.msg,
            icon: "error",
          });
        } else {
          this.getCart();
          Swal.fire({
            toast: true,
            title: "已使用折價券！",
            icon: "success",
            timer: 2000,
            position: "top-end",
            showConfirmButton: false,
          });
        }
      });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "請輸入 09 開頭的 10 位電話號碼";
    },
    onSubmit(values, { resetForm }) {
      const data = {
        user: { ...this.user },
        message: this.message,
      };
      this.toggleLoading();
      OrderSrv.orderSubmit(data).then((res) => {
        this.toggleLoading();
        if (!res.isSuccess) {
          Swal.fire({
            title: res.msg,
            icon: "error",
          });
        } else {
          resetForm();
          this.message = "";
          this.getCart();
          this.$router.push(`/orderConfirm/${res.order.orderId}`);
        }
      });
    },
  },
  computed: {
    ...mapState(CartStore, ["carts"]),
    ...mapState(LoadingStore, ["isLoading"])
  },
};
</script>

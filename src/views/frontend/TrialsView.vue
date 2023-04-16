<template>
  <main>
    <section class="bg-homeSection position-relative">
      <div class="bg-prds bg-white">
        <!-- 商品列表主視覺 -->
        <div
          class="bg-prdBanner position-relative"
          style="
            background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/lina-vueapi/1678512915804.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pnckhrydpMiGCh9s0c1zurOQyVc065g7p780s6vn9KzxeQexCupYBlHVAI12AhvG2jmwAwncUB6iB01ll%2BePDiFSheSvgDagP061T6iIIeexufhBtIu3vG5qwvLN9xnyE1S%2BU7dOtjYDtKSOWuYUCuj9LkMj2lOQkgplcWCsXNj2Qj0m%2Fq6JKIXN4FTqB5j8k8zNlnW2csjYqKatTzGvFenwZdSiPwffe%2FXj9B9YF7A3PE4D%2BH2M8x0IELnhmn8bF5bCY7x69pEaF5i8nmMbFqdv%2BVoEcI0FxoPIIf5n0AQOQd4u0IpWb6S%2BAveEC9tKUeW4dGNOqkEqWPSisa4mYg%3D%3D');
          "
        >
          <div class="banner-cta bg-white-opacity position-absolute">
            <div class="d-inline-block">
              <h2 class="font-banner text-primary-dark">立即體驗</h2>
            </div>
          </div>
        </div>
        <!-- 領取試用包 -->
        <div class="container py-3 py-md-5 py-lg-8">
          <div class="row justify-content-center mb-3 mb-lg-5">
            <div class="col-lg-9">
              <ul class="list-unstyled">
                <li
                  data-aos="fade-down"
                  class="mb-4"
                  v-for="(trial, idx) in trials"
                  :key="trial"
                >
                  <div
                    class="d-lg-flex w-lg-65 bg-secondary-light p-3"
                    :class="{
                      'flex-lg-row-reverse': idx % 2 === 0,
                      'ms-auto': idx % 2 === 0,
                    }"
                  >
                    <div class="w-lg-35 text-center">
                      <div class="bg-shadow h-100">
                        <img
                          class="img-fluid object-cover w-100 h-100"
                          :src="trial.imageUrl"
                          :alt="trial.title"
                        />
                      </div>
                    </div>
                    <div class="w-lg-65 d-flex align-items-center bg-shadow">
                      <div
                        class="p-3 p-lg-4 h-100 d-flex align-items-center bg-white-opacity"
                      >
                        <div class="p-3">
                          <h2 class="h4 text-primary-dark fw-normal mb-2">
                            {{ trial.title }}
                          </h2>
                          <p class="mb-3" v-html="trial.content"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <!-- 試用包內容物 -->
              <div class="card rounded-0 border-0 mb-5">
                <div
                  class="card-header rounded-0 fs-4 bg-primary text-center text-primary-dark fw-normal py-2 py-lg-3"
                >
                  試用包內容物
                </div>
                <div class="card-body">
                  <ul class="mb-0">
                    <li>淡斑亮白精華 3m * 1瓶</li>
                    <li>深層保濕精華 3m * 1瓶</li>
                    <li>抗皺撫紋精華 3m * 1瓶</li>
                  </ul>
                </div>
              </div>
              <!-- 申請試用包說明 -->
              <div class="card rounded-0 border-0 mb-5">
                <div
                  class="card-header rounded-0 text-center fs-4 bg-primary text-primary-dark fw-normal py-2 py-lg-3"
                >
                  申請試用包說明
                </div>
                <div class="card-body">
                  <ul class="mb-0">
                    <li>酌收物流費 99 元。</li>
                    <li>申請後 3 日內送達。</li>
                    <li>每人限申請一組試用包。</li>
                  </ul>
                </div>
              </div>
              <!-- 申請試用包資料填寫 -->
              <div>
                <h2
                  class="text-center fs-4 fw-normal border border-primary text-primary-dark bg-primary py-2 py-lg-3 mb-4"
                >
                  申請試用包資料填寫
                </h2>
                <VForm v-slot="{ errors }" @submit="onSubmit">
                  <div class="mb-3">
                    <div class="text-end">
                      <span class="text-danger">*</span>為必填
                    </div>
                    <label for="name">
                      姓名<span class="text-danger">*</span>
                    </label>
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
                    <label for="email">
                      Email<span class="text-danger">*</span>
                    </label>
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
                    <label for="tel">
                      電話<span class="text-danger">*</span>
                    </label>
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
                    <label for="address">
                      地址<span class="text-danger">*</span>
                    </label>
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
                  <button type="submit" class="btn btn-primary-dark w-100">
                    馬上體驗！
                  </button>
                </VForm>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loading v-model:active="isLoading" />
    </section>
  </main>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import OrderSrv from "@/service/order-service.js";
import productSrv from "@/service/product-service.js";
import { mapActions, mapState } from "pinia";
import { CartStore } from "@/stores/CartStore.js";
import { LoadingStore } from "@/stores/LoadingStore.js";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

export default {
  components: {
    Loading,
  },
  data() {
    return {
      user: {},
      message: "",
      trials: [],
    };
  },
  methods: {
    ...mapActions(CartStore, ["getCart", "addToCart", "deleteAllItems"]),
    ...mapActions(LoadingStore, ["toggleLoading"]),
    async getTrial() {
      const prd1 = await productSrv.getProduct("-NPr0DGfmGC2-OvbmvL_");
      this.trials.push(prd1.product);
      const prd2 = await productSrv.getProduct("-NPr0srldDbrv_E_44ml");
      this.trials.push(prd2.product);
      const prd3 = await productSrv.getProduct("-NPrQX1CCPfvFKMpWv_O");
      this.trials.push(prd3.product);
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "請輸入 09 開頭的 10 位電話號碼";
    },
    async onSubmit(values, { resetForm }) {
      const data = {
        user: { ...this.user },
        message: this.message,
      };
      await this.deleteAllItems();
      await this.addToCart("-NQjv0kHAdgP4A0b1Hag");

      this.toggleLoading();
      const order = await OrderSrv.orderSubmit(data);
      await OrderSrv.payOrder(order.order.orderId);
      this.toggleLoading();

      resetForm();
      this.message = "";
      this.getCart();
      this.$router.push(`/orderConfirm/${order.order.orderId}`);
    },
  },
  computed: {
    ...mapState(LoadingStore, ["isLoading", "isDisabled"]),
  },
  mounted() {
    this.getTrial();
    AOS.init({});
  },
};
</script>

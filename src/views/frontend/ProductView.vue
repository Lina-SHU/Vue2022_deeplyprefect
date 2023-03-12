<template>
  <main>
    <section class="bg-homeSection position-relative">
      <div class="bg-prds bg-white">
        <!-- 商品列表主視覺 -->
        <section
          class="bg-prdBanner position-relative"
          style="
            background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/lina-vueapi/1678512915804.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pnckhrydpMiGCh9s0c1zurOQyVc065g7p780s6vn9KzxeQexCupYBlHVAI12AhvG2jmwAwncUB6iB01ll%2BePDiFSheSvgDagP061T6iIIeexufhBtIu3vG5qwvLN9xnyE1S%2BU7dOtjYDtKSOWuYUCuj9LkMj2lOQkgplcWCsXNj2Qj0m%2Fq6JKIXN4FTqB5j8k8zNlnW2csjYqKatTzGvFenwZdSiPwffe%2FXj9B9YF7A3PE4D%2BH2M8x0IELnhmn8bF5bCY7x69pEaF5i8nmMbFqdv%2BVoEcI0FxoPIIf5n0AQOQd4u0IpWb6S%2BAveEC9tKUeW4dGNOqkEqWPSisa4mYg%3D%3D');
          "
        >
          <div class="banner-cta bg-white-opacity position-absolute">
            <div class="d-inline-block">
              <h2 class="font-banner text-primary-dark">保養去</h2>
            </div>
          </div>
        </section>
        <div
          class="d-none d-lg-block bg-whiteBlock bg-white-opacity position-absolute end-0 bottom-0"
        ></div>
        <div class="container position-relative z-index-3 py-7">
          <div class="row justify-content-center">
            <div class="col-md-10 col-md-8">
              <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/">DeeplyPrefect</router-link>
                  </li>
                  <li class="breadcrumb-item">
                    <router-link to="/productlist">保養去</router-link>
                  </li>
                  <li class="breadcrumb-item">
                    {{ product.title }}
                  </li>
                </ol>
              </nav>
              <div class="row mb-5">
                <div class="col-md-6">
                  <div class="ratio ratio-1x1">
                    <img
                      :src="product.imageUrl"
                      :alt="product.title"
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="col-md-6 mt-4 mt-lg-0">
                  <div class="d-flex flex-column justify-content-between h-100">
                    <div>
                      <h1 class="fs-4 text-primary-dark mb-3">
                        {{ product.title }}
                      </h1>
                      <ul class="list-unstyled d-flex mb-4">
                        <li
                          v-for="tag in product?.tags"
                          :key="tag"
                          class="border rounded-pill fs-7 me-2 py-1 px-2"
                        >
                          {{ tag }}
                        </li>
                      </ul>
                      <p v-html="product.descList"></p>
                    </div>
                    <div>
                      <p class="fs-4 text-end">
                        <del class="text-danger fs-7 me-2"
                          >$ {{ product.origin_price }}</del
                        >
                        $ {{ product.price }}
                      </p>
                      <div class="input-group mb-3">
                        <select class="form-select" v-model="qty">
                          <option :value="i" v-for="i in 20" :key="i">
                            {{ i }}
                          </option>
                        </select>
                        <button
                          type="button"
                          class="btn btn-primary-dark"
                          @click.prevent="addToCart(product.id, qty)"
                          :disabled="isDisabled"
                        >
                          加入購物車
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 商品詳情 -->
              <h3
                class="h5 fw-normal border-bottom pb-1 text-primary-dark mb-3"
              >
                商品詳情
              </h3>
              <p class="mb-5" v-html="product.contentList"></p>
              <!-- 購物須知 -->
              <h3
                class="h5 fw-normal border-bottom pb-1 text-primary-dark mb-3"
              >
                購物須知
              </h3>
              <ul class="mb-7">
                <li>
                  收到商品後，若有發現包裝不完整，建議您拍照存證並與我們聯繫：客服專線：02-218-8965。
                </li>
                <li>
                  依消費者保護法規定，商品皆享有七天鑑賞期(注意：鑑賞期不等於試用期)，須以完整包裝進行退貨處理。
                </li>
                <li>
                  提醒您：當付款完成後，我們不會主動以電話方式聯繫您進行 ATM
                  操作修正款項或詢問信用卡等資料，若有接獲請撥打 165
                  反詐騙專線求證，以確保您的權益。
                </li>
              </ul>
              <!-- 其他推薦商品 -->
              <h3 class="fs-4 text-center text-primary-dark fw-normal mb-5">
                經典暢銷款
              </h3>
              <HotProduct></HotProduct>
            </div>
          </div>
          <loading v-model:active="isLoading" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import Swal from "sweetalert2";
import { mapState, mapActions } from "pinia";
import { CartStore } from "@/stores/CartStore.js";
import { LoadingStore } from "@/stores/LoadingStore.js";
import HotProduct from "../../components/frontend/HotProduct.vue";
import productSrv from "../../service/product-service.js";

export default {
  components: {
    Loading,
    HotProduct,
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
      this.id = this.$route.params.id;
      productSrv.getProduct(this.id).then((data) => {
        if (data.isSuccess) {
          this.toggleLoading();
          this.product = data.product;
          // 描述
          const content = this.product.content
            .split("<br>")
            .map((item) => `<li>${item}</li>`)
            .join("");
          this.product.contentList = `<ul>${content}</ul>`;
          // 內容
          const desc = this.product.description
            .split("<br>")
            .map((item) => `<li>${item}</li>`)
            .join("");
          this.product.descList = `<ul>${desc}</ul>`;
        } else {
          Swal.fire({
            title: data.msg,
            icon: "error",
          });
        }
      });
    },
  },
  computed: {
    ...mapState(LoadingStore, ["isLoading", "isDisabled"]),
  },
  watch: {
    $route(to) {
      if (to.fullPath.match("/product/")) {
        this.getProduct();
      }
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>

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
        <!-- 商品列表 -->
        <div
          class="d-none d-lg-block bg-whiteBlock bg-white-opacity position-absolute end-0 bottom-0"
        ></div>
        <div class="container bg-white position-relative z-index-3 py-5">
          <div class="row">
            <div class="col-md-3">
              <ul class="list-unstyled position-sticky top-0 left-0 w-75">
                <li class="mb-45">
                  <h3 class="fs-5 border-bottom text-primary-dark pb-1 mb-3">
                    全部商品
                  </h3>
                  <router-link to="/productlist">全部商品</router-link>
                </li>
                <li class="mb-45">
                  <h3 class="fs-5 border-bottom text-primary-dark pb-1 mb-3">
                    系列商品
                  </h3>
                  <router-link
                    to="/productlist?category=淡斑亮白系列"
                    class="d-block mb-3"
                    >淡斑亮白系列</router-link
                  >
                  <router-link
                    to="/productlist?category=深層保濕系列"
                    class="d-block mb-3"
                    >深層保濕系列</router-link
                  >
                  <router-link
                    to="/productlist?category=頂級呵護系列"
                    class="d-block"
                    >頂級呵護系列</router-link
                  >
                </li>
                <li class="mb-4">
                  <h3 class="fs-5 border-bottom text-primary-dark pb-1 mb-3">
                    商品分類
                  </h3>
                  <router-link
                    to="/productlist?category=精華水"
                    class="d-block mb-3"
                    >精華水</router-link
                  >
                  <router-link
                    to="/productlist?category=精華液"
                    class="d-block mb-3"
                    >精華液</router-link
                  >
                  <router-link
                    to="/productlist?category=精華霜"
                    class="d-block mb-3"
                    >精華霜</router-link
                  >
                  <router-link to="/productlist?category=洗顏乳" class="d-block"
                    >洗顏乳</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="col-md-9">
              <div class="row gy-4">
                <h3 class="fs-5 text-primary-dark mb-3">{{ productTitle }}</h3>
                <div
                  class="col-6 col-md-4 col-lg-3"
                  v-for="prd in productList"
                  :key="prd.id"
                >
                  <router-link
                    :to="`/product/${prd.id}`"
                    class="card text-dark border-0 rounded-0"
                  >
                    <div class="ratio ratio-1x1">
                      <img
                        :src="prd.imageUrl"
                        class="img-fluid"
                        alt="prd.title"
                      />
                    </div>
                    <div class="card-body p-2">
                      <h5 class="fs-6 card-title">{{ prd.title }}</h5>
                      <p class="card-text">${{ prd.price }}</p>
                    </div>
                  </router-link>
                </div>
              </div>
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
import { CartStore } from "@/stores/CartStore.js";
import { LoadingStore } from "@/stores/LoadingStore.js";
import { mapState, mapActions } from "pinia";
import productSrv from "../../service/product-service.js";

export default {
  components: {
    Loading,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    ...mapActions(CartStore, ["addToCart"]),
    ...mapActions(LoadingStore, ["toggleLoading"]),
    getProducts() {
      this.toggleLoading();
      productSrv.getProducts().then((data) => {
        if (data.isSuccess) {
          this.toggleLoading();
          this.products = data.products;
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
    productList() {
      if (!this.$route.query.category) return this.products;
      const result = this.products.filter((item) =>
        item.tags.includes(this.$route.query.category)
      );
      if (!result.length) return this.products;
      return result;
    },
    productTitle() {
      if (!this.$route.query.category) return "全部商品";
      const categories = [
        "淡斑亮白系列",
        "深層保濕系列",
        "頂級呵護系列",
        "精華水",
        "精華液",
        "精華霜",
        "洗顏乳",
      ];
      if (!categories.includes(this.$route.query.category)) return "全部商品";
      return this.$route.query.category;
    },
  },
  mounted() {
    this.getProducts();
    console.log(this.$route.query.category);
  },
};
</script>

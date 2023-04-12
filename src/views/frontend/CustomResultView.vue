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
              <h2 class="font-banner text-primary-dark">客製保養推薦</h2>
            </div>
          </div>
        </div>
        <!-- 客製保養推薦 -->
        <div class="container py-5 py-lg-8">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <h2 class="fs-4 text-primary-dark mb-4 mb-md-5">
                誠摯為您推薦以下商品...
              </h2>
              <div class="row gy-4 mb-4 mb-lg-5">
                <div
                  class="col-6 col-lg-4 col-xl-3"
                  v-for="prd in result"
                  :key="prd.id"
                >
                  <CardComponent :prd="prd"></CardComponent>
                </div>
              </div>
              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-outline-primary-dark w-50"
                  @click="resetCustom"
                >
                  重新推薦
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Loading v-model:active="isLoading" />
  </main>
</template>

<script>
import PrdSrv from "@/service/product-service.js";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import { mapActions, mapState } from "pinia";
import { LoadingStore } from "@/stores/LoadingStore.js";
import CardComponent from "@/components/frontend/CardComponent.vue";

export default {
  components: {
    Loading,
    CardComponent,
  },
  data() {
    return {
      products: [],
      result: [],
      ans: {},
    };
  },
  methods: {
    ...mapActions(LoadingStore, ["toggleLoading"]),
    getProducts() {
      this.toggleLoading();
      PrdSrv.getProducts().then((data) => {
        if (data.isSuccess) {
          this.products = data.products;
          const category = this.ans.q4;
          this.toggleLoading();
          switch (category) {
            case "4-1": {
              this.result = this.products.filter(
                (item) => item.category === "保濕"
              );
              break;
            }
            case "4-2": {
              this.result = this.products.filter(
                (item) => item.category === "淡斑亮白"
              );
              break;
            }
            case "4-3": {
              this.result = this.products.filter(
                (item) => item.category === "頂級呵護"
              );
              break;
            }
            case "4-4": {
              this.result = this.products.filter(
                (item) => item.category === "頂級呵護"
              );
              break;
            }
            default: {
              this.result = this.products.filter(
                (item) => item.category === "保濕"
              );
              break;
            }
          }
        }
      });
    },
    resetCustom() {
      localStorage.removeItem("custom");
      this.$router.push("/custom");
    }
  },
  computed: {
    ...mapState(LoadingStore, ["isLoading"]),
  },
  mounted() {
    const obj = localStorage.getItem("custom");
    if (!obj) {
      this.$router.push("/custom");
      return
    };
    this.ans = JSON.parse(obj);
    this.getProducts();
  },
};
</script>

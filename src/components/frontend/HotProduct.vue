<template>
  <swiper
    :slidesPerView="1.5"
    :spaceBetween="20"
    :breakpoints="{
      576: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      996: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }"
  >
    <swiper-slide v-for="prd in products" :key="prd.id">
      <router-link
        :to="`/product/${prd.id}`"
        class="card text-dark border-0 rounded-0"
      >
        <div class="ratio ratio-1x1">
          <img :src="prd.imageUrl" class="img-fluid" alt="prd.title" />
        </div>
        <div class="card-body p-2">
          <h5 class="fs-6 card-title">{{ prd.title }}</h5>
          <p class="card-text">${{ prd.price }}</p>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import Swal from "sweetalert2";
import productSrv from "../../service/product-service.js";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      products: "",
    };
  },
  methods: {
    getProducts() {
      productSrv.getProducts().then((data) => {
        if (data.isSuccess) {
          this.products = data.products.slice(0, 4);
        } else {
          Swal.fire({
            title: data.msg,
            icon: "error",
          });
        }
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

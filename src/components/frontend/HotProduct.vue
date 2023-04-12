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
      <CardComponent :prd="prd"></CardComponent>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import Swal from "sweetalert2";
import productSrv from "@/service/product-service.js";
import CardComponent from "@/components/frontend/CardComponent.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    CardComponent
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

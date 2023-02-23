import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";
import { LoadingStore } from "./LoadingStore.js";
const { VITE_URL, VITE_PATH } = import.meta.env;

export const CartStore = defineStore("CartStore", {
  actions: {
    addToCart(id, qty = 1) {
      const loading = LoadingStore();
      const obj = {
        product_id: id,
        qty,
      };

      const url = `${VITE_URL}api/${VITE_PATH}/cart`;
      loading.toggleDisabled();
      axios
        .post(url, { data: obj })
        .then(() => {
          loading.toggleDisabled();
          Swal.fire({
            toast: true,
            title: "已將商品加入到購物車！",
            icon: "success",
            timer: 2000,
            position: "top-end",
            showConfirmButton: false,
          });
        })
        .catch((err) => {
          Swal.fire({
            title: err.response.data.message,
            icon: "error",
          });
        });
    },
  },
});

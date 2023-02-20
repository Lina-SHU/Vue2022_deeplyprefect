import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";
const { VITE_URL, VITE_PATH } = import.meta.env;

export const CartStore = defineStore("CartStore", {
  actions: {
    addToCart(id, qty = 1) {
      const obj = {
        product_id: id,
        qty,
      };

      const url = `${VITE_URL}api/${VITE_PATH}/cart`;

      axios
        .post(url, { data: obj })
        .then(() => {
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

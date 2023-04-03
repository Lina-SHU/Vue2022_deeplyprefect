import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";
import { LoadingStore } from "./LoadingStore.js";
const { VITE_URL, VITE_PATH } = import.meta.env;

export const CartStore = defineStore("CartStore", {
  state: () => ({
    carts: [],
  }),
  getters: {
    cartNum: ({ carts }) => {
      return carts.carts?.length || 0;
    },
  },
  actions: {
    async addToCart(id, qty = 1) {
      try {
        const loading = LoadingStore();
        const obj = {
          product_id: id,
          qty,
        };

        const url = `${VITE_URL}api/${VITE_PATH}/cart`;
        loading.toggleDisabled();
        await axios.post(url, { data: obj });

        loading.toggleDisabled();
        this.getCart();
        if (id !== "-NQjv0kHAdgP4A0b1Hag") {
          // 試用包不跳出加入購物車視窗
          Swal.fire({
            toast: true,
            title: "已將商品加入到購物車！",
            icon: "success",
            timer: 2000,
            position: "top-end",
            showConfirmButton: false,
          });
        }
      } catch (err) {
        Swal.fire({
          title: err.response.data.message,
          icon: "error",
        });
      }
    },
    getCart() {
      const loading = LoadingStore();
      const url = `${VITE_URL}api/${VITE_PATH}/cart`;
      loading.toggleDisabled();
      axios
        .get(url)
        .then((res) => {
          loading.toggleDisabled();
          this.carts = res.data.data;
        })
        .catch((err) => {
          Swal.fire({
            title: err.response.data.message,
            icon: "error",
          });
        });
    },
    changeCartItem(cart) {
      const loading = LoadingStore();
      const url = `${VITE_URL}api/${VITE_PATH}/cart/${cart.id}`;
      loading.toggleDisabled();
      axios
        .put(url, {
          data: {
            product_id: cart.product_id,
            qty: cart.qty,
          },
        })
        .then(() => {
          loading.toggleDisabled();
          this.getCart();
        })
        .catch((err) => {
          Swal.fire({
            title: err.response.data.message,
            icon: "error",
          });
        });
    },
    deleteCartItem(id) {
      const loading = LoadingStore();
      const url = `${VITE_URL}api/${VITE_PATH}/cart/${id}`;
      loading.toggleDisabled();
      axios
        .delete(url)
        .then(() => {
          loading.toggleDisabled();
          this.getCart();
          Swal.fire({
            toast: true,
            title: "已刪除！",
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
    async deleteAllItems() {
      try {
        const url = `${VITE_URL}api/${VITE_PATH}/carts`;
        await axios.delete(url);
        this.getCart();
        return
      } catch (err) {
        return
      }
    }
  },
});

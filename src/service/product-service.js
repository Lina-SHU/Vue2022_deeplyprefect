import axios from "axios";
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  getProducts: async function () {
    try {
      const url = `${VITE_URL}api/${VITE_PATH}/products/all`;
      const res = await axios.get(url);
      return {
        isSuccess: true,
        products: res.data.products,
      };
    } catch (error) {
      return {
        isSuccess: false,
        msg: error.response.data.message,
      };
    }
  },
  getProduct: async function (id) {
    try {
      const url = `${VITE_URL}api/${VITE_PATH}/product/${id}`;
      const res = await axios.get(url);
      return {
        isSuccess: true,
        product: res.data.product,
      };
    } catch (error) {
      return {
        isSuccess: false,
        msg: error.response.data.message
      }
    }
  }
};

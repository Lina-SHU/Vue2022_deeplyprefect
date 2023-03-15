import axios from "axios";
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  useCoupon: async function (couponCode) {
    try {
      const url = `${VITE_URL}api/${VITE_PATH}/coupon`;
      const res = await axios.post(url, { data: { code: couponCode } });
      return {
        isSuccess: true,
        coupon: res.data,
      };
    } catch (error) {
      return {
        isSuccess: false,
        msg: error.response.data.message,
      };
    }
  },
  orderSubmit: async function (data) {
    // -NQ_DvbMhlOsWIftBraO
    try {
      const url = `${VITE_URL}api/${VITE_PATH}/order`;
      const res = await axios.post(url, { data });
      return {
        isSuccess: true,
        order: res.data,
      };
    } catch (error) {
      return {
        isSuccess: false,
        msg: error.response.data.message,
      };
    }
  },
  getOrder: async function (orderId) {
    try {
      const url = `${VITE_URL}api/${VITE_PATH}/order/${orderId}`;
      const res = await axios.get(url);
      return {
        isSuccess: true,
        order: res.data,
      };
    } catch (error) {
      return {
        isSuccess: false,
        msg: error.response.data.message,
      };
    }
  },
  payOrder: async function (orderId) {
    try {
      const url = `${VITE_URL}api/${VITE_PATH}/pay/${orderId}`;
      const res = await axios.post(url);
      return {
        isSuccess: true,
        order: res.data,
      };
    } catch (error) {
      return {
        isSuccess: false,
        msg: error.response.data.message,
      };
    }
  },
};

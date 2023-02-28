<template>
  <div class="modal" ref="editCouponModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title fs-5">
            {{ temp.id ? "編輯" : "新增" }}優惠券
          </h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="couponName" class="form-label">名稱</label>
            <input
              type="text"
              class="form-control"
              id="couponName"
              v-model="temp.title"
            />
          </div>
          <div class="mb-3">
            <label for="couponCode" class="form-label">代碼</label>
            <input
              type="text"
              class="form-control"
              id="couponCode"
              v-model.trim="temp.code"
            />
          </div>
          <div class="mb-3">
            <label for="couponDiscount" class="form-label">折扣數</label>
            <input
              type="number"
              class="form-control"
              id="couponDiscount"
              v-model.number="temp.percent"
              max="100"
            />
          </div>
          <div class="mb-3">
            <label for="couponDiscount" class="form-label">到期日</label>
            <input
              type="date"
              class="form-control"
              id="couponDiscount"
              v-model="date"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                id="is_enabled"
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                v-model="temp.is_enabled"
              />
              <label class="form-check-label" for="is_enabled">是否啟用</label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="editCoupon">
            {{ temp.id ? "編輯" : "新增" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import Modal from "bootstrap/js/dist/modal";
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  props: ["tempCoupon"],
  data() {
    return {
      editMsg: "",
      temp: {},
      date: "",
    };
  },
  methods: {
    openModal() {
      this.editMsg.show();
    },
    closeModal() {
      this.editMsg.hide();
    },
    editCoupon() {
      // 
      if (this.temp.percent > 100 || this.temp.percent < 0) {
        Swal.fire({
          title: "優惠券折扣需在 100 內！",
          icon: "warning",
        });
        return
      }

      let url = `${VITE_URL}api/${VITE_PATH}/admin/coupon/${this.temp.id}`;
      let method = "put";
      if (!this.temp.id) {
        url = `${VITE_URL}api/${VITE_PATH}/admin/coupon`;
        method = "post";
      }
      this.temp.due_date = Math.floor(new Date(this.date) / 1000);
      this.$http[method](url, { data: this.temp }).then(() => {
        this.$emit("getCoupons");
        this.closeModal();
        if (!this.temp.id) {
          Swal.fire({
            toast: true,
            title: "新增優惠券成功！",
            icon: "success",
            timer: 2000,
            position: "top-end",
            showConfirmButton: false,
          });
        } else {
          Swal.fire({
            toast: true,
            title: "編輯優惠券成功！",
            icon: "success",
            timer: 2000,
            position: "top-end",
            showConfirmButton: false,
          });
        }
        this.temp = {};
      });
    },
  },
  watch: {
    tempCoupon() {
      this.temp = { ...this.tempCoupon };
      if (this.temp.due_date) {
        this.date = `${new Date(this.temp.due_date * 1000).getFullYear()}-${(
          "0" +
          (new Date(this.temp.due_date * 1000).getMonth() + 1)
        ).slice(-2)}-${(
          "0" + new Date(this.temp.due_date * 1000).getDate()
        ).slice(-2)}`;
      } else {
        this.date = "";
      }
    },
  },
  mounted() {
    this.editMsg = new Modal(this.$refs.editCouponModal);
  },
};
</script>

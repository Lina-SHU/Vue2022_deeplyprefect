<template>
  <div class="modal" ref="editOrderModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title fs-5">編輯訂單</h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p class="mb-4">訂單編號： {{ temp.id }}</p>
          <h3 class="fs-6 border-bottom pb-2 mb-3">收件人資訊</h3>
          <form class="row g-3 mb-5">
            <div class="col-md-6">
              <label for="receiverName" class="form-label">姓名</label>
              <input
                type="texet"
                class="form-control"
                id="receiverName"
                v-model="temp.user.name"
              />
            </div>
            <div class="col-md-6">
              <label for="receiverTel" class="form-label">電話</label>
              <input
                type="tel"
                class="form-control"
                id="receiverTel"
                v-model="temp.user.tel"
              />
            </div>
            <div class="col-12">
              <label for="receiverEmail" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="receiverEmail"
                v-model="temp.user.email"
              />
            </div>
            <div class="col-12">
              <label for="address" class="form-label">地址</label>
              <input
                type="text"
                class="form-control"
                id="address"
                v-model="temp.user.address"
              />
            </div>
            <div class="col-12">
              <label for="message" class="form-label">留言</label>
              <textarea
                id="message"
                class="form-control"
                cols="30"
                rows="3"
                v-model="temp.message"
              ></textarea>
            </div>
          </form>
          <h3 class="fs-6 border-bottom pb-2 mb-3">收件人資訊</h3>
          <div class="mb-3">
            <label for="orderAmount" class="form-label">訂單總金額</label>
            <input
              type="number"
              class="form-control"
              id="orderAmount"
              v-model="temp.total"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                id="is_enabled"
                class="form-check-input"
                type="checkbox"
                v-model="temp.is_paid"
              />
              <label class="form-check-label" for="is_enabled">是否付款</label>
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
          <button type="button" class="btn btn-primary" @click="editOrder">
            編輯
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
  props: ["tempOrder"],
  data() {
    return {
      editModal: "",
      temp: {
        user: {},
      },
    };
  },
  methods: {
    openModal() {
      this.editModal.show();
    },
    closeModal() {
      this.editModal.hide();
    },
    editOrder() {
      const url = `${VITE_URL}api/${VITE_PATH}/admin/order/${this.temp.id}`;
      this.$http
        .put(url, { data: this.temp })
        .then(() => {
          Swal.fire({
            toast: true,
            title: "編輯訂單成功！",
            icon: "success",
            timer: 2000,
            position: "top-end",
            showConfirmButton: false,
          });
          this.$emit("getOrders");
          this.closeModal();
        })
        .catch((err) => {
          Swal.fire({
            title: err.response.data.message,
            icon: "error",
          });
        });
    },
  },
  watch: {
    tempOrder() {
      this.temp = { ...this.tempOrder };
    },
  },
  mounted() {
    this.editModal = new Modal(this.$refs.editOrderModal);
  },
};
</script>

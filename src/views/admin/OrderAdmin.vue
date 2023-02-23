<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h1 class="fs-5 mb-3">訂單管理</h1>
        <table class="table">
          <thead>
            <tr>
              <th>訂單編號</th>
              <th>收件人 Email</th>
              <th>訂購日期</th>
              <th>是否付款</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orderList" :key="order.id">
              <td>{{ order.id }}</td>
              <td>{{ order.user.email }}</td>
              <td>
                {{ new Date(order.create_at * 1000).toLocaleDateString() }}
                {{ new Date(order.create_at * 1000).toLocaleTimeString() }}
              </td>
              <td>{{ order.is_paid ? "是" : "否" }}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-sm btn-primary"
                  @click="openModal(order)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-danger ms-1"
                  @click="deleteOrder(order.id)"
                >
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <pagination
          class="mt-2"
          :pages="pages"
          :get-orders="getOrders"
        ></pagination>
      </div>
    </div>

    <!-- 編輯訂單 -->
    <editModal
      ref="editMsg"
      :temp-order="tempOrder"
      @get-orders="getOrders"
    ></editModal>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import pagination from "@/components/admin/PaginationView.vue";
import editModal from "@/components/admin/EditOrderModal.vue";
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  components: {
    pagination,
    editModal,
  },
  data() {
    return {
      orderList: [],
      pages: {},
      tempOrder: {}
    };
  },
  methods: {
    getOrders(page = 1) {
      const url = `${VITE_URL}api/${VITE_PATH}/admin/orders?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.orderList = res.data.orders;
          this.pages = res.data.pagination;
        })
        .catch((err) => {
          Swal.fire({
            title: err.response.data.message,
            icon: "error",
          });
        });
    },
    deleteOrder(id) {
      Swal.fire({
        title: "確認是否刪除此訂單？",
        showCancelButton: true,
        confirmButtonText: "刪除",
        cancelButtonText: "取消",
      }).then((result) => {
        if (result.isConfirmed) {
          const url = `${VITE_URL}api/${VITE_PATH}/admin/order/${id}`;
          this.$http
            .delete(url)
            .then(() => {
              this.getOrders();
              Swal.fire({
                toast: true,
                title: "已刪除該筆訂單",
                icon: "success",
                timer: 2000,
                showConfirmButton: false,
              });
            })
            .catch((err) => {
              Swal.fire({
                title: err.reponse.data.message,
                icon: "error",
              });
            });
        }
      });
    },
    openModal(order) {
      this.tempOrder = { ...order };
      this.$refs.editMsg.openModal();
    }
  },
  mounted() {
    this.getOrders();
  },
};
</script>

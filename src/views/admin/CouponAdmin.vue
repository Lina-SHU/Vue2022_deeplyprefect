<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h1 class="fs-5 mb-3">優惠券管理</h1>
        <div class="text-end">
          <button
            type="button"
            class="btn btn-primary"
            @click="openModal('new')"
          >
            建立新的優惠券
          </button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>優惠券名稱</th>
              <th>優惠券代碼</th>
              <th>折扣數</th>
              <th>到期日</th>
              <th>是否啟用</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="coupon in couponList" :key="coupon.id">
              <td>{{ coupon.title }}</td>
              <td>{{ coupon.code }}</td>
              <td>{{ coupon.percent }}</td>
              <td>
                {{ new Date(coupon.due_date * 1000).toLocaleDateString() }}
              </td>
              <td>{{ coupon.is_enabled ? "是" : "否" }}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-sm btn-primary"
                  @click="openModal('edit', coupon)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-danger ms-1"
                  @click="deleteCoupon(coupon.id)"
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
          :get-coupons="getCoupons"
        ></pagination>
      </div>
    </div>

    <!-- 新增/編輯優惠券 -->
    <editModal
      ref="editMsg"
      :temp-coupon="tempCoupon"
      @get-coupons="getCoupons"
    ></editModal>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import pagination from "@/components/admin/PaginationView.vue";
import editModal from "@/components/admin/EditCouponModal.vue";
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  components: {
    pagination,
    editModal,
  },
  data() {
    return {
      couponList: [],
      pages: {},
      tempCoupon: {},
    };
  },
  methods: {
    getCoupons(page = 1) {
      const url = `${VITE_URL}api/${VITE_PATH}/admin/coupons?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.couponList = res.data.coupons;
          this.pages = res.data.pagination;
        })
        .catch((err) => {
          Swal.fire({
            title: err.response.data.message,
            icon: "error",
          });
        });
    },
    deleteCoupon(id) {
      const url = `${VITE_URL}api/${VITE_PATH}/admin/coupon/${id}`;
      Swal.fire({
        title: "確認是否刪除此優惠券？",
        showCancelButton: true,
        confirmButtonText: "刪除",
        cancelButtonText: "取消",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$http
            .delete(url)
            .then(() => {
              this.getCoupons();
              Swal.fire({
                toast: true,
                title: "已刪除優惠券",
                icon: "success",
                timer: 2000,
                showConfirmButton: false,
              });
            })
            .catch((err) => {
              Swal.fire({
                title: err.response.data.message,
                icon: "error",
              });
            });
        }
      });
    },
    openModal(value, coupon) {
      if (value === "edit") {
        this.tempCoupon = { ...coupon };
      } else if (value === "new") {
        this.tempCoupon = {};
      }

      this.$refs.editMsg.openModal();
    },
  },
  mounted() {
    this.getCoupons();
  },
};
</script>

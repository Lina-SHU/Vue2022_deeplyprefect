<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h1 class="fs-5 mb-3">產品列表</h1>
        <div class="text-end">
          <button
            type="button"
            class="btn btn-primary"
            @click="openModal('new')"
          >
            建立新的產品
          </button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>分類</th>
              <th>產品名稱</th>
              <th>原價</th>
              <th>售價</th>
              <th>是否啟用</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in productList" :key="product.id">
              <td>{{ product.category }}</td>
              <td>{{ product.title }}</td>
              <td>{{ product.origin_price }}</td>
              <td>{{ product.price }}</td>
              <td>
                <p>{{ product.is_enabled === 1 ? "啟用" : "未啟用" }}</p>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-sm btn-primary"
                  @click="openModal('edit', product)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-danger ms-1"
                  @click="deleteProduct(product.id)"
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
          :get-products="getProducts"
        ></pagination>
      </div>
    </div>

    <!-- 新增/編輯產品 -->
    <editModal
      ref="editMsg"
      :temp-product="tempProduct"
      @get-product="getProducts"
    ></editModal>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import pagination from "@/components/PaginationView.vue";
import editModal from "@/components/EditModal.vue";
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  components: {
    pagination,
    editModal,
  },
  data() {
    return {
      productList: [],
      pages: 1,
      tempProduct: {},
    };
  },
  methods: {
    getProducts(page = 1) {
      const url = `${VITE_URL}api/${VITE_PATH}/admin/products?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.productList = res.data.products;
          this.pages = res.data.pagination;
        })
        .catch((err) => {
          Swal.fire({
            title: err.response.data.message,
            icon: "error",
          });
        });
    },
    openModal(value, prd) {
      if (value === "edit") {
        this.tempProduct = { ...prd };
        this.$refs.editMsg.openModal();
        if (!this.tempProduct.imagesUrl) {
          this.tempProduct = {
            ...this.tempProduct,
            imagesUrl: [],
          };
        }
        if (!this.tempProduct.tags) {
          this.tempProduct = {
            ...this.tempProduct,
            tags: [],
          };
        }
      } else if (value === "new") {
        this.$refs.editMsg.openModal();
        this.tempProduct = { imagesUrl: [], tags: [] };
      }
    },
    deleteProduct(id) {
      Swal.fire({
        title: "確認是否刪除此商品？",
        showCancelButton: true,
        confirmButtonText: "刪除",
      }).then((result) => {
        if (result.isConfirmed) {
          const url = `${VITE_URL}api/${VITE_PATH}/admin/product/${id}`;
          this.$http
            .delete(url)
            .then(() => {
              this.getProducts();
              Swal.fire({
                toast: true,
                title: "已刪除產品！",
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
        }
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

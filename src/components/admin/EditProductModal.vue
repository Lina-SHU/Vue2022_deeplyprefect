<template>
  <div class="modal" ref="editModal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title fs-5">{{ temp.id ? "編輯" : "新增" }}商品</h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <VForm v-slot="{ errors }" @submit="editProduct">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-3">
                  <div class="mb-2">
                    <label for="formFile" class="form-label"
                      >輸入圖片網址</label
                    >
                    <div class="input-group">
                      <VField
                        type="file"
                        class="form-control"
                        id="formFile"
                        @change="getFile($event)"
                        name="圖片網址"
                        :class="{ 'is-invalid': errors['圖片網址'] }"
                        rules="required"
                      />
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        @click="updateFile"
                      >
                        上傳檔案
                      </button>
                    </div>
                    <error-message
                      name="圖片網址"
                      class="invalid-feedback"
                    ></error-message>
                  </div>
                  <img
                    class="img-fluid"
                    :src="temp.imageUrl"
                    :alt="temp.title"
                  />
                </div>

                <template v-if="Array.isArray(temp.tags)">
                  <h3 class="fs-6 mb-3">輸入標籤</h3>
                  <div
                    v-for="(tag, index) in temp.tags"
                    :key="tag + '789'"
                    class="mb-2"
                  >
                    <input
                      type="text"
                      class="form-control"
                      v-model="temp.tags[index]"
                    />
                  </div>
                  <div
                    v-if="
                      !temp?.tags?.length || temp.tags[temp.tags.length - 1]
                    "
                    class="mt-3"
                  >
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm d-block w-100"
                      @click="temp.tags.push('')"
                    >
                      新增標籤
                    </button>
                  </div>
                  <div v-else class="mt-3">
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm d-block w-100"
                      @click="temp.tags.pop()"
                    >
                      刪除標籤
                    </button>
                  </div>
                </template>
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <VField
                    id="title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入標題"
                    v-model.trim="temp.title"
                    name="標題"
                    :class="{ 'is-invalid': errors['標題'] }"
                    rules="required"
                  />
                  <error-message
                    name="標題"
                    class="invalid-feedback"
                  ></error-message>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <VField
                      id="category"
                      type="text"
                      class="form-control"
                      placeholder="請輸入分類"
                      v-model.trim="temp.category"
                      name="分類"
                      :class="{ 'is-invalid': errors['分類'] }"
                      rules="required"
                    />
                    <error-message
                      name="分類"
                      class="invalid-feedback"
                    ></error-message>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="unit" class="form-label">單位</label>
                    <VField
                      id="unit"
                      type="text"
                      class="form-control"
                      placeholder="請輸入單位"
                      v-model.trim="temp.unit"
                      name="單位"
                      :class="{ 'is-invalid': errors['單位'] }"
                      rules="required"
                    />
                    <error-message
                      name="單位"
                      class="invalid-feedback"
                    ></error-message>
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <VField
                      id="origin_price"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入原價"
                      v-model.number="temp.origin_price"
                      name="原價"
                      :class="{ 'is-invalid': errors['原價'] }"
                      rules="required"
                    />
                    <error-message
                      name="原價"
                      class="invalid-feedback"
                    ></error-message>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <VField
                      id="price"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入售價"
                      v-model.number="temp.price"
                      name="售價"
                      :class="{ 'is-invalid': errors['售價'] }"
                      rules="required"
                    />
                    <error-message
                      name="售價"
                      class="invalid-feedback"
                    ></error-message>
                  </div>
                </div>
                <hr />

                <div class="mb-3">
                  <label for="description" class="form-label">商品描述</label>
                  <textarea
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="請輸商品描述"
                    v-model.trim="temp.description"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <textarea
                    id="content"
                    type="text"
                    class="form-control"
                    placeholder="請輸入說明內容"
                    v-model.trim="temp.content"
                  ></textarea>
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
                    <label class="form-check-label" for="is_enabled"
                      >是否啟用</label
                    >
                  </div>
                </div>
              </div>
            </div>

            <template v-if="Array.isArray(temp.imagesUrl)">
              <h3 class="fs-6 mb-3">輸入多張圖片網址</h3>
              <div class="row">
                <div
                  v-for="(image, index) in temp.imagesUrl"
                  :key="image"
                  class="col-md-4"
                >
                  <input
                    type="text"
                    v-model="temp.imagesUrl[index]"
                    class="form-control"
                  />
                  <img
                    :src="temp.imagesUrl[index]"
                    alt="多張圖片網址"
                    class="img-fluid"
                    v-if="temp.imagesUrl[index]"
                  />
                </div>
              </div>
              <div
                v-if="
                  !temp?.imagesUrl?.length ||
                  temp.imagesUrl[temp.imagesUrl.length - 1]
                "
                class="mt-3"
              >
                <button
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="temp.imagesUrl.push('')"
                >
                  新增圖片
                </button>
              </div>
              <div v-else class="mt-3">
                <button
                  class="btn btn-outline-danger btn-sm d-block w-100"
                  @click="temp.imagesUrl.pop()"
                >
                  刪除圖片
                </button>
              </div>
            </template>
            <div class="text-end mt-5">
              <button
                type="button"
                class="btn btn-outline-primary-dark"
                data-bs-dismiss="modal"
              >
                取消
              </button>
              <button type="submit" class="btn btn-primary-dark ms-3">
                {{ temp.id ? "編輯" : "新增" }}
              </button>
            </div>
          </VForm>
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
  props: ["tempProduct"],
  data() {
    return {
      fileData: "",
      temp: [],
      editMsg: "",
    };
  },
  methods: {
    openModal() {
      this.editMsg.show();
    },
    closeModal() {
      this.editMsg.hide();
    },
    getFile(event) {
      this.fileData = event.target.files[0];
    },
    updateFile() {
      const formData = new FormData();
      formData.append("file-to-upload", this.fileData);
      const url = `${VITE_URL}api/${VITE_PATH}/admin/upload`;
      this.$http
        .post(url, formData)
        .then((res) => {
          this.temp.imageUrl = res.data.imageUrl;
        })
        .catch((err) => {
          Swal.fire({
            title: err.response.data.message,
            icon: "error",
          });
        });
    },
    editProduct() {
      // 編輯
      let url = `${VITE_URL}api/${VITE_PATH}/admin/product/${this.temp.id}`;
      let method = "put";
      if (!this.temp.id) {
        // 新增
        url = `${VITE_URL}api/${VITE_PATH}/admin/product`;
        method = "post";
      }

      this.$http[method](url, { data: this.temp })
        .then(() => {
          this.$emit("getProduct");
          this.closeModal();
          if (!this.temp.id) {
            Swal.fire({
              toast: true,
              title: "新增商品成功！",
              icon: "success",
              timer: 2000,
              position: "top-end",
              showConfirmButton: false,
            });
          } else {
            Swal.fire({
              toast: true,
              title: "編輯商品成功！",
              icon: "success",
              timer: 2000,
              position: "top-end",
              showConfirmButton: false,
            });
          }
          this.temp = {};
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
    tempProduct() {
      this.temp = { ...this.tempProduct };
    },
  },
  mounted() {
    // 新增/編商品視窗
    this.editMsg = new Modal(this.$refs.editModal);
  },
};
</script>

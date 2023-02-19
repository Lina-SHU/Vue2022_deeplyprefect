<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <h2 class="fs-4 mb-3">後台管理平台</h2>
        <VForm v-slot="{ errors }" @submit="login">
          <div class="form-floating mb-3">
            <VField
              type="email"
              class="form-control"
              id="email"
              placeholder="請輸入帳號"
              v-model.trim="user.username"
              name="email"
              :class="{ 'is-invalid': errors['email'] }"
              rules="email|required"
            ></VField>
            <label for="email">帳號</label>
            <error-message
              name="email"
              class="invalid-feedback"
            ></error-message>
          </div>
          <div class="form-floating mb-3">
            <VField
              type="password"
              class="form-control"
              id="password"
              placeholder="請輸入密碼"
              v-model="user.password"
              :class="{ 'is-invalid': errors['密碼'] }"
              rules="required"
              name="密碼"
            ></VField>
            <label for="password">密碼</label>
            <error-message name="密碼" class="invalid-feedback"></error-message>
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="submit">登入</button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    login() {
      const url = `${import.meta.env.VITE_URL}admin/signin`;
      this.$http
        .post(url, this.user)
        .then((res) => {
          document.cookie = `PToken=${res.data.token}; expires=${new Date(
            res.data.expired
          )}; path=/`;
          this.$router.push("/admin/products");
        })
        .catch((err) => {
          Swal.fire({
            title: err.response.data.message,
            icon: "error",
          });
        });
    },
  },
};
</script>

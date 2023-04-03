<template>
  <main>
    <section class="bg-homeSection position-relative">
      <div class="bg-prds bg-white">
        <!-- 商品列表主視覺 -->
        <div
          class="bg-prdBanner position-relative"
          style="
            background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/lina-vueapi/1678512915804.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pnckhrydpMiGCh9s0c1zurOQyVc065g7p780s6vn9KzxeQexCupYBlHVAI12AhvG2jmwAwncUB6iB01ll%2BePDiFSheSvgDagP061T6iIIeexufhBtIu3vG5qwvLN9xnyE1S%2BU7dOtjYDtKSOWuYUCuj9LkMj2lOQkgplcWCsXNj2Qj0m%2Fq6JKIXN4FTqB5j8k8zNlnW2csjYqKatTzGvFenwZdSiPwffe%2FXj9B9YF7A3PE4D%2BH2M8x0IELnhmn8bF5bCY7x69pEaF5i8nmMbFqdv%2BVoEcI0FxoPIIf5n0AQOQd4u0IpWb6S%2BAveEC9tKUeW4dGNOqkEqWPSisa4mYg%3D%3D');
          "
        >
          <div class="banner-cta bg-white-opacity position-absolute">
            <div class="d-inline-block">
              <h2 class="font-banner text-primary-dark">客製保養</h2>
            </div>
          </div>
        </div>
        <!-- 客製保養 -->
        <div class="container py-4 py-md-5 py-lg-8">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <VForm @submit="getResult">
                <ul class="list-unstyled">
                  <li class="mb-5">
                    <h2 class="fs-4 mb-3">
                      1. 您的肌膚類型
                      <span class="text-danger">*</span>
                    </h2>
                    <div class="row">
                      <div class="col-md-6 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="1-1"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="radio"
                            id="1-1"
                            value="1-1"
                            name="Q1"
                            v-model="ans.q1"
                          />
                          <span class="form-check-label">乾性</span>
                        </label>
                      </div>
                      <div class="col-md-6 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="1-2"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="radio"
                            id="1-2"
                            value="1-2"
                            name="Q1"
                            v-model="ans.q1"
                          />
                          <span class="form-check-label">油性</span>
                        </label>
                      </div>
                      <div class="col-md-6 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="1-3"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="radio"
                            id="1-3"
                            value="1-3"
                            name="Q1"
                            v-model="ans.q1"
                          />
                          <span class="form-check-label">混和性</span>
                        </label>
                      </div>
                      <div class="col-md-6 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="1-4"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="radio"
                            id="1-4"
                            value="1-4"
                            name="Q1"
                            v-model="ans.q1"
                          />
                          <span class="form-check-label">敏感性</span>
                        </label>
                      </div>
                      <div class="col-md-6 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="1-5"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="radio"
                            id="1-5"
                            value="1-5"
                            name="Q1"
                            v-model="ans.q1"
                          />
                          <span class="form-check-label">不詳</span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li class="mb-5">
                    <h2 class="fs-4 mb-3">
                      2. 平常洗完臉的感覺
                      <span class="text-danger">*</span>
                    </h2>
                    <div class="row">
                      <div class="col-md-6 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="2-1"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="radio"
                            id="2-1"
                            value="2-1"
                            name="Q2"
                            v-model="ans.q2"
                          />
                          <span class="form-check-label">乾裂感</span>
                        </label>
                      </div>
                      <div class="col-md-6 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="2-2"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="radio"
                            id="2-2"
                            value="2-2"
                            name="Q2"
                            v-model="ans.q2"
                          />
                          <span class="form-check-label">油膩感</span>
                        </label>
                      </div>
                      <div class="col-md-6 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="2-3"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="radio"
                            id="2-3"
                            value="2-3"
                            name="Q2"
                            v-model="ans.q2"
                          />
                          <span class="form-check-label">缺水感</span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li class="mb-5">
                    <h2 class="fs-4 mb-3">
                      3. 您想改善的肌膚問題 (複選)
                      <span class="text-danger">*</span>
                    </h2>
                    <div class="row">
                      <div class="col-md-6 col-lg-4 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="3-1"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="checkbox"
                            id="3-1"
                            value="3-1"
                            name="Q3"
                            v-model="ans.q3"
                          />
                          <span class="form-check-label">皺紋</span>
                        </label>
                      </div>
                      <div class="col-md-6 col-lg-4 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="3-2"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="checkbox"
                            id="3-2"
                            value="3-2"
                            name="Q3"
                            v-model="ans.q3"
                          />
                          <span class="form-check-label">粉刺</span>
                        </label>
                      </div>
                      <div class="col-md-6 col-lg-4 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="3-3"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="checkbox"
                            id="3-3"
                            value="3-3"
                            name="Q3"
                            v-model="ans.q3"
                          />
                          <span class="form-check-label">毛孔粗大</span>
                        </label>
                      </div>
                      <div class="col-md-6 col-lg-4 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="3-4"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="checkbox"
                            id="3-4"
                            value="3-4"
                            name="Q3"
                            v-model="ans.q3"
                          />
                          <span class="form-check-label">斑點</span>
                        </label>
                      </div>
                      <div class="col-md-6 col-lg-4 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="3-5"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="checkbox"
                            id="3-5"
                            value="3-5"
                            name="Q3"
                            v-model="ans.q3"
                          />
                          <span class="form-check-label">暗沉</span>
                        </label>
                      </div>
                      <div class="col-md-6 col-lg-4 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="3-6"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="checkbox"
                            id="3-6"
                            value="3-6"
                            name="Q3"
                            v-model="ans.q3"
                          />
                          <span class="form-check-label">出油</span>
                        </label>
                      </div>
                      <div class="col-md-6 col-lg-4 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="3-7"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="checkbox"
                            id="3-7"
                            value="3-7"
                            name="Q3"
                            v-model="ans.q3"
                          />
                          <span class="form-check-label">鬆弛</span>
                        </label>
                      </div>
                      <div class="col-md-6 col-lg-4 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="3-8"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="checkbox"
                            id="3-8"
                            value="3-8"
                            name="Q3"
                            v-model="ans.q3"
                          />
                          <span class="form-check-label">乾燥</span>
                        </label>
                      </div>
                      <div class="col-md-6 col-lg-4 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="3-9"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="checkbox"
                            id="3-9"
                            value="3-9"
                            name="Q3"
                            v-model="ans.q3"
                          />
                          <span class="form-check-label">痘痘</span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li class="mb-5">
                    <h2 class="fs-4 mb-3">
                      4. 生活型態
                      <span class="text-danger">*</span>
                    </h2>
                    <div class="row">
                      <div class="col-md-6 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="4-1"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="radio"
                            id="4-1"
                            value="4-1"
                            name="Q4"
                            v-model="ans.q4"
                          />
                          <span class="form-check-label">上班族</span>
                        </label>
                      </div>
                      <div class="col-md-6 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="4-2"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="radio"
                            id="4-2"
                            value="4-2"
                            name="Q4"
                            v-model="ans.q4"
                          />
                          <span class="form-check-label">戶外型</span>
                        </label>
                      </div>
                      <div class="col-md-6 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="4-3"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="radio"
                            id="4-3"
                            value="4-3"
                            name="Q4"
                            v-model="ans.q4"
                          />
                          <span class="form-check-label">到處奔波型</span>
                        </label>
                      </div>
                      <div class="col-md-6 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="4-4"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="radio"
                            id="4-4"
                            value="4-4"
                            name="Q4"
                            v-model="ans.q4"
                          />
                          <span class="form-check-label">夜貓型</span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li class="mb-5">
                    <h2 class="fs-4 mb-3">
                      5. 保養經驗
                      <span class="text-danger">*</span>
                    </h2>
                    <div class="row">
                      <div class="col-md-6 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="5-1"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="radio"
                            id="5-1"
                            value="5-1"
                            name="Q5"
                            v-model="ans.q5"
                          />
                          <span class="form-check-label">保養新手</span>
                        </label>
                      </div>
                      <div class="col-md-6 mb-2">
                        <label
                          class="d-block fs-5 py-2 px-3 border border-primary"
                          for="5-2"
                        >
                          <VField
                            class="form-check-input me-2"
                            type="radio"
                            id="5-2"
                            value="5-2"
                            name="Q5"
                            v-model="ans.q5"
                          />
                          <span class="form-check-label">保養老手</span>
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary-dark w-50">
                    查看結果
                  </button>
                </div>
              </VForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      ans: { q3: [] },
    };
  },
  methods: {
    getResult() {
      if (
        !this.ans.q1 ||
        !this.ans.q2 ||
        !this.ans.q3.length ||
        !this.ans.q4 ||
        !this.ans.q5
      ) {
        Swal.fire({
          toast: true,
          title: "所有選項皆為必填！",
          icon: "warning",
          timer: 4000,
          position: "center",
          showConfirmButton: true,
        });
        return;
      }
      localStorage.setItem("custom", JSON.stringify(this.ans));
      this.$router.push("/customresult");
    },
  },
};
</script>

<style lang="scss" scoped>
label:has(.form-check-input:checked) {
  background: #cfdce9;
}

.form-check-input:checked {
  background-color: #406563;
}
</style>

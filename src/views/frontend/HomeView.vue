<template>
  <main class="home">
    <!-- 主視覺 -->
    <section
      class="bg-Banner position-relative"
      style="
        background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/lina-vueapi/1677852996621.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WNOBLbEn%2B4HFspBIWLRXuJ6pxbN%2B3ijsN7Tn3ac5rK9j1iMrd21A0VrstKPZhlGdWGjscnrSJTlqJPkCJ%2FCDWL87%2BjBecMHbEgfZzvhI0OoTnz3m5pQB6kWWacJC0C03Fby%2FtZDOvZGyg4rnsWPW0hQzRTPE5COpDG8HIqaFufRUaVHS5bEBvXuEfGYNAzN3W6tphbsBTuFwFgCVwNDmKvJ9TP%2FM9XVRZSflFto45njpC8Zi4r%2B2pZuUyZyncbDcmy5XqKmbRbc72DJnB881%2FMj2G9KLeWPDih%2BEUiOJXmXfkpSFsTWPEQYWPX%2F5JtmaIZ9HW2Nx32ls%2FmlpZksqlQ%3D%3D');
      "
    >
      <div
        data-aos="fade-down"
        class="banner-cta bg-white-opacity position-absolute d-flex justify-content-end"
      >
        <div class="d-inline-block">
          <h2 class="font-banner text-dark mb-45 mb-lg-5">
            訂製屬於您肌膚的獨特<br />保養處方
          </h2>
          <RouterLink to="/custom" class="btn btn-primary-dark fs-4 px-5">
            客製保養
          </RouterLink>
        </div>
      </div>
    </section>
    <!-- 經典暢銷款 -->
    <section class="bg-home">
      <div class="bg-innerHotProducts container padding-hotProducts">
        <h2 class="fs-3 text-primary-dark fw-medium text-center mb-6">
          經典暢銷款
        </h2>
        <div class="row justify-content-center">
          <div class="col-lg-10 bg-white py-2">
            <HotProduct />
          </div>
        </div>
      </div>
    </section>
    <!-- 特色 -->
    <section>
      <ul class="list-unstyled mb-0">
        <li
          data-aos="flip-down"
          class="bg-center py-6"
          style="
            background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/lina-vueapi/1677852887676.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=kTg%2FfqwO3qQV3yMyjG2uRDV%2Ft97lxsBMRhjf5yHxPMhi3quHeU0NE7068X5KkG7CpWkJxG47f3EH7h%2BLGd2nkril7rq5Hl8MQH0SxM6SRrHHwv8R6s55L%2FF%2FFw8ufyPgBmxDpPQHZ17iKoy8bjB2TIxa1mOP0AmXUJoIrwR2sAf56oa%2F12oqxaJ6ED30qFvY81LR9qQK%2BhoIvR8MT%2Fvws2yOA5j5CpcsCAkcJBEa83mgynuEYddP2387YwyWix1%2FI5vur5d8VaSQTb%2B2cuK0s10YHHv9bCBCJbFAO0yFXSHVdLrZy1LcgZk89XOYUktWbskuFHbj%2FZbeLWAhOK3vfA%3D%3D');
          "
        >
          <h3 class="w-lg-50 h4 d-inline-block text-dark text-center mb-0">
            肌膚煥光亮白無暗沉
          </h3>
        </li>
        <li
          data-aos="flip-down"
          class="bg-center text-lg-end py-6"
          style="
            background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/lina-vueapi/1677852801351.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DWhj%2B2nlevEdY6FtpnzMDE1UsaHfj11gpAC9DoLqgN6TrnX2BpS4N6wYThG4%2BgIGGr9%2FtBFlVfEvKa756mAToj26uVy%2F7nrZI%2BMF47ti2QaAk0Xzea3lf0ZiAkyE0GsS%2F0zuwukn0ky66TTHJj62OESy921kY66xZaALzpFD1R3u27x8HWPpC7Vd4PwHRdbT2bfCUPpiTKwRpILOo0eU6uAr%2Bxxu6mO0%2BQao1KZTHh%2B7jLf2nQIgHmfn9Nlfl%2FQCkCpx59uAKMf%2BxwPqlSragpuFF1T47FaGzmYaIS8N7YqfWAQV%2B3HCKbGOh5V3TfdAmUyNIObShxo3IdKmbUxVOQ%3D%3D');
          "
        >
          <h3 class="w-lg-50 h4 d-lg-inline-block text-dark text-center mb-0">
            解決敏感肌膚的問題
          </h3>
        </li>
        <li
          data-aos="flip-down"
          class="bg-center text-center py-6"
          style="
            background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/lina-vueapi/1677852836597.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=H%2Fhl5r5zlewwQmKQpl3gM8KT2LkVQTYDqG7ooLndIcMfuGYbnKEQSOSvgg9B8Z8MV8vch0%2Bkp3J%2BuPFfMC5ssF6nBspxEwk753warfmi4MnLn7w6LDLuACcYwJdQsoKOFY%2FnjAc0raqX17%2FoWY6Aura0wIPCNOIpA7EsrIp6Ag%2B5X7r%2BGQeS7JZzbr%2BM2i6oRpKWDd28LK7J%2BAh0MqAwS19qQ1TYGqQNquOMFdJrQgRkC9Qpj9qWUW%2BHmwJZY6oDh5pX53BxLpB5SgU7wLKPSWconb3yu9ea0gcW11Jx%2FSkNN%2FmJUJ97q23LuKqlSNmqbY18P3HOf2AyRTHEYAEVsw%3D%3D');
          "
        >
          <h3 class="h4 text-dark mb-0">深層鎖水防護網</h3>
        </li>
      </ul>
    </section>
    <!-- 種類 -->
    <section class="bg-homeSection position-relative">
      <div
        class="d-none d-lg-block bg-whiteBlock bg-white position-absolute end-0 bottom-0"
      ></div>
      <div class="container bg-white position-relative z-index-3">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <ul class="list-unstyled mb-0 py-6 py-lg-8">
              <li class="row mb-3">
                <div class="col-lg-6 text-center">
                  <img
                    data-aos="zoom-in-down"
                    class="img-fluid w-100 object-cover"
                    src="https://storage.googleapis.com/vue-course-api.appspot.com/lina-vueapi/1677852917735.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Lcv5CMxVBjyosHk1tcvy2y6%2BhM0u9ZMni%2FQM%2BSRgmejQ9Th2AmfnkpHcwz%2BpXZgaalsbp%2FTB9bSMtLksfoTfPtk91L84NirBnyA0KHdIwPde1NXM6AtawTIyEboZXaUlTHTbnSn2tjk77CBZ7wSExFCJT5m2gCUfrjdspHtntakRtFGezuq0OdPz8t93MpNPo%2F8GaaxxwrXB7qzCXr0bfOQxKKWn09rBfrdVGddS7zNXbufyRXN9wAbeH0FtOKT30ZLFtWTgdbHXT%2BL9EwAPjz6%2FjBbyRL9O2xxBy4FXCcIPyYq2IukCWHGuy8LLbMQIYXHh9tSLjquW6ltkhackEg%3D%3D"
                    alt="亮白系列"
                  />
                </div>
                <div class="col-lg-6 d-flex align-items-center">
                  <div class="mx-lg-4 p-45 px-lg-4 py-lg-0">
                    <h2 class="h4 fw-medium text-primary-dark mb-2">
                      淡斑亮白系列
                    </h2>
                    <p class="text-dark mb-3">
                      長期的日照導致肌膚暗沉無亮嗎？
                      為您量身打造的各階段美白計畫 讓肌膚煥然一新！
                    </p>
                    <RouterLink
                      to="/productlist?category=淡斑亮白系列"
                      class="btn-go text-primary-dark"
                      >前往</RouterLink
                    >
                  </div>
                </div>
              </li>
              <li class="row flex-lg-row-reverse mb-3">
                <div class="col-lg-6 text-center">
                  <img
                    data-aos="zoom-in-down"
                    class="img-fluid w-100 object-cover"
                    src="https://storage.googleapis.com/vue-course-api.appspot.com/lina-vueapi/1677852933772.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NXJCG5scZPvP2zYhJRHdBByvDYsF3BewRzeOPA6eEMIvflrDIalDRZZcXJb28j1Sal9TsWZ23EzidNQc2MygTH7W4z7b98TBYrP3ER2pPV23kc5BQf8207ML6MFtgMRMg%2FGOkkq%2FURrPJRVkzSJPusLY8f81Sq0LCxydPX47oEy%2FZpXwWPpFruNKZ4avsnwmNiOI4MAfFiyGGgRQNO3FgmJXALofdJ2z%2FOl9WvwVn9S0tLM0BWvqKpmkUHZxBJJcVi4t5Ae2jKQf%2Bx7lFt6rMTLHfHs6k1%2BySCHuuYbG2zJhc2egUy3xPmi5G8NlWxO%2FgN5v5hDjxoYSGiCsI3YyhQ%3D%3D"
                    alt="深層保濕系列"
                  />
                </div>
                <div class="col-lg-6 d-flex align-items-center">
                  <div class="mx-lg-4 p-45 px-lg-4 py-lg-0">
                    <h2 class="h4 fw-medium mb-2 text-primary-dark">
                      深層保濕系列
                    </h2>
                    <p class="text-dark mb-3">
                      總覺得肌膚嚴重缺水嗎？ 無論哪個季節都得讓肌膚喝飽 避免乾裂
                    </p>
                    <RouterLink
                      to="/productlist?category=深層保濕系列"
                      class="btn-go text-primary-dark"
                      >前往</RouterLink
                    >
                  </div>
                </div>
              </li>
              <li class="row">
                <div class="col-lg-6 text-center">
                  <img
                    data-aos="zoom-in-down"
                    class="img-fluid w-100 object-cover"
                    src="https://storage.googleapis.com/vue-course-api.appspot.com/lina-vueapi/1677852962306.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ZUtHuxalMvEsBC7taJrDMfTaf9Vb0GD6YoH1ddHv42cFgpwThsiLZ%2B7LHvnlEPQDPHBkSfnQCC2kytdQ1mpBDJJk3Cas4Gs1qg%2B%2FT0MzeX1%2BS77xNmHT0%2Fvxn4B%2BiWp9JPg1jzGm72X7pisQ7taQXFoYXeaEQtlKeb%2FA3TA%2B2rKrx8Y1nBdsZ2QdQO9vs%2F2zrf3HhXwgb5YgfP00LbCKAGh1dRZlpzMmSCjB1ibaRP7ck0jMTopRE3F6T27SPn3Eeo94uLUUV8iAIaslS62Tl%2FHEE5MZJRp3p04SWZFrW2rBUF3UJQ6IFeO59fkvxKuG0IbFIC7JSXUkGft0pDrCHw%3D%3D"
                    alt="頂級呵護系列"
                  />
                </div>
                <div class="col-lg-6 d-flex align-items-center">
                  <div class="mx-lg-4 p-45 px-lg-4 py-lg-0">
                    <h2 class="h4 fw-medium mb-2 text-primary-dark">
                      頂級呵護系列
                    </h2>
                    <p class="text-dark mb-3">
                      逆齡回到肌膚黃金狀態 維持光亮滑順 讓肌膚維持超緊實超自然
                    </p>
                    <RouterLink
                      to="/productlist?category=頂級呵護系列"
                      class="btn-go text-primary-dark"
                      >前往</RouterLink
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- CTA -->
    <section
      class="bg-center text-center py-7"
      style="
        background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/lina-vueapi/1677852707715.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=T78S9fTf8Pbm2mq3pU9h%2FyI6p0A5ivjhPQbwiMD0dpILKYk2eAfwMNZwEFRrXOIz7uAZ2iRHPltC1UCB%2B1NBGYh4%2BXwqlacp1bOi78RXv54tsPBTjG%2BBIScnoyA2WBhRT9IK1ZI5JfyPyIT%2BQid9vfOyL07xM6OTFRp%2FjAJTydF4EcL%2BucvIS0xtolisOXlr0KhWt28A6ZfWVDdLwS3pfB4z5BWotsjY%2FlP%2FeLxZY5GGsMSVE5b5Qq5CEPoeQ7wx0avxHjxzcLFR2yBOdvsdgQjyfZHIV4iMzWlxCB8Dmlbb70p%2BogpSmpqMnoyReF%2FlhRSG46rt9MU%2BPLuuRqN5xw%3D%3D');
      "
    >
      <h2 class="h4 text-white mb-4">搶先試試神奇肌效</h2>
      <RouterLink to="/trials" class="btn-cta bg-white text-primary-dark">
        領取試用包
      </RouterLink>
    </section>
  </main>
</template>

<script>
import HotProduct from "@/components/frontend/HotProduct.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  components: {
    HotProduct,
  },
  mounted() {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      offset: 350,
      duration: 600,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  },
};
</script>

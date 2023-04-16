<template>
  <footer class="bg-primary text-primary-dark">
    <div class="container py-45">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="row justify-content-center">
            <div class="col-10 col-md-6 mb-6 mb-md-0">
              <h3 class="fs-6 mb-3">聯絡我們</h3>
              <ul class="footerList list-unstyled mb-3 mb-md-0">
                <li class="mb-2 d-flex">
                  <p class="w-25 mb-0">電話</p>
                  <a href="tel:022188965">02-218 8965</a>
                </li>
                <li class="mb-2 d-flex">
                  <p class="w-25 mb-0">E-mail</p>
                  <a href="mailto:deeplyPrefect@gmail.com"
                    >deeplyPrefect@gmail.com</a
                  >
                </li>
                <li class="d-flex">
                  <p class="w-25 mb-0">服務時間</p>
                  <p class="mb-0">週一至六 9:00-18:00</p>
                </li>
              </ul>
            </div>
            <div class="col-md-6 text-center">
              <div class="d-flex flex-column justify-content-center h-100">
                <ul class="list-unstyled d-flex mx-auto">
                  <li>
                    <a href="javascript:;">
                      <img src="../../assets/img/ig.png" alt="IG" />
                    </a>
                  </li>
                  <li class="ms-3">
                    <a href="javascript:;">
                      <img src="../../assets/img/fb.png" alt="facebook" />
                    </a>
                  </li>
                  <li class="ms-3">
                    <a href="javascript:;">
                      <img src="../../assets/img/yt.png" alt="youtube" />
                    </a>
                  </li>
                </ul>
                <p class="mb-0">© 2023 All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footerList{
  a{
    &:hover{
      text-decoration: underline;
      color: #406563;
    }
  }
}
</style>
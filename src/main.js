import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";

import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

import { LoadingPlugin } from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

import "bootstrap/dist/js/bootstrap";

import App from "./App.vue";
import router from "./router";

defineRule("required", required);
defineRule("email", email);
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale("zh_TW");

axios.interceptors.request.use((config) => {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)PToken\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(LoadingPlugin);

app.component("VForm", Form);
app.component("VField", Field);
app.component("error-message", ErrorMessage);

app.mount("#app");

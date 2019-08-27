import Vue from "vue";
import App from "./App.vue";
import DropZone from "./dropdzone.vue";

Vue.config.productionTip = true;

new Vue({
  render: h => h(DropZone)
}).$mount("#app");

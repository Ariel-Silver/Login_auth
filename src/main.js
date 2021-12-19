import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Firebase
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAoJJVknoGtMEPdaLIcpe-IQC_YSz-e4WQ",
  authDomain: "desafio-login-61e17.firebaseapp.com",
  projectId: "desafio-login-61e17",
  storageBucket: "desafio-login-61e17.appspot.com",
  messagingSenderId: "846213398840",
  appId: "1:846213398840:web:f2c3d60dd284e0d58841cd"
};
initializeApp(firebaseConfig);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

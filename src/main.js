import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from "vee-validate";


Vue.use(VeeValidate);



import '@fortawesome/fontawesome-free/css/all.css'
import '@/assets/style.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

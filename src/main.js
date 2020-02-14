import Vue from 'vue'
import App from './App.vue'
import 'bulma/bulma.sass'
import '../sass/style.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

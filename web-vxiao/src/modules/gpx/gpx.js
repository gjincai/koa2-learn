import Vue from 'vue'
import App from '@/App'
import router from '@/modules/gpx/route'
import Plugins from '@/plugin'
import store from '@/store'
import '@/assets/scss/element_blue.scss'

Vue.use(Plugins)
Vue.config.devtools = true
Vue.config.productionTip = false

let vm = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  data() {}
})
vm.$mount('#app')

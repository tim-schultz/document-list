import Vue from 'vue'
import App from './App.vue'
import './main.css';
import moment from 'vue-moment'

Vue.config.productionTip = false
Vue.use(moment);
new Vue({
  render: h => h(App),
}).$mount('#app')

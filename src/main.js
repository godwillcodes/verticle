import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// engade new component

new Vue({
  render: h => h(App)
}).$mount('#app')

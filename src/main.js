import Vue from 'vue'
import App from './AppTest.vue'
import ChildComponent from './components/ChildComponent.vue'
// import App from './App.vue'

Vue.config.productionTip = false
Vue.component('child', ChildComponent)

new Vue({
  render: h => h(App)
}).$mount('#app')

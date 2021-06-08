import Vue from 'vue'
import App from './AppTest.vue'
import ChildComponent from './components/ChildComponent.vue'
import ReactivitySample from './components/ReactivitySample.vue'
// import App from './App.vue'

// importacion de componente global
Vue.component('child', ChildComponent)
Vue.component('reactivity', ReactivitySample)

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')

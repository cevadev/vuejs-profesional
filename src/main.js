import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from "./AppTest.vue";
// import ChildComponent from "./components/ChildComponent.vue";
// import ReactivitySample from './components/ReactivitySample.vue'
// import LifeCycleSample from './components/LifeCycleSample.vue'
// import SlotsSample from "./components/SlotsSample.vue";
import App from './App.vue'

import EventBus from './plugins/event-bus'
// import array of routes file
import routes from './routes'

Vue.use(EventBus)
Vue.use(VueRouter)
// importacion de componente global
// Vue.component("child", ChildComponent);
// Vue.component('reactivity', ReactivitySample)
// Vue.component('lifecycle', LifeCycleSample)
// Vue.component("slotsSample", SlotsSample);

// create VueRouter instance y le pasamos un objeto con la propiedad routes que contiene las rutas
const router = new VueRouter({ routes })
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  // add VueRouter instance to Vue app instance
  router
}).$mount('#app')

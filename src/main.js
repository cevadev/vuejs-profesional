import Vue from 'vue'
// import App from "./AppTest.vue";
// import ChildComponent from "./components/ChildComponent.vue";
// import ReactivitySample from './components/ReactivitySample.vue'
// import LifeCycleSample from './components/LifeCycleSample.vue'
// import SlotsSample from "./components/SlotsSample.vue";
import App from './App.vue'

import EventBus from './plugins/event-bus'

Vue.use(EventBus)
// importacion de componente global
// Vue.component("child", ChildComponent);
// Vue.component('reactivity', ReactivitySample)
// Vue.component('lifecycle', LifeCycleSample)
// Vue.component("slotsSample", SlotsSample);

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')

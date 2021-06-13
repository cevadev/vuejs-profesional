import Vue from "vue";
import VueRouter from "vue-router";
// import App from "./AppTest.vue";
// import ChildComponent from "./components/ChildComponent.vue";
// import ReactivitySample from './components/ReactivitySample.vue'
// import LifeCycleSample from './components/LifeCycleSample.vue'
// import SlotsSample from "./components/SlotsSample.vue";
import App from "./App.vue";
import EventBus from "./plugins/event-bus";
// import array of routes file
import routes from "./routes";

// import filters
import msToMm from "./filters/ms-to-mm";

// import directivas
import blur from "./directives/blur";

Vue.use(EventBus);
Vue.use(VueRouter);
Vue.use(msToMm);
Vue.use(blur);

// importacion de componente global
// Vue.component("child", ChildComponent);
// Vue.component('reactivity', ReactivitySample)
// Vue.component('lifecycle', LifeCycleSample)
// Vue.component("slotsSample", SlotsSample);

// create VueRouter instance y le pasamos un objeto con la propiedad routes que contiene las rutas
const router = new VueRouter({
  routes,
  // indicams a vue que vamos a usar el history  nativo y no necesitamos caracter extraño en el url
  mode: "history"
});
Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  // add VueRouter instance to Vue app instance
  router
}).$mount("#app");

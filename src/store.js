import Vue from "vue";
import Vuex from "vuex";

/** indicamos a Vue que usaremos Vuex */
Vue.use(Vuex);

/** object store que contiene una instancia del store de Vuex */
/** compartiremos informacion con ciertos componentes de la pagina utilizando el objeto track
 *  de esta manera ya no será necesario el event-bus creado anteriormente
 */
const store = new Vuex.Store({
  state: {
    track: {}
  }
});

export default store;

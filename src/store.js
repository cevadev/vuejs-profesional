import Vue from 'vue'
import Vuex from 'vuex'

// inicializamos el trackService
import trackService from './services/track'

/** indicamos a Vue que usaremos Vuex */
Vue.use(Vuex)

/** object store que contiene una instancia del store de Vuex */
/** compartiremos informacion con ciertos componentes de la pagina utilizando el objeto track
 *  de esta manera ya no será necesario el event-bus creado anteriormente
 */
const store = new Vuex.Store({
  state: {
    track: {}
  },
  mutations: {
    // guardamos informacion en el store
    // track -> payload que recibimos
    setTrack (state, track) {
      state.track = track
    }
  },
  actions: {
    /** obtenemos info del Track por Id */
    getTrackById (context, payload) {
      return (
        trackService
          .getById(payload.id)
          // recibimos la respuesta de la api
          .then(res => {
            // la respuesta de la api es un Track
            // con un commit llevaremos Track a la mutation
            // la mutation actualiza el state. Pasamos la respuesta (res) que representa a la cancion
            context.commit('setTrack', res)
            return res
          })
      )
    }
  },
  getters: {
    /** creamos un getter para el state de track que solo nos devuelve el titulo de la cancion + Artist
     *  los getter reciben 2 params: state y otro objeto con los demas getters por si queremos usrlos
     */
    trackTitle (state) {
      // si el track a un no existe devolvemos cadena vacia
      if (!state.track.name) {
        return ''
      }

      return `${state.track.name} - ${state.track.artists[0].name}`
    }
  }
})

export default store

<!--
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    #app
      img(src="./assets/logo.png")
      h1 {{ }}
  </div>
-->

<template lang="html">
  <main>
    <pm-header />
    <pm-loader v-show="isLoading" />
    <section class="section" v-show="!isLoading">
      <nav class="nav">
        <div class="container">
          <!-- Podemos usar modifiers como .enter -->
          <input
            type="text"
            class="input is-large"
            placeholder="Buscar canciones"
            v-model="searchQuery"
            v-on:keyup.enter="search"
          />
          <a href="#" class="button is-info is-large" v-on:click="search"
            >Buscar</a
          >
          <a href="#" class="button is-danger is-large">&times;</a>
          <p>
            <small>{{ searchMessage }}</small>
          </p>
        </div>
      </nav>

      <div class="container results">
        <div class="columns is-multiline">
          <div
            class="column is-one-quarter"
            v-for="t in tracks"
            v-bind:key="t.id"
          >
            <pm-track
              v-bind:class="{ 'is-active': t.id === selectedTrack }"
              v-bind:track="t"
              v-on:select="setSelectedTrack"
            />
          </div>
        </div>
      </div>
      s
    </section>
    <pm-footer />
  </main>
</template>

<script>
// import componente local
import PmFooter from './components/layout/Footer.vue'
import PmHeader from './components/layout/Header.vue'
import trackService from './services/track'
import PmTrack from './components/Track.vue'
import PmLoader from './components/shared/Loader.vue'

export default {
  name: 'App',
  // funcion data que retorna un objeto
  data () {
    return {
      searchQuery: '',
      tracks: [],
      // controlamos si se trae info de la api
      isLoading: false,
      // almacena el id del Track seleccinado
      selectedTrack: ''
    }
  },
  components: {
    PmHeader,
    PmFooter,
    PmTrack,
    PmLoader
    // SearchSongs,
    // TaskManager
  },
  methods: {
    search () {
      // validamos que no este vacia la caja de busqueda
      if (!this.searchQuery) {
        return
      }

      // encendemos el flag cuando se inicia una busqueda
      this.isLoading = true

      // search retorna una promesa, usamos la chain promise y con then manejamos la respuesta
      trackService.search(this.searchQuery).then(res => {
        // res (response) -> tracks (object) -> items(array de elementos)
        this.tracks = res.tracks.items
        // apagamos el flag cuando la busqueda termino
        this.isLoading = false
      })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },
  computed: {
    searchMessage () {
      return `${this.tracks.length} songs found`
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
.results {
  margin-top: 50px;
}
.is-active {
  border: 3px solid #23d160;
}
</style>

<!--
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    #app
      img(src="./assets/logo.png")
      h1 {{ }}
  </div>
-->

<template lang="pug">
  #app
    pm-header
    section.section
    nav.navbar.has-shadow
      .container
        .field.has-addons
          .control
            input.input.is-large(
              type="text",
              placeholder="¿Qué canción estás buscando?",
              v-model="searchQuery"
            )
          .control
            a.button.is-info.is-large(v-on:click.prevent="search") Buscar
          .control
            a.button.is-danger.is-large &times;
    .container
      p.help.is-info.has-text-right
          small {{ searchMessage }}
    .container.results
      .columns
        .column(v-for="(t, index) in tracks", v-bind:key="index")
          | {{ t.name }} - {{ t.artists[0].name }}
    pm-footer
</template>

<script>
// import componente local
import PmFooter from './components/layout/Footer.vue'
import PmHeader from './components/layout/Header.vue'
import trackService from './services/track'

export default {
  name: 'App',
  // funcion data que retorna un objeto
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  components: {
    PmHeader,
    PmFooter
    // SearchSongs,
    // TaskManager
  },
  methods: {
    search () {
      // validamos que no este vacia la caja de busqueda
      if (!this.searchQuery) {
        return
      }

      // search retorna una promesa, usamos la chain promise y con then manejamos la respuesta
      trackService.search(this.searchQuery).then(res => {
        // res (response) -> tracks (object) -> items(array de elementos)
        this.tracks = res.tracks.items
      })
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
</style>

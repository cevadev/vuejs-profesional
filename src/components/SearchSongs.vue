<template lang="pug">
  #app
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
        p.help.is-info.has-text-right
          small {{ searchMessage }}
    .container.results
      .columns
        .column(v-for="(t, index) in tracks", v-bind:key="index") {{ t.name }} - {{ t.artist }}

</template>

<script>
const tracks = [
  {
    name: 'Muchacha',
    artist: 'Luis Alberto Spinetta'
  },
  {
    name: 'Acá en el baile',
    artist: 'Pepo'
  },
  {
    name: 'I was made for loving you',
    artist: 'Kiss'
  }
]
export default {
  name: 'SearchSongs',
  components: {

  },
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  methods: {
    search () {
      this.tracks = tracks
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
@import "../assets/scss/main.scss";
.results {
  margin-top: 50px;
}
</style>

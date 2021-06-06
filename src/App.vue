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
    section.section
    nav.nav.has-shadow
      .container
        .field.has-addons
          .control
            input.input.is-large(
              type="text",
              placeholder="¿Qué canción estás buscando?",
              v-model="searchQuery"
            )
          .control
            a.button.is-info.is-large(v-on:click="search") Buscar
          .control
            a.button.is-danger.is-large &times;
        p.help.is-info.has-text-right
          small {{ searchMessage }}
    .container.results
      .columns
        .column(v-for="t in tracks") {{ t.name }} - {{ t.artist }}

</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

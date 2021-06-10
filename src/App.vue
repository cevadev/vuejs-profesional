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
  <div id="app">
    <pm-header />
    <router-view />
    <pm-footer />
  </div>
</template>

<script>
// import componente local
import PmFooter from './components/layout/Footer.vue'
import PmHeader from './components/layout/Header.vue'

export default {
  name: 'App',
  // funcion data que retorna un objeto
  data () {
    return {}
  },
  components: {
    PmHeader,
    PmFooter
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

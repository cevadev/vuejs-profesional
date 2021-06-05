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
    MovieView
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import RegisterSample from './components/RegistroSample'
import MovieView from './components/MovieView'

export default {
  name: 'App',
  components: {
    HelloWorld,
    RegisterSample,
    MovieView
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

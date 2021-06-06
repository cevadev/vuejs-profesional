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
    TaskManager
</template>

<script>
import SearchSongs from './components/SearchSongs.vue'
import TaskManager from './components/TaskManager.vue'
export default {
  name: 'App',
  components: {
    SearchSongs,
    TaskManager
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

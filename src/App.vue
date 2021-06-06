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
    //Expresiones en vue
    h1 {{ 'Hello Vue'}}
    p {{ `La suma de 1 + 1 es ${1+1}` }}

    //accediendo a propiedades de objetos
    p {{ `Su nombre es: ${person.name}` }}
    p {{ `Su apellido es: ${person.lastname.toUpperCase()}` }}
    p {{ JSON.stringify(person) }}
    p {{ true ? 'true' : 'false'}}

    //Directivas en vue
    p(v-show="showValue") {{ value }}
    p(v-if="showValue") {{ value }}
    p(v-else-if="true") {{ 'mostrando directivas en Vue' }}
    p(v-else) {{ 'Directivas' }}

    //directiva v-for
    ul
      li(v-for="numero in numeros", :key="index") {{ numero }}

    //Data bindings
    input(v-model="person.name")

    //Llamando un componte y props con pug
    //HelloWorld(msg="Hello Vue world")
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
  },
  data () {
    return {
      showValue: false,
      value: 'trabajando con directivas',
      person: {
        name: 'Carlos',
        lastname: 'Villanueva'
      },
      numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
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

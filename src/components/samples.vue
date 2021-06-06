<template lang="pug">
  #app
    //Expresiones en vue
    h1 {{ 'Hello Vue'}}
    p {{ `La suma de 1 + 1 es ${1+1}` }}

    //accediendo a propiedades de objetos
    p {{ `Su nombre es: ${name}` }}
    p {{ `Su apellido es: ${lastname.toUpperCase()}` }}
    p {{ JSON.stringify(colores) }}
    p {{ true ? 'true' : 'false'}}

    //Directivas en vue
    p(v-show="showValue") {{ value }}
    p(v-if="showValue") {{ value }}
    p(v-else-if="true") {{ 'mostrando directivas en Vue' }}
    p(v-else) {{ 'Directivas' }}

    //directiva v-for
    ul
      li(v-for="(numero, index) in numeros", :key="index") {{ numero }}

    //Data bindings
    input(v-model="text")
    p {{ text }}

    //v-bind (creamos un anchor con la directiva v-bind que enlaza con el atributo href que toma el valor de la propiedad url)
    a(v-bind:href="url") Link
    br
    br

    //Computed properties
    input(v-model="name")
    input(v-model="lastname")
    p {{ `${ fullname }` }}

    .field
      label.label Fecha de nacimiento
      .control
        input.input(v-model="birthday" type="date")

    .columns
      p {{ `Su edad es: ${ getAge }` }}

    //Trabajando con eventos
    button(v-on:click="format") Aplicar Formato
    p {{ formatName }}

    //Llamando un componte y props con pug
    //HelloWorld(msg="Hello Vue world")
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import RegisterSample from './components/RegistroSample'
// import MovieView from './components/MovieView'
export default {
  name: 'Samples',
  components: {
    /* HelloWorld,
    RegisterSample,
    MovieView */
  },
  data () {
    return {
      colores: {
        nombre: 'Azul',
        ingles: 'blue'
      },
      showValue: false,
      value: 'trabajando con directivas',
      text: '',
      url: 'https://www.google.com/webhp?hl=es&sa=X&ved=0ahUKEwiA1qvU0oHxAhWXqpUCHS3ICa0QPAgI',
      name: '',
      lastname: '',
      numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      birthday: '',
      formatName: ''
    }
  },
  computed: {
    fullname () {
      return `Su nombre es: ${this.name} ${this.lastname}`
    },
    getAge () {
      // return new Date(new Date() - new Date(this.birthday)).getFullYear - 1970
      const today = new Date()
      const birth = new Date(this.birthday)
      let age = today.getFullYear() - birth.getFullYear()
      const m = today.getMonth() - birth.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--
      }
      return age
    }
  },
  watch: {
    name (newVal, oldVal) {
      console.info(newVal, oldVal)
    }
  },
  methods: {
    format () {
      this.formatName = this.name.split(' ').join('-').toUpperCase()
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

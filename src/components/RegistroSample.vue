<template lang="pug">
  #app
    header.header
      .container
        figure
          img(src="https://static.platzi.com/media/user_upload/Page%201-d8d869f4-7130-4ae9-9907-2fa809bd136a.jpg")
        nav.header-nav
          ul.header-list
            li.header-link Ejercicio 1
    section.section.main
      .container
        .columns
          .column
            .curso
              .curso-header
                img.curso-logo(src="https://static.platzi.com/media/user_upload/Page%201-d8d869f4-7130-4ae9-9907-2fa809bd136a.jpg")
                h1.title-section Curso Profesional de VueJS
              p.curso-paragraph
                | Crea aplicaciones web de gran escala con las herramientas y libreríasque ofrece
                a.blue(href='' target='_blank') VueJS
                |. Aprovecha la simpleza, escalabilidad y el increíble performance de este framework, características que lo posicionan como la alternativa más potente para este tipo de desarrollos.
          .column
            h1.title-section Registro estación Platzi
            form
              .field
                label.label Name
                  .control
                    input.input(type="text" placeholder="Nombre")
              .field
                label.label Apellido
                  .control
                    input.input(type="text" placeholder="Apellido")
              .field
                label.label Cargo
                  .control
                    input.input(type="text" placeholder="Cargo")
              .field
                .control
                  button.btn.btn-blue.btn--medium Enviar
    footer
      p
        | Estudiando Vue.js en
        a.blue(href='https://platzi.com' target='_blank') Platzi
</template>

<script>
export default {
  name: 'RegisterSample'
}
</script>

<style lang="scss">
/* Es una buena pŕactica importar los estiulos generales desde el componente App.vue */
@import "../assets/scss/main.scss";
form {
  text-align: center;
}
h1 {
  color: #00BFD6;
  font-weight: bold;
  font-size: 2em;
}
.field {
  label {
    color: #ff9300;
    text-align: left;
  }
  input {
    border: none;
    border-bottom: 1px solid #ff9300;
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
  }
}
.button-container {
  display: flex;
  justify-content: flex-end;
  button {
    padding: 14px 37px;
    border: none;
    background: #a3ecf3;
    color: #fff;
    font-weight: bold;
    font-size: 1.2em;
    box-shadow: 1px 1px 5px #ccc;
  }
}
</style>

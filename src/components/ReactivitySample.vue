<!--
  Vue no nos permite crear propiedades dinamicas a los objetos.
  vemos que el objeto person tiene una propiedad llamada name, una vez que se crea el componente
  el objeto person no puede tener una segunda propiedad por ejemplo lastname
  ya que vue no tiene forma de darse por entardo de esos cambios

  Este problema puede ser resulto con la propiedadd $set()
-->
<template>
  <div>
    <h1>Reactivity Sample</h1>
    <p>{{ person }}</p>
    <button>
      <span v-on:click="addProp">Add Prop</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ReactivitySample",
  data() {
    return {
      person: {
        name: "Carlos"
      }
    };
  },
  methods: {
    addProp() {
      // si damos click en el boton la propiedad lastname se crea en el objeto pero el cambio no se ve reflejado por vue
      // para mostrar el cambio de la propiedad lastname adicionada al objeto person debemos usar la funcion $set()
      // this.person.lastname = 'Villanueva'

      // 1.era forma
      // this.$set(this.person, "lastname", "Villanueva");

      // 2da forma. al objeto person le agregamos propiedades y ese objeto modificado lo asignamos nuevamente a person
      this.person = Object.assign({}, this.person, {
        lastname: "Villanueva",
        country: "Peru"
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>

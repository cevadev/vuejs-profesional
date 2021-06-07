<!--
  Todo componente en Vue debe tener un unico elemento html como padre.
  Especificar mas de un elemento html como padre en en un componente arrojaría un error de compilacion.
  Si se requiere tener mas de un elemento html primero debemo crear un elemento div o container y dentro de este
  alojar a todos los elementos.
 -->
<template lang="pug">
  div
    h1 Este es un componente hijo
    local-component
</template>

<script>
import LocalComponent from './LocalComponent.vue'
export default {
  name: 'ChildComponent',
  components: {
    LocalComponent
  }
}
</script>

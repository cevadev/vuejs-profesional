<template>
    <div>
        <h1>Components Lifecycle</h1>
        <p>{{ person }}</p>
        <!-- <button>
            <span v-on:click="addProp">Add Prop</span>
        </button> -->
    </div>
</template>

<script>
export default {
  name: 'ReactivitySample',
  data () {
    return {
      person: {
        name: 'Carlos'
      }
    }
  },
  beforeCreated () {
    console.info('Component ready to be created')
  },
  created () {
    console.info('Componente created')
  },
  mounted () {
    console.info('Component mounted')
  }
}
</script>

<style lang="scss" scoped>

</style>

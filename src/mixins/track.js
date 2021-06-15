// Los mixins sirven para reutilizar funcionalidades en varios componentes, es como lo tipico de no escribir dos veces el mismo código

// Aquí definimos funcionalidades de Vue Model como si fuera una instancia de Vue
const trackMixin = {
  // Definimos methods como cualquier otro componente
  methods: {
    selectTrack() {
      // emitimos un evento llamado select para ser escuchado por el componente padre y le enviamos el id del track
      // this.$emit('select', this.track.id)

      // objeto bus es un plugin creado por nosotros. bus es una instancia de Vue por lo que podemo usar
      // el evento emit
      // cada vez que se hace click en un cambio enviamos la cancion al componente play para reproducirla
      // this.$bus.$emit('set-track', this.track)

      // Trabajando con Vuex
      /** utilizamos una mutacion definida en el store */
      this.$store.commit("setTrack", this.track);
    }
  }
};

export default trackMixin;

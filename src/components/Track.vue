<template>
  <div>
    <div class="card" v-if="track && track.album">
      <div class="card-image">
        <figure class="image is-1by1">
          <img v-bind:src="track.album.images[0].url" />
        </figure>
      </div>

      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img v-bind:src="track.album.images[0].url" />
            </figure>
          </div>

          <div class="media-content">
            <p class="title is-6">
              <strong>{{ track.name }}</strong>
            </p>
            <p class="subtitle is-6">
              <strong>{{ track.artist }}</strong>
            </p>
          </div>
        </div>

        <div class="content">
          <small>{{ track.duration_ms | convertMillisecondsToMinutes }}</small>
          <nav class="level">
            <div class="level-left">
              <button class="level-item button is-primary">
                <span v-on:click="selectTrack">Play!</span>
              </button>

              <button class="level-item button is-warning">
                <span v-on:click="goToTrack(track.id)">Go to track!</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// importamos mixin
import trackMixin from "../mixins/track";

export default {
  name: "Track",
  props: {
    // definimos el objeto track y valores adicionales
    track: {
      type: Object,
      required: true
    }
  },
  // injectamos los mixins
  mixins: [trackMixin],
  methods: {
    /** METDO selectTrack LLEVADO AL MIXIN: TRACK */
    //selectTrack() {
    // validamos que no se permita seleccionar un track si no hay un preview de la cancion
    /* if (!this.track.preview_url) {
        return;
      } */

    // emitimos un evento llamado select para ser escuchado por el componente padre y le enviamos el id del track
    // this.$emit("select", this.track.id);

    // objeto bus es un plugin creado por nosotros. bus es una instancia de Vue por lo que podemo usar
    // el evento emit
    // cada vez que se hace click en un cambio enviamos la cancion al componente play para reproducirla
    // this.$bus.$emit("set-track", this.track);
    // },
    goToTrack(id) {
      // validamos que no se permita seleccionar un track si no hay un preview de la cancion
      /* if (!this.track.preview_url) {
        return;
      } */

      // navegamos a la ruta del TrackDetails
      this.$router.push({ name: "track", params: { id } });
    }
  }
};
</script>

<style lang="scss" scoped></style>

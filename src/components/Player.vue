/** Reproductor para escuchar las canciones */
<template lang="html">
  <div class="content">
    <p class="is-128x128">
      <!--que la imagen se muestre cuando el objeto track y track.album posee una cancion-->
      <img v-if="track && track.album" :src="track.album.images[0].url" />
    </p>

    <p>
      <strong>{{ track.name }} - </strong>
      <small>{{ track.duration_ms }}</small>
    </p>

    <p>
      <audio v-bind:src="track.preview_url" controls></audio>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      track: {}
    };
  },
  created() {
    // Componente padre Player escucha el evento set-track y recibe el track para reproducir la cancion
    // cada vez que ocurra el evento set-track ejecutamos la funcion
    // $on -> escucha cuando el evento ocurre
    // track > recibimos el objeto track que viene con el evento set-track desde el componente Track
    this.$bus.$on("set-track", track => {
      this.track = track;
    });
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 124px;
  border-radius: 50%;
}
</style>

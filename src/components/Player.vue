/** Reproductor para escuchar las canciones */
<template lang="html">
  <div class="content" v-if="track.img">
    <p class="is-128x128">
      <img :src="track.img" />
    </p>

    <p>
      <strong>{{ track.name }}</strong>
      <small>{{ track.duration_ms | (ms - to - mm) }}</small>
    </p>

    <p>
      <audio :src="track.src" controls></audio>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

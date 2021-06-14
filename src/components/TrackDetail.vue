<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 has-text-centered">
        <!-- <pm-track v-bind:track="track"></pm-track> -->
        <figure class="media-left">
          <p class="image">
            <img :src="track.album.images[0].url" />
          </p>
          <p class="button-bar">
            <a class="button is-primary is-large">
              <!--aplicando mixin selectTrack que no existento de de Track Detail pero si existe en el mixin-->
              <span class="icon" v-on:click="selectTrack">Play!</span>
            </a>
          </p>
        </figure>
      </div>

      <div class="column is-8">
        <div class="panel">
          <div class="panel-heading">
            <h1 class="title">{{ trackTitle }}</h1>
          </div>
          <div class="panel-block">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <!--usamos v-for para recorrer cada una de las propiedades de un objeto-->
                  <ul v-for="(value, key) in track" :key="key">
                    <li>
                      <strong>{{ key }}:&nbsp;</strong>
                      <span>{{ value }}</span>
                    </li>
                  </ul>
                </div>

                <nav class="level">
                  <div class="level-left">
                    <a class="level-item"> </a>
                  </div>
                </nav>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import trackservice para obtener info de un trac
import trackService from '../services/track'
// mixins
import trackMixin from '../mixins/track'
// import PmTrack from "./Track.vue";
export default {
  name: 'TrackDetail',
  /* components: {
    PmTrack
  }, */
  data () {
    return {
      track: {}
    }
  },
  // obtenemos el valor de la url y leemos el param id
  created () {
    // dentro de this.$route podemos acceder a los params que viajan en la url
    const id = this.$route.params.id
    if (!this.track || !this.track.id || this.track.id !== id) {
      trackService.getById(id).then(res => {
        this.track = res
      })
    }
  },
  mixins: [trackMixin]
}
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
.button-bar {
  margin-top: 20px;
}
</style>

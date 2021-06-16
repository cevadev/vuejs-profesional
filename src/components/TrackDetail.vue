<template>
  <div class="container" v-if="track && track.id">
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
// importamos el mapState ya que nos provee de la cancion
import { mapState, mapActions, mapGetters } from 'vuex'

// import trackservice para obtener info de un trac
// import trackService from "../services/track";
// mixins
import trackMixin from '../mixins/track'
// import PmTrack from "./Track.vue";
export default {
  name: 'TrackDetail',

  /* components: {
    PmTrack
  }, */

  /* data () {
    return {
      track: {}
    }
  }, */
  computed: {
    // indicamos el state que queremos traer (track)
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },

  // obtenemos el valor de la url y leemos el param id
  created () {
    // dentro de this.$route podemos acceder a los params que viajan en la url
    const id = this.$route.params.id

    /** Preguntamos si la cancion existe ya que:
     *  Puede que aun no exista porque puede aun no existir porque no se ha cargado o puede ser que no exista track
     *  porque se ha reiniciado
     *  Puede ser que sea un objeto vacio por ello preguntamos si existe alguna propiedad del objeto
     *  Puede que el id del track en el store sea igual al id en la url, si es ese caso no queremos ir y hacer request a la API
     *  porque significa que ya tenemos la cancion en memoria.
     */
    if (!this.track || !this.track.id || this.track.id !== id) {
      // traemos el metodo mapeado en el mapActions
      this.getTrackById({ id }).then(() => {
        console.info('Track loaded')
      })
    }

    /* if (!this.track || !this.track.id || this.track.id !== id) {
      trackService.getById(id).then(res => {
        this.track = res;
      });
    } */
  },

  methods: {
    ...mapActions([
      // selecionamos la accion
      'getTrackById'
    ])
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

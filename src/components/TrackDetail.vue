<template>
  <div class="container">
    <div class="columns">
      <div class="column is- has-text-centered">
        <pm-track v-bind:track="track"></pm-track>
        <figure class="media-left">
          <p class="image">
            <img :src="track.images" />
          </p>
          <p class="button-bar">
            <a class="button is-primary is-large">
              <!-- <span class="icon" @click="selectTrack">Play!</span> -->
            </a>
          </p>
        </figure>
      </div>

      <!-- <div class="column is-8">
        <div class="panel">
          <div class="panel-heading">
            <h1 class="title">{{ trackTitle }}</h1>
          </div>
          <div class="panel-block">
            <article class="media">
              <div class="media-content">
                <div class="content">

                  <ul v-for="(v, k) in track" :key="k">
                    <li>
                      <strong>{{ k }}:&nbsp;</strong>
                      <span>{{ v }}</span>
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
      </div> -->
    </div>
  </div>
</template>

<script>
// import trackservice para obtener info de un trac
import trackService from "../services/track";
import PmTrack from "./Track.vue";
export default {
  name: "TrackDetail",
  components: {
    PmTrack
  },
  data() {
    return {
      track: {}
    };
  },
  // obtenemos el valor de la url y leemos el param id
  created() {
    // dentro de this.$route podemos acceder a los params que viajan en la url
    const id = this.$route.params.id;
    if (!this.track || !this.track.id || this.track.id != id) {
      trackService.getById(id).then(res => {
        this.track = res;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
.button-bar {
  margin-top: 20px;
}
</style>

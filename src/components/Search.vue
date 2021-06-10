<template lang="html">
  <main>
    <pm-notification v-show="showNotification">
      <p slot="body">No se encontraron resultados :(</p>
    </pm-notification>
    <pm-loader v-show="isLoading" />
    <section class="section" v-show="!isLoading">
      <nav class="nav">
        <div class="container">
          <!-- Podemos usar modifiers como .enter -->
          <input
            type="text"
            class="input is-large"
            placeholder="Buscar canciones"
            v-model="searchQuery"
            v-on:keyup.enter="search"
          />
          <a href="#" class="button is-info is-large" v-on:click="search"
            >Buscar</a
          >
          <a href="#" class="button is-danger is-large">&times;</a>
          <p>
            <small>{{ searchMessage }}</small>
          </p>
        </div>
      </nav>

      <div class="container results">
        <div class="columns is-multiline">
          <div
            class="column is-one-quarter"
            v-for="t in tracks"
            v-bind:key="t.id"
          >
            <pm-track
              v-bind:class="{ 'is-active': t.id === selectedTrack }"
              v-bind:track="t"
              v-on:select="setSelectedTrack"
            />
          </div>
        </div>
      </div>
      s
    </section>
  </main>
</template>

<script>
// import componente local
import trackService from "../services/track";
import PmTrack from "./Track.vue";
import PmLoader from "./shared/Loader.vue";
import PmNotification from "./shared/Notification.vue";

export default {
  name: "Search",
  // funcion data que retorna un objeto
  data() {
    return {
      searchQuery: "",
      tracks: [],
      // controlamos si se trae info de la api
      isLoading: false,
      // almacena el id del Track seleccinado
      selectedTrack: "",
      // controlamos la visualizacion o no de la notificacion
      showNotification: false
    };
  },
  components: {
    PmTrack,
    PmLoader,
    PmNotification
    // SearchSongs,
    // TaskManager
  },
  methods: {
    search() {
      // validamos que no este vacia la caja de busqueda
      if (!this.searchQuery) {
        return;
      }

      // encendemos el flag cuando se inicia una busqueda
      this.isLoading = true;

      // search retorna una promesa, usamos la chain promise y con then manejamos la respuesta
      trackService.search(this.searchQuery).then(res => {
        // si no hay resultados (busquedad igual 0) retorna true, y se muestra notificacion de lo contrario se oculta
        this.showNotification = res.tracks.total === 0;
        // res (response) -> tracks (object) -> items(array de elementos)
        this.tracks = res.tracks.items;
        // apagamos el flag cuando la busqueda termino
        this.isLoading = false;
      });
    },
    setSelectedTrack(id) {
      this.selectedTrack = id;
    }
  },
  computed: {
    searchMessage() {
      return `${this.tracks.length} songs found`;
    }
  },
  watch: {
    // los watchers deben llamarse igual que la propiedad que quiero observar en este caso showNotification
    // ocultamos el mensaje de notificacion 3 segundo despues de ser mostrado
    showNotification() {
      // los watcjer no retornan valores
      if (this.showNotification) {
        // indicamos la que funcion se ejecute luego de 3 segundo
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    }
  }
};
</script>

<style lang="scss">
.results {
  margin-top: 50px;
}
.is-active {
  border: 3px solid #23d160;
}
</style>

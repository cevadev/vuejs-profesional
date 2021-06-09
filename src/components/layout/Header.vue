<template lang="html">
  <section class="hero is-success">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <div class="nav-rigth nav-menu">
              <strong>Platzi Music</strong>
            </div>
          </div>

          <div class="nav-right nav-menu">
            <!--<a class="nav-item" @click="selectLang('en')">EN</a>
                        <a class="nav-item" @click="selectLang('es')">ES</a>-->

            <!-- Con la función $t() podemos imprimir el idioma deseasdo con base en la key pasada -->
            <!--<router-link class="nav-item" :to="{ name: 'search' }">{{ $t("search") }}</router-link>
                        <router-link class="nav-item" to="about">{{ $t("about") }}</router-link>-->
          </div>
        </div>
      </header>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Platzi Music</h1>
        <h2 class="subtitle">Canciones que están Vue-nisimas!</h2>
        <pm-player></pm-player>
        <!--<pm-player></pm-player>-->
      </div>
    </div>
  </section>
</template>

<script>
import PmPlayer from '../Player.vue'
export default {
  components: {
    PmPlayer
  }
}
</script>

<style lang="scss" scoped></style>

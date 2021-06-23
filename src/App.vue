<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-none d-sm-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <div class="d-flex justify-center mx-2">
        <router-link
        class="pa-2 white--text text-decoration-none rounded"
        exact-active-class="secondary"
        to="/">
          Home
        </router-link>
        <router-link
        class="pa-2 white--text text-decoration-none rounded"
        exact-active-class="secondary"
        to="/Wallpapers">
          Wallpapers
        </router-link>
        <router-link
        class="pa-2 white--text text-decoration-none rounded"
        exact-active-class="secondary"
        to="/RickAndMorty">
          RickAndMorty
        </router-link>
        <router-link
        class="pa-2 white--text text-decoration-none rounded"
        exact-active-class="secondary"
        to="/VueGifs">
          VueGifs
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn
      class="d-none d-sm-flex"
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

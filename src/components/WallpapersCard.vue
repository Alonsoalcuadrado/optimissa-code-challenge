<template>
  <div class="card-container ma-5">
    <v-card elevation="4" :width="displaySize">
      <v-row>
        <v-col cols="6" class="d-flex justify-center align-center pa-0">
          <v-img
          class="rounded-l"
          :src="data.sizes.medium.link"
          width="200">
          </v-img>
        </v-col>
        <v-col cols="6" class="d-flex flex-column justify-space-between">
          <h2 class="text-center">{{ data.title }}</h2>
          <div class="d-inline">
            <v-row>
              <v-col cols="6">
                <h4 class="text--secondary">Category:</h4>
              </v-col>
            </v-row>
            <v-card
            class="card-tags d-inline mr-1 py-1 px-2 caption success cursor-pointer"
            elevation="4"
            v-for="category in data.categories"
            :key="category.ID">
              <i class="fas fa-tag mr-1 white--text"></i>
              <span class="white--text">{{category.name}}</span>
            </v-card>
          </div>
          <div class="d-inline">
            <v-row>
              <v-col cols="6">
                <h4 class="text--secondary">Artist:</h4>
              </v-col>
            </v-row>
            <v-card
            class="card-tags d-inline mr-1 py-1 px-2 caption deep-purple cursor-pointer"
            elevation="4"
            v-for="artist in data.artists"
            :key="artist.ID">
              <i class="fas fa-tag mr-1 white--text"></i>
              <span class="white--text">{{artist.name}}</span>
            </v-card>
          </div>
          <div class="d-flex justify-space-between align-end">
            <router-link :to="{name: 'wallpapers-details', params: { id: data.ID }}">
              <v-btn class="primary">
                Details
              </v-btn>
            </router-link>
            <p class="ma-0 pr-3 body-2 text--secondary">#{{ data.view_count }}</p>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'WallpapersCard',

  props: {
    data: {
    },
  },

  computed: {
    displaySize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 375;
        case 'sm': return 500;
        case 'md': return 470;
        case 'lg': return 590;
        case 'xl': return 850;
        default: return 370;
      }
    },
  },
};
</script>

<style scoped lang="scss">
div.card-container {
  display: inline-block;
}
.cursor-pointer {
  cursor: pointer;
}
</style>

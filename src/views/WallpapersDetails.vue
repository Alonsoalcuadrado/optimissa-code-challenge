<template>
    <div>
      <v-row class="text-center d-flex align-center mt-5" no-gutters>
        <v-col cols="4" class="ma-0 pa-0">
          <h2>Wallpaper name: {{ character.title }}</h2>
        </v-col>
        <v-col cols="4" class="ma-0 pa-0">
          <a :href="character.links.page">More Wallpaper Info</a>
        </v-col>
        <v-col cols="4" class="ma-0 pa-0">
          <v-btn color="success" dark :href="character.links.download">Download</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex flex-column align-center">
          <v-card
          class="ma-4"
          elevation="4"
          :width="size.width"
          v-for="size in character.sizes"
          :key="size.sizes">
            <v-row no-gutters>
              <v-col cols="12" class="d-flex justify-center align-center pa-0">
                <v-img
                class="rounded-t"
                :src="size.link"
                :width="500">
                </v-img>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" class="text-center ma-0 pa-2">
                <h3 class="primary--text">Size</h3>
                <span class="secondary--text body-1">{{size.width}}x</span>
                <span class="secondary--text body-1">{{size.width}}</span>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
</template>

<script>
import getData from '../services/WallpapersAPI';

export default {
  name: 'WallpaperDetails',

  data: () => ({
    character: [],
  }),

  created() {
    this.findCharacter();
  },

  methods: {
    findCharacter() {
      const { id } = this.$route.params;
      getData().then((response) => {
        this.character = response.find((element) => element.ID === Number(id));
      });
    },
  },
};
</script>

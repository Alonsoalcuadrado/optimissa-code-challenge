<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="secondary" max-width="300" elevation="6">
          <v-img :src="charactersData.image" height="250"></v-img>

          <v-row no-gutters>
            <v-col cols="12" class="ma-1 pa-0">
              <v-card-title
              class="ma-0 px-2 pt-2 pb-0 white--text">
                {{ charactersData.name }}
              </v-card-title>
            </v-col>
          </v-row>

          <v-card-text class="ma-0 pa-0">
            <v-row no-gutters>
              <v-col cols="12" class="ma-1 pa-0">
                <span class="d-block px-4 white--text">
                  <i class="fas fa-circle success--text"></i>
                    {{ charactersData.status }} - {{ charactersData.species }}
                </span>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col cols="12" class="ma-0 mx-5 pa-0 white--text">
                <h3>Last known location:</h3>
              </v-col>
              <v-col cols="12" class="ma-0 mx-5 pa-0 white--text">
                <p>{{ charactersData.location.name }}</p>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col cols="12" class="ma-0 mx-5 pa-0 white--text">
                <h3>First seen in:</h3>
              </v-col>
              <v-col cols="12" class="ma-0 mx-5 pa-0 white--text">
                <p>{{ firstEpisode }}</p>
              </v-col>
            </v-row>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import RaMAPI from '../services/RickAndMortyAPI';

export default {
  name: 'CharacterCard',

  props: {
    charactersData: [],
    firstSeen: null,
  },

  computed: {
    firstEpisode: {
      get() {
        return this.firstSeen;
      },
      set(value) {
        this.firstSeen = value;
      },
    },
  },

  created() {
    RaMAPI.getEpisode(this.charactersData.episode[0]).then((response) => {
      this.firstEpisode = response.name;
    });
  },
};
</script>

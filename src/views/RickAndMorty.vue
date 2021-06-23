<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" class="d-flex flex-wrap justify-center ma-5 pt-5">
        <CharacterCard
        class="ma-5"
        v-for="character in characters"
        :key="character.id"
        :charactersData="character"></CharacterCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CharacterCard from '../components/CharacterCard.vue';
import RaMAPI from '../services/RickAndMortyAPI';

export default {
  name: 'RickAndMorty',

  components: {
    CharacterCard,
  },

  data: () => ({
    characters: [],
  }),

  created() {
    RaMAPI.getCharacters().then((response) => {
      this.characters = response.results;
    });
  },
};
</script>

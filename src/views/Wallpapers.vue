<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" class="d-flex flex-wrap justify-center ma-0 pt-5">
        <hello-world
        class="my-5"
        v-for="card in cards" :key="card.ID" :data="card"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HelloWorld from '../components/WallpapersCard.vue';
import getData from '../services/WallpapersAPI';

export default {
  name: 'Home',

  components: {
    HelloWorld,
  },

  data: () => ({
    cards: [],
  }),

  created() {
    getData().then((response) => {
      this.cards = response;
    });
  },
};
</script>

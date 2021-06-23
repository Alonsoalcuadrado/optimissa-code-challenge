<template>
  <div class="d-flex flex-column justify-center align-center mt-10">
    <v-row no-gutters>
    <v-col cols="12" >
      <v-img
      class="mb-5 rounded-circle"
      src="../assets/images/ErickAlonso-min.jpeg"
      width="250"
      height="250">
      </v-img>
    </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" class="d-flex flex-wrap justify-center ma-0 pt-5">
        <link-card v-for="card in cardData" :key="card.text" :cardData="card"></link-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LinkCard from '../components/LinkCard.vue';

export default {
  name: 'Home',

  components: {
    LinkCard,
  },

  data: () => ({
    cardData: [
      {
        img: 'https://cdn.svgporn.com/logos/github-icon.svg',
        link: 'https://github.com/Alonsoalcuadrado',
        text: 'Repositorio de Github',
      },
      {
        img: 'https://cdn.svgporn.com/logos/google-gmail.svg',
        mailto: 'alcuadradoalonso@gmail.com',
        text: 'alcuadradoalonso',
      },
      {
        img: 'https://cdn.svgporn.com/logos/linkedin-icon.svg',
        link: 'https://www.linkedin.com/in/erickalonso2/',
        text: 'Perfil de LinkedIn',
      },
    ],
  }),
};
</script>

<style scoped>
  .main-image {
    /* display: flex; */
  }
</style>

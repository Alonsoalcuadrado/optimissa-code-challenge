<template>
  <div class="ma-5">
    <v-card class="" width="250" elevation="4">
      <v-row class="d-flex justify-center" no-gutters>
        <v-col class="col-separator d-flex align-center justify-center" cols="3">
          <v-img class="ma-2" :src="cardData.img" width="1">
          </v-img>
        </v-col>
        <v-col cols="8" class="d-flex align-center justify-center">
          <template v-if="cardData.link">
            <a
            class="font-weight-medium text-decoration-none"
            :href="cardData.link"
            target="_blank"
            rel="noopener noreferrer">
              {{ cardData.text }}
            </a>
          </template>
          <template v-if="cardData.mailto">
            <a
            class="font-weight-medium text-decoration-none"
            :href="`mailto:${cardData.mailto}`"
            target="_blank"
            rel="noopener noreferrer">
              {{ cardData.text }}
            </a>
          </template>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'LinkCard',

  props: {
    cardData: [],
  },
};
</script>

<style scoped>
  .col-separator{
    border-right: 2px solid #aaaaaa;
  }
</style>

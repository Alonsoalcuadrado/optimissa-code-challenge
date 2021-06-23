<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="secondary" max-width="250" elevation="6">
          <v-img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" height="250"></v-img>

          <v-row no-gutters>
            <v-col cols="12" class="ma-1 pa-0">
              <v-card-title class="ma-0 px-2 pt-2 pb-0 white--text">Rick Sanchez</v-card-title>
            </v-col>
          </v-row>

          <v-card-text class="ma-0 pa-0">
            <v-row no-gutters>
              <v-col cols="12" class="ma-1 pa-0">
                <span class="d-block px-4 white--text">
                  <i class="fas fa-circle success--text"></i>
                    Alive - Human
                </span>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col cols="12" class="ma-0 mx-5 pa-0 white--text">
                <h3>Last known location:</h3>
              </v-col>
              <v-col cols="12" class="ma-0 mx-5 pa-0 white--text">
                <p>Earth (Replacement Dimension</p>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col cols="12" class="ma-0 mx-5 pa-0 white--text">
                <h3>First seen in:</h3>
              </v-col>
              <v-col cols="12" class="ma-0 mx-5 pa-0 white--text">
                <p>Episodio 1</p>
              </v-col>
            </v-row>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

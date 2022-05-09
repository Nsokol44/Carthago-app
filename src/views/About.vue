<template>
  <div>
    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
          <v-container>
            <v-row center no-gutters>
              <v-col center>
                <v-img
                  :src="require('../assets/brownwithtext.png')"
                  height="600"
                  max-height="400"
                  max-width="400"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-flex>

        <v-flex xs12 sm4 class="my-2 pa-2">
          <v-card class="text-center">
            <h3 class="headline">
              Our Team is Creating the Largest Decentralized Repository of
              Information, Data, and Analytics Content.
            </h3>
          </v-card>
        </v-flex>

        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-center">
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">
                      Nicholas Sokol, PhD
                    </div>
                  </v-card-title>
                  <v-card-text>
                    Nick founded Carthago to create accessible education, data, and analytics in a web3 format. 
                  </v-card-text>
                </v-card>
              </v-flex>
              
             
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
export default {
  data: () => ({
    alignments: ["start", "center", "end"],
  }),
};
</script>

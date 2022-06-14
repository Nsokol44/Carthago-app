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

         <v-card
    class="mx-auto mb-12"
    max-width="400"
    tile
    
  >
  

    <v-list-item two-line class="pa-2">
      <v-list-item-content class="auto">

        <v-btn transparent color="" href="https://www.linkedin.com/in/nicksokol/">
        <v-list-item-title> Nicholas Sokol, PhD</v-list-item-title></v-btn>
        <v-list-item-subtitle>Founder - Climate, Energy, Data Science</v-list-item-subtitle>
        
          <v-btn transparent color="" href="https://www.linkedin.com/in/cristopher-herrera-urena-1608411b7/">
        <v-list-item-title> Cris Herrera </v-list-item-title></v-btn>
        <v-list-item-subtitle>Co-Founder, Web Developer</v-list-item-subtitle>

         <v-btn transparent color="" href="https://www.linkedin.com/in/michellej-newyork/">
        <v-list-item-title> Michelle Javed </v-list-item-title></v-btn>
        <v-list-item-subtitle>Co-Founder, Marketing</v-list-item-subtitle>

        <v-btn transparent color="" href="https://www.linkedin.com/in/olusegun-joel-titus-3622b8b0/">
        <v-list-item-title> Olusegun Joel Titus</v-list-item-title></v-btn>
        <v-list-item-subtitle>Lead Contributor - Writer, Blockchain, Analyst</v-list-item-subtitle>

         <v-btn transparent color="" href="https://www.linkedin.com/in/deshayk/">
        <v-list-item-title> DeShay K</v-list-item-title></v-btn>
        <v-list-item-subtitle>Contributor</v-list-item-subtitle>

         <v-btn transparent color="" href="https://www.linkedin.com/in/will-stansill-044513232/">
        <v-list-item-title> Will Stansill</v-list-item-title></v-btn>
        <v-list-item-subtitle>Contributor - Blockchain Developer, Writer, and Researcher</v-list-item-subtitle>

         <v-btn transparent color="" href="https://www.linkedin.com/in/katherine-aldama-5165a3227/">
        <v-list-item-title> Katherine Aldama</v-list-item-title></v-btn>
        <v-list-item-subtitle>Blockchain Writer</v-list-item-subtitle>

      


      </v-list-item-content>
    </v-list-item>

    
  </v-card>
   
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

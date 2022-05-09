<template>
    <v-footer fixed class="brown darken-4">
      <img
        :src="require('../assets/carthagocircle.png')"
        height="30px"
        width="30px"
      />
      <v-layout row wrap align-center>
        <v-flex xs12 class="text-xs-center">
          <div class="white--text ml-4">
            Copyright Carthago
            <v-icon class="white--text">2022</v-icon>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
</template>

<script>
//import youTube from "../assets/Icons/youtube-brands.svg";
//import instagram from "../assets/Icons/instagram-brands.svg";
//import linkedin from "../assets/Icons/linkedin-brands.svg";

export default {
    name: "footer-vue",
    components: {
        //youTube,
        //instagram,
        //linkedin,
    },
};
</script>
<template>
    <v-toolbar class="white">
      <v-toolbar-side-icon class="logo"
        ><img
          :src="require('../assets/carthagocircle.png')"
          alt="Vuetify.js"
          height="50px"
          width="50px"
      /></v-toolbar-side-icon>
      <v-toolbar-title class="mx-0" v-text="title"></v-toolbar-title>
      <p>Beta</p>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn raised>Crypto</v-btn>
        <v-btn raised>Stocks</v-btn>
        <v-btn raised>News</v-btn>
        <!--<v-btn flat>Blog</v-btn>-->
        <v-btn flat class="pink lighten-3">Sign In</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  name: "navigation-vue",
  data: function() {
    return {
      title: "Carthago",
    };
  },
};
</script>
<template>
  <v-app light>
      <Navigation v-if="!navigation"/>
      <router-view />
      <Footer v-if="!navigation" />
  </v-app>
</template>


<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      navigation: null,
    };
  },
    
};
</script>

<style scoped>


</style>

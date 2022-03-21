<template>
  <v-app light>
    
     <Navigation v-if="!navigation" />
     <v-main> 
      <router-view />
      </v-main>
    <Footer v-if="!navigation" />
    
  </v-app>
</template>


<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

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
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if(user) {
       
        this.$store.dispatch("getCurrentUser", user);
      }
    }),
    this.checkRoute();
    this.$store.dispatch("getPost");
  },
  mounted() {},
  methods: {
    checkRoute() {
      if (this.$route.name == "Login" || 
      this.$route.name == "Register" || 
      this.$route.name == "ForgotPassword"
       ) {
        this.navigation = true;
        return;
      } 
      this.navigation = false;
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>

<style scoped>
</style>

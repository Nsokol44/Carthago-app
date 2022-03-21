<template>
  <v-toolbar fixed dark>
    <v-toolbar-side-icon class="logo"
      >
      <v-btn flat :to="{ name: 'Home'}" icon>
        <img
        :src="require('../assets/carthagocircle.png')"
        alt="Vuetify.js"
        height="50px"
        width="50px"
    /></v-btn></v-toolbar-side-icon>
    <v-toolbar-title
      class="mx-1"
      v-text="title"
    ></v-toolbar-title>
    <p>Beta</p>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <!--<v-btn raised :to="{ name: 'Crypto' }">Crypto</v-btn> -->
      <!--<v-btn raised :to="{name: 'Learn'}">Learn</v-btn> -->
      <v-btn raised v-if="admin" :to="{ name: 'Contribute'}">Contribute</v-btn>
      <!--<v-btn flat>Blog</v-btn>-->
      <v-btn flat class="yellow darken-3" :to="{ name: 'Login'}">Sign In</v-btn>

    </v-toolbar-items>
  

     <v-menu
            bottom
            left
            dark
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

             <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-btn raised :to="{ name: 'Crypto' }">Crypto</v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn raised :to="{name: 'Learn'}">Learn</v-btn>
          </v-list-item>


          <v-list-item>
            <v-btn raised :to="{ name: 'About Us'}">About Us</v-btn>
          </v-list-item>

         
        </v-list-item-group>
      </v-list>
          </v-menu>

  </v-toolbar>
  
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
    name: 'navigation',
    components: {
       
    },
    data() {
        return {
            profileMenu: null,
            mobile: null,
            mobileNav: null,
            windownWidth: null,
            title: "Carthago",
             drawer: false,
            group: null,

            items: [
              { title: 'Crypto'},
              { title: 'Learn'},
              { title: 'Contribute'},
              { title: 'Earn'},
              { title: 'About Us'},

              ],
        };
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    methods: {
        checkScreen() {
            this.windownWidth = window.innerWidth;
            if (this.windownWidth <= 750) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },

        toggleMobileNav () {
            this.mobileNav = !this.mobileNav;
        },

        toggleProfileMenu(e) {
            if(e.target === this.$refs.profile){
            this.profileMenu = !this.profileMenu;
            }
        },
        signOut() {
            firebase.auth().signOut();
            window.location.reload();
        }
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        admin() {
            return this.$store.state.profileAdmin;
        },
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>

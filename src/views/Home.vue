<template>
 <div>
      <section>
        <v-parallax :src="require('../assets/carthagocircle.png')" height="600">
          <v-layout column align-center justify-center class="white--text">
            <h1
              class="white--text mb-2 display-1 text-xs-center"
              style="font-weight: 900; text-shadow: 3px 2px #000000"
            >
              Decentralized Education, Science, and Information on Demand
            </h1>
            <div
              class="white--text subheading mb-3 text-xs-center"
              style="font-weight: 900; text-shadow: 2px 2px #000000"
            >
              Learn, Think, and Grow
            </div>
            <v-btn
              class="purple lighten-2 mt-5"
              dark
              large
              href="/articles"
            >
              View Articles
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-center">
              <h2 class="headline">
                We Aim To Be The Biggest Repository of Information on Web3.
              </h2>
              <span class="subheading">
                
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2"
                        >mdi-school</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Access Our Educational Content</div>
                    </v-card-title>
                    <v-card-text>
                     Become more knowledgeable about blockchain, start the path of a developer, learn about analytics and data, learn IoT and hardware. It's all here.
                    </v-card-text>
                  </v-card>
                  <v-btn class="brown white--text" raised :to="{ name: 'Learn' }">Learn</v-btn>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2"
                        >mdi-chart-sankey</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Data At Your Fingertips</div>
                    </v-card-title>
                    <v-card-text>
                     We can provide a number of resources to help you accomplish your goals on chain or off chain. Data are still digital gold.  
                    </v-card-text>
                  </v-card>
                   <v-btn class="brown white--text" raised :to="{ name: 'Data' }">Data</v-btn>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2"
                        >mdi-call-split</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">
                        Analytics on Demand
                      </div>
                    </v-card-title>
                    <v-card-text>
                      Access a number of analytics reports to help guide your decision making. From technical writing to statistical reports, find it here.
                    </v-card-text>
                  </v-card>
                  <v-btn class="brown white--text" raised :to="{ name: 'Analytics'}">Analytics</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 text-xs-center class="mt-5">
              <div class="headline">Want updates for when the beta is ready?! Sign up for alerts.</div>
              <br />
              <div>
               Carthago will be releasing educational content for upskilling in both web2 and web3, creating an open data repository, and making analytics and BI readily available for users. All in a web3 format. Sign up today for updates! 
              </div>
            </v-flex>
            <v-flex xs8 offset-xs2>
              <v-card class="elevation-0 transparent">
                <v-card-text>
                  <v-flex xs12>
                    <v-text-field
                      box
                      label="Email address"
                      :rules="emailRules"
                      v-model="email"
                      hint="Enter your email!"
                      persistent-hint
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 >
                    <v-text-field
                      box
                      multi-line
                      label="Tell us What You Want?"
                      v-model="bio"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 class="text-xs-center">
                    <v-btn
                      class="brown white--text"
                      dark
                      large
                      @click="subscribe"
                      >Subscribe</v-btn
                    >
                  </v-flex>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      
    

      <section>
        <v-container>
          <v-layout>
            <v-flex xs12 class="text-xs-center"> </v-flex>
          </v-layout>
        </v-container>
      </section>
 </div>
</template>

<script>
import db from "../firebase/firebaseInit";

export default {
    name: "Home",
    components: {
   
    },
    data() {
        return {
            bio: "",
            email: "",
            error: "",
            errorMsg: "",
            valid: true,
             nameRules: [
        v => !!v || 'bio is required',
        v => (v && v.length <= 10) || 'Bio must be more than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
        };
    },
    methods: {
        async subscribe() {
            if (
                this.email !== "" &&
                this.bio !== ""
            ) 
            {
                this.error = false;
                this.errorMsg = "";


                db.collection("subscribers").add({ bio: this.bio, email: this.email });
                this.$router.push({name: 'Home'});
                return;
            }
            this.error = true;
            this.errorMsg = "Please fill out all fields!";
        },
    },
    computed: {
        user() {
      return this.$store.state.user;
    },
    },
};
</script>

<style scoped>
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>

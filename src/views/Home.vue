<template>
  <v-content>
    <v-main>
      <section>
        <v-parallax :src="require('../assets/carthagocircle.png')" height="600">
          <v-layout column align-center justify-center class="white--text">
            <h1
              class="white--text mb-2 display-1 text-xs-center"
              style="font-weight: 900; text-shadow: 3px 2px #000000"
            >
              Blockchain and Web3 Insight On Demand
            </h1>
            <div
              class="white--text subheading mb-3 text-xs-center"
              style="font-weight: 900; text-shadow: 2px 2px #000000"
            >
              Learn, Invest, and Grow
            </div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-center">
              <h2 class="headline">
                We Aim To Be The Biggest Repository of Blockchain Information.
              </h2>
              <span class="subheading">
                Don't Get Bogged Down in the Surge of Knowledge
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
                      <div class="headline text-center">Learn About Blockchain and DeFi</div>
                    </v-card-title>
                    <v-card-text>
                     We have a number of resources you can use to learn about blockchain and various investments pertaining to it. Never spend money again without being knowledgable.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2"
                        >mdi-chart-sankey</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Blockchain Guidance</div>
                    </v-card-title>
                    <v-card-text>
                     Utilize our large repository of knowledge and experts to assist you with navigating NFT creation, Asset Development and Blockchain Integration for your projects. 
                    </v-card-text>
                  </v-card>
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
                        Earn Rewards
                      </div>
                    </v-card-title>
                    <v-card-text>
                      When you contribute to the knowledge base of the platform you will earn Cothons, Carthago's standard asset built on the Algorand blockchain. 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="require('../assets/finance.jpeg')" height="380">
          <v-layout column align-center justify-center>
            <div class="headline black--text mb-3 text-xs-center">
              Carthago Educates and Provides First Hand Guidance for Blockchain Integration
            </div>
            <em class="black"
              >There's no need to risk your money before you know what you are doing.</em
            >
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Get more info
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 text-xs-center class="mt-5">
              <div class="headline">Want updates for when the beta is ready?! Sign up for alerts.</div>
              <br />
              <div>
                Being an early tester will have major perks in the future. Carthago is creating a new way to learn about crypto, NFTs, DeFi, and Web3 App Development.
                Signing up today ensures you are the first to access any future rewards, incentives, or offers. 
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
                      label="Bio and Your Biggest Desire."
                      v-model="bio"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 class="text-xs-center">
                    <v-btn
                      class="blue lighten-2 mb-5"
                      dark
                      large
                      @click="subscribe"
                      >Get in touch</v-btn
                    >
                  </v-flex>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-parallax :src="require('../assets/financeChart.jpeg')"  height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">
              Be knowledgeable when it comes to Blockchain by using Carthago!
            </div>
          </v-layout>
          <v-layout justify-space-around justify-center>

            <a href="https://www.youtube.com/channel/UCLCzWezDeP6576nAC7s2aPw">
            <v-icon x-large dark >mdi-youtube</v-icon>
            </a>

            <a href="https://www.youtube.com/channel/UCLCzWezDeP6576nAC7s2aPw">
            <v-icon x-large dark>mdi-instagram</v-icon>
            </a>

            <a href="https://medium.com/Carthago">
            <v-icon x-large dark>mdi-facebook</v-icon>
            </a>
            
            <a href="https://discord.gg/8uGuQqJM2V">
            <v-icon x-large dark>mdi-discord</v-icon>
            </a>

          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Free to Access</div>
                </v-card-title>
                <v-card-text>
                  Carthago will be free to access for all users upon release. 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Get Involved</div>
                </v-card-title>
                <v-card-text>
                  We'd love to work with others who want to help build out the platform.
                  Send us your portfolio and we will reach out to you.
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
    </v-main>
  </v-content>
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

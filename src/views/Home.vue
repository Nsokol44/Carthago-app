<template>
  <v-content>
    <v-main>
      <section>
        <v-parallax :src="imageLink.sub_main" height="600">
          <v-layout column align-center justify-center class="white--text">
            <h1
              class="white--text mb-2 display-1 text-xs-center"
              style="font-weight: 900; text-shadow: 3px 2px #000000"
            >
              Financial Freedom at Your Fingertips
            </h1>
            <div
              class="white--text subheading mb-3 text-xs-center"
              style="font-weight: 900; text-shadow: 2px 2px #000000"
            >
              Learn, Invest, and Earn
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
                A New Way to Explore Financial Opportunities
              </h2>
              <span class="subheading">
                No Upfront Cost, Experiment and Grow
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
                      <div class="headline text-center">Learn About Investments</div>
                    </v-card-title>
                    <v-card-text>
                     Information #1
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
                      <div class="headline">Simulate Portfolios</div>
                    </v-card-title>
                    <v-card-text>
                     Information #2
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
                      Information #3
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="imageLink.main" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">
              Carthago allows anyone to learn about investments and to create a portfolio before buying.
            </div>
            <em
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
                Being an early tester will have major perks in the future. Carthago is creating a new way to learn about crypto, stocks, investing, and financial freedom. 
                Signing up today ensures you are the first to access any future rewards, incentives, or offers. 
              </div>
            </v-flex>
            <v-flex xs8 offset-xs2>
              <v-card class="elevation-0 transparent">
                <v-card-text>
                  <v-flex xs12 v-if="!subscribed">
                    <v-text-field
                      box
                      label="Email address"
                      :rules="emailRules"
                      v-model="email"
                      hint="Enter your email!"
                      persistent-hint
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 v-if="!subscribed">
                    <v-text-field
                      box
                      multi-line
                      label="Bio and Your Biggest Desire."
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 class="text-xs-center" v-if="!subscribed">
                    <v-btn
                      class="blue lighten-2 mb-5"
                      dark
                      large
                      @click="subscribe"
                      >Get in touch</v-btn
                    >
                  </v-flex>
                  <v-flex xs12 class="text-xs-center" v-if="subscribed">
                    <v-btn class="green lighten-2 mb-5" dark large
                      >Welcome on board!</v-btn
                    >
                  </v-flex>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-parallax :src="imageLink.social_cover" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">
              There's no easy way to financial independence, but we think we can help!
            </div>
          </v-layout>
          <v-layout justify-space-around justify-center>
            <v-icon x-large dark>mdi-youtube</v-icon>

            <v-icon x-large dark>mdi-instagram</v-icon>

            <v-icon x-large dark>mdi-facebook</v-icon>

            <v-icon x-large dark>mdi-discord</v-icon>


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
export default {
  name: "Home",
  data: function () {
    return {
      imageLink: {
        main: "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fb13f0434-b228-11e6-8e5d-5252025056ab_web_scale_0.4666667_0.4666667__.jpg?alt=media&token=660df23e-599e-434b-9313-ba69c973eeea",
        sub_main:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2FNight-Club-Clubbing-Jobs-Abroad2.jpg?alt=media&token=82bbda7d-5df4-430b-9217-adaf1c8485c5",
        logo: "../assets/carthagocircle.png",
        social_cover:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fo-NIGHTCLUB-facebook.jpg?alt=media&token=cefc5c4c-9714-41da-9c22-f63caf5e89a4",
      },
      email: "",
      emailRules: [
        (v) => {
          return !!v || "E-mail is required";
        },
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      subscribed: false,
    };
  },
  methods: {
    subscribe: function () {
      this.subscribed = !this.subscribed;
    },
  },

  computed: {
    imgHeight: function () {
      var offset = 320;
      console.log("new image height is " + (this.pageHeight - offset));
      return this.pageHeight - offset;
    },
  },

  mounted: function () {
    this.calculateHeight();
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

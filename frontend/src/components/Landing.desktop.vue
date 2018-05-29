<template>
  <v-app dark>
    <v-content>
      <section>
        <v-parallax
        :src="encodeURI('https://image.ibb.co/bMByPS/audience_868074_1920.jpg')"
        height="600">
            <v-toolbar class="darkgrey">
     <v-toolbar-side-icon>
     </v-toolbar-side-icon>
      <v-toolbar-items>
        <!--<v-btn flat>Blog</v-btn>-->
        <loginModal />
        <SignUpModal />
        <p @click='logout'>LOGOUT</p>
      </v-toolbar-items>
    </v-toolbar>
          <v-layout
          column
          align-center
          justify-center
          class="white--text">
            <h1
            class="white--text mb-5 mt-5 display-3 text-xs-center"
            style="font-weight: 900; font-family: Lucida Console;">
              <span style="text-shadow: 1px 1px 3px black;">Up</span><span style="color: gold;  text-shadow: 1px 1px 3px black;">Next</span>
            </h1>
            <div
            class="white--text subheading mt-5 text-xs-center display-2"
            style="font-weight: 800; text-shadow: 1px 1px #000; font-family: Trebuchet; width: 100%;">
            <div style="height: 100px;"></div>
              <div style="width: 70%; margin: auto;"><span class="white--text display" style="text-shadow: 1px 1px 2px black; font-size: 1.6em; padding: 3%;">Be there when it counts</span></div>
            </div>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to notify event attendees of schedule updates</h2>
              <span class="subheading">
                Effortless, realtime event updates at your fingertips
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">event</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Realtime Updates</div>
                    </v-card-title>
                    <v-card-text>
                      Give your event attendees peace of mind by alerting them when their show/act/band/child is next up to come on stage. Now busy professionals can still find the time in their days because instead of four hours, tehy can attend just the portion of the event that they want to see.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">refresh</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Automated Notifications</div>
                    </v-card-title>
                    <v-card-text>
                      Simply update the schedule on UpNext Web or UpNext Mobile and we'll take care of the rest. Adjusting the start time or pushing back an act automatically updates our system, which can then push notifications out to your users so they don't miss a moment.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">settings</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Multiple Options</div>
                    </v-card-title>
                    <v-card-text>
                      Let attendees choose between phone and e-mail notifications. We've got you covered.  Are you going to host more than one event with a need for more than oen event administrator?  Check out our subscriptions for organizations to take advantage of a yearly plan that let's you set up an unlimited number of events!
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="encodeURI('https://image.ibb.co/cJvH17/graduation_995042_1920.jpg')" height="380">
          <v-layout column align-center justify-center style="width: 100%; background-color: rgba(15,15,15,.7)">
            <div class="headline white--text mb-3 text-xs-center"><strong>Up<span class="amber--text">Next</span></strong> makes it possible for busy professionals to attend without giving up their entire day.  </div>
            <em>Busy attendees can show up just in time for a certain portion of an event without the risk of missing it.</em>
            <v-btn class="blue lighten-2 mt-5" dark large href="#" @click.prevent="">
              Schedule an event
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

       <section>
        <v-container grid-list-md>


          <v-layout row wrap>
          <v-flex xs12 text-xs-center class="mt-5">
           <div class="headline">Questions? Let us know!</div>
           <br>
          <div>We're looking for event organizers just like you to try out our product at a discount. Send us your feedback and receive valuable savings!</div>
          </v-flex>
          <v-flex xs8 offset-xs2>

              <v-card class="elevation-0 transparent">

                <v-card-text>
                  <v-flex xs12 v-if="!subscribed">
                    <v-text-field box label="Email address" :rules="emailRules" v-model="email" hint="Enter your email!" persistent-hint></v-text-field>
                  </v-flex>
                  <v-flex xs12 v-if="!subscribed">
                    <v-text-field box multi-line label="Message"></v-text-field>
                  </v-flex>
                  <v-flex xs12 class="text-xs-center" v-if="!subscribed">
                    <v-btn class="blue lighten-2 mb-5" dark large @click="subscribe">Contact us</v-btn>
                  </v-flex>
                   <v-flex xs12 class="text-xs-center" v-if="subscribed">
                    <v-btn class="green lighten-2 mb-5" dark large>What's up next?</v-btn>
                  </v-flex>
                </v-card-text>

             </v-card>

                </v-flex>
            </v-layout>
          </v-container>
      </section>

       <section>
        <v-parallax :src="encodeURI('https://image.ibb.co/mUePES/concert_2527495_1280.jpg')" height="380">
          <v-layout column align-center justify-center>
            <div class="headline yellow--text mb-3 text-xs-center" style="background-color: rgba(105, 105, 105, 0.4); color: gold;">Visit us on social media</div>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
</v-app>
</template>

<script>
import SignUpModal from './SignUpModal.desktop.vue';
import LoginModal from './LoginModal.desktop.vue';

export default {
  name: 'App',
  components: {
    SignUpModal,
    LoginModal
  },
  data: function() {
    return {
      title: 'UpNext',
      email: '',
      emailRules: [
        v => {
          return !!v || 'Please enter an email';
        },
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'Invalid email'
      ],
      subscribed: false,
      dialog: false,
      authorized: false
    };
  },
  methods: {
    subscribe: function() {
      this.subscribed = !this.subscribed;
    },
    openDialog: function() {
      this.open = true;
    },

    logout() {
      this.deleteCookie('user');
      this.deleteCookie('isAdmin')
      this.isUserAuthenticated = false;
      localStorage.clear();

      this.$router.push({ name: 'Landing' });
    },
    deleteCookie(cookie) {
      document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    }
  },

  computed: {
    imgHeight: function() {
      var offset = 320;
      console.log('new image height is ' + (this.pageHeight - offset));
      return this.pageHeight - offset;
    }
  },

  mounted: function() {
    this.calculateHeight();
  }
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

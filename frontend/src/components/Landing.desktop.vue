<template>

  <v-content>
    <section>
      <v-parallax
      :src="encodeURI('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=be465b88fdf21a6e05ab522458452344&auto=format&fit=crop&w=1934&q=80')"
      height="600">


        <v-layout
        column
        align-center
        justify-center>
          <h1
          class="mb-5 mt-5 display-4 text-xs-center titleFont upShadow">
            <span>Up</span><span style="color: #cae325">Next</span>
          </h1>
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
            <h2 class="headline correctFont">The best way to notify event attendees of schedule updates</h2>
            <span class="subheading correctFont">
              Effortless, realtime event updates at your fingertips
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-content>
                  <v-content class="text-xs-center">
                    <v-icon x-large class="blue--text mb-4">event</v-icon>
                  </v-content>
                  <v-content primary-title class="layout justify-center">
                    <div class="headline text-xs-center mb-4 correctFont">Realtime Updates</div>
                  </v-content>
                  <v-content class="mx-3 px-3 text-xs-center correctFont">
                    Give your event attendees peace of mind by alerting them when their show/act/band/child is next up to come on stage. Now busy professionals can still find the time in their days because instead of four hours, tehy can attend just the portion of the event that they want to see.
                  </v-content>
                </v-content>
              </v-flex>
              <v-flex xs12 md4>
                <v-content class="elevation-0 transparent">
                  <v-content class="text-xs-center">
                    <v-icon x-large class="blue--text mb-4">refresh</v-icon>
                  </v-content>
                  <v-content primary-title class="layout justify-center">
                    <div class="headline text-xs-center mb-4 correctFont">Automated Notifications</div>
                  </v-content>
                  <v-content class="mx-3 px-3 text-xs-center correctFont">
                    Simply update the schedule on UpNext Web or UpNext Mobile and we'll take care of the rest. Adjusting the start time or pushing back an act automatically updates our system, which can then push notifications out to your users so they don't miss a moment.
                  </v-content>
                </v-content>
              </v-flex>
              <v-flex xs12 md4>
                <v-content class="elevation-0 transparent">
                  <v-content class="text-xs-center">
                    <v-icon x-large class="blue--text mb-4">settings</v-icon>
                  </v-content>
                  <v-content primary-title class="layout justify-center correctFont">
                    <div class="headline text-xs-center mb-4">Multiple Options</div>
                  </v-content>
                  <v-content class="mx-3 px-3 text-xs-center correctFont">
                    Let attendees choose between phone and e-mail notifications. We've got you covered.  Are you going to host more than one event with a need for more than oen event administrator?  Check out our subscriptions for organizations to take advantage of a yearly plan that let's you set up an unlimited number of events!
                  </v-content>
                </v-content>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>


    <v-content >
      <v-parallax  :src="encodeURI('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=be465b88fdf21a6e05ab522458452344&auto=format&fit=crop&w=1934&q=80')" height="600">
        <v-layout column align-center justify-center>
          <div class="headline mb-3 text-xs-center correctFont"><strong>Up<span style="color: #cae325">Next</span></strong> makes it possible for busy professionals to attend without giving up their entire day.  </div>
          <div class="mb-4 correctFont headline">Busy attendees can show up just in time for a certain portion of an event without the risk of missing it.</div>
          <v-btn class="darkBlueButton" dark large href="#" @click.prevent="nothing">
            Schedule an event
          </v-btn>
        </v-layout>
      </v-parallax>
    </v-content>

      <section>
      <v-container grid-list-md>


        <v-layout row wrap>
        <v-flex xs12 text-xs-center class="mt-5">
          <div class="headline correctFont">Questions? Let us know!</div>
          <br>
        <div class="correctFont">We're looking for event organizers just like you to try out our product at a discount. Send us your feedback and receive valuable savings!</div>
        </v-flex>
        <v-flex xs8 offset-xs2>

            <v-card class="elevation-0 transparent">

              <v-card-text>
                <v-flex xs12 v-if="subscribed">
                  <v-text-field class="correctFont" box label="Email address" :rules="emailRules" v-model="email" hint="Enter your email!" persistent-hint></v-text-field>
                </v-flex>
                <v-flex xs12 v-if="subscribed">
                  <v-text-field class="correctFont" box multi-line label="Message"></v-text-field>
                </v-flex>
                <v-flex xs12 class="text-xs-center" v-if="subscribed">
                  <v-btn class="greenButton" dark large >Submit</v-btn>
                </v-flex>
                  <v-flex xs12 class="text-xs-center" v-if="!subscribed">
                  <v-btn  class="darkBlueButton" @click="subscribe" dark large>Contact Us!</v-btn>
                </v-flex>
              </v-card-text>

            </v-card>

              </v-flex>
          </v-layout>
        </v-container>
    </section>
  </v-content>

</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      title: "UpNext",
      email: "",
      emailRules: [
        v => {
          return !!v || "Please enter an email";
        },
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Invalid email"
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
      this.deleteCookie("user");
      this.isUserAuthenticated = false;
      localStorage.clear();

      this.$router.push({ name: "Landing" });
    },
    deleteCookie(cookie) {
      document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    },
    nothing() {
      console.log("nothing");
    }
  },

  computed: {
    imgHeight: function() {
      var offset = 320;
      console.log("new image height is " + (this.pageHeight - offset));
      return this.pageHeight - offset;
    }
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

.titleFont {
  font-weight: 900;
  font-family: Roboto;
  z-index: 0;
}

.upShadow {
  text-shadow: 1px 1px 3px black;
}

.darkBlueButton {
  background-color: #051760;
  text-shadow: 1px 1px 2px black;
  color: white;
  font-family: Roboto;
}

.greenButton {
  text-shadow: 1px 1px 2px black;
  background-color: #66bb6a;
  color: white;
  font-family: Roboto;
}

.correctFont {
  font-family: Roboto;
  line-height: 2rem;
}
</style>

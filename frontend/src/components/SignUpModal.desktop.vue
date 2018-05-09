<template>
  <v-app dark>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn
      slot="activator"
      text="sign up"
      color="blue"
      style="overflow:hidden; "
      dark>
      Sign Up
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Create Account</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="fullName" label="Full name" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email" v-model="email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" v-model="password" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Confirm Password" v-model="confirmPassword" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
          color="blue darken-1"
          app
          flat @click.native="dialog = false">
          Close
          </v-btn>
          <v-btn
          color="blue darken-1"
          flat
          @click.native="postNewUser"
          >
          Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  </v-app>
</template>


<script>
//const axios = require('axios');

export default {
  data: () => ({
    dialog: false,
    isLoading: false,
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }),
  methods: {
    postNewUser: function() {
      const { fullName, email, password } = this;
      const newUser = { fullName, email, password };
      console.log(newUser);
      if (password === this.confirmPassword) {
        this.isLoading = true;
        // axios
        //   .post('localhost:1337/signup', {
        //     title: 'foo',
        //     body: 'bar',
        //     userId: 1
        //   })
        //   .then(resp => {
        //     this.isLoading = false;
        //     console.log(resp);
        //     this.dialog = false;
        //   })
        //   .catch(err => console.log(err));
      }
    }
  }
};
</script>

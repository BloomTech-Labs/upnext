<template>
  <v-app>
    <v-conainer>
      <v-layout column align-center justify-center>
        <h1 class="mb-5 mt-5 display-4 text-xs-center hidden-sm-and-down" style="font-weight: 900; font-family: Roboto;">
          <h2 class="mb-5 mt-5 display-4 text-xs-center hidden-md-and-up" style="font-weight: 900; font-family: Roboto;">
          <span style="text-shadow: 1px 1px 3px black;">Up</span><span style="color: 	#cae325;  text-shadow: 1px 1px 3px black;">Next</span>
       </h2>
        </h1>
      </v-layout>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Sign in</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="email" name="email" label="Email" type="text" v-model="email"></v-text-field>
                <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn dark color="blue lighten-2" @click.prevent="signup">New user?</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click.prevent="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-conainer>
  </v-app>
</template>

<script>
  import LoginMixin from './Login.mixin'

  export default {
    mixins: [LoginMixin]
  }
</script>

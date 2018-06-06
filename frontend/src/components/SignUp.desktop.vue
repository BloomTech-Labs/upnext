<template>
  <v-app>    
    <v-container>
      <v-layout align-center justify-center class="form-container">
        <v-flex xs12 sm8 md4>
          <v-card class="mt-5 elevation-12 card-container">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Sign Up</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form class="input-form">
                <v-text-field  prepend-icon="person" name="name" label="Full Name" type="text" v-model="name"></v-text-field>
                <v-text-field  prepend-icon="email" name="email" label="Email" type="text" v-model="email"></v-text-field>
                <v-text-field  id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
                <v-text-field id="confirmPassword" name="confirmPasssword" label="Confirm Password" type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn dark color="blue lighten-2" @click.prevent="goToLogin">Existing user?</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click.prevent="signup">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  import SignUpMixin from './SignUp.mixin'

  export default {
    mixins: [SignUpMixin],
    methods: {
      goToLogin() {
        this.$router.push('Login')
      }
    }
  }
</script>

<style>
h1.title {
  font-weight: 900; 
  font-family: Roboto;
}
span.title-text-up {
  text-shadow: 1px 1px 3px black;
}
span.title-text-next {
  color: 	#cae325;  
  text-shadow: 1px 1px 3px black;
}
.form-container {
  width: 100%;
  margin-top: 10%;
}
</style>
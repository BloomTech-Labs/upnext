<template>
  <v-app light>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn
      class="logoutButton"
      slot="activator"
      text="Log Out"
      style="background-color: #962F2F; color: white; min-height: 30px"
      light>
      Logout
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Log Out?</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn app
          flat @click.native="dialog = false">
          Cancel
          </v-btn>
          <v-btn
          flat
          @click.native="logout"
          >
          Log Out
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  </v-app>
</template>


<script>
//const axios = require('axios');
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    dialog: false,
    isLoading: false
  }),
  methods: {
    ...mapMutations({
      setIsUserAuthenticated: 'SET_IS_USER_AUTHENTICATED',
      setIsAdmin: 'SET_IS_ADMIN'
    }),
    logout() {
      this.deleteCookie('user')
      this.deleteCookie('isAdmin')
      this.setIsUserAuthenticated(false)
      this.setIsAdmin(false)
      localStorage.clear()

      this.$router.push({ name: 'Landing' })
    },
    deleteCookie(cookie) {
      document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`
    }
  }
}
</script>

<style scoped>
.logoutButton {
  text-shadow: 1px 1px 2px black;
  margin: 9px;
}
</style>

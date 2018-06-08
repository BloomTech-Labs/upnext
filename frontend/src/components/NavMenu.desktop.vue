<template>
  <v-app class="nav-container">
    <v-btn flat  @click.stop="drawer = !drawer" class="menu-button" color="blue darken-4">
      <v-icon>menu</v-icon>
    </v-btn>
    <v-navigation-drawer absolute class="nav-drawer" temporary v-model="drawer" clipped flat>

      <v-toolbar>

        <v-list class="pa-0">
          <v-list-tile flat avatar>
            <v-list-tile-action>
              <v-btn icon @click.native="drawer = !drawer">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        
        <v-list-tile v-for="route in routes" :key="route.title">
        <v-btn flat touch  @click.native="route.action">  <v-list-tile-action>
             <v-icon>{{ route.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ route.title }}</v-list-tile-title>
          </v-list-tile-content></v-btn>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>

</template>

<script>
import router from '../router/router.desktop.js'
export default {
  data () {
     return {
      drawer: false,
      routes: [
        {
          title: 'View Events',
          icon: 'event',
          action: 'goToEvents'
        },
        {
          title: 'Schedule Event',
          icon: 'alarm_add',
          action: 'goToSchedule'
        },
        {
          title: 'Account Settings',
          icon: 'settings',
          action: 'goToSettings'
        },
        {
          title: 'Login',
          icon: 'account_box',
          action: 'goToLogin'
        },
        {
          title: 'Sign Up',
          icon: 'perm_identity',
          action: 'goToSignup'
        }
      ]
    }},
  methods: {
    goToEvents() {
      router.push('ViewEvents')
    },
    goToSignup() {
      router.push('SignUp')
    },
    goToLogin() {
      router.push('Login')
    },
    goToSettings() {
      router.push('Settings')
    },
    goToSchedule() {
      router.push('Schedule')
    }
  }
}
</script>
<style scoped>

</style>
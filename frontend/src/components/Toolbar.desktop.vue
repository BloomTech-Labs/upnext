<template>
  <v-content>
    <v-toolbar class="offWhite">

      <v-toolbar-items v-if="isAuthenticated">
        <nav-menu class="offWhite pt-3 "></nav-menu>
        <!-- <SignUpModal class="ml-4 offWhite"></SignUpModal> -->
      </v-toolbar-items>

      <v-content class="toolBarLogo"> Up
        <span style="color: #C8E123; textShadow: 1px 2px 2px black">Next</span>
      </v-content>

      <v-toolbar-items>
        <LoginModal v-if="!isAuthenticated" class="offWhite pt-2 ml-3 mx-1"></LoginModal>
        <view-events-button class="offWhite"></view-events-button>
        <LogoutModal v-if="isAuthenticated" class="offWhite mr-1 mx-1"></LogoutModal>
      </v-toolbar-items>
    </v-toolbar>
  </v-content>
</template>

<script>
import router from '../router/router.desktop.js'
import SignUpModal from './SignUpModal.desktop.vue'
import LoginModal from './LoginModal.desktop.vue'
import LogoutModal from './LogoutModal.desktop.vue'
import NavMenu from './NavMenu.desktop'
import ViewEventsButton from './ViewEventsButton.desktop'

export default {
  name: 'Toolbar',
  components: {
    SignUpModal,
    LoginModal,
    LogoutModal,
    NavMenu,
    ViewEventsButton
  },
  data: function() {
    return {
      title: 'UpNext',
      email: '',
      emailRules: [
        v => {
          return !!v || 'Please enter an email'
        },
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'Invalid email'
      ],
      subscribed: false,
      dialog: false,
      authorized: false,
      checkPage: false
    }
  },

  methods: {
    subscribe: function() {
      this.subscribed = !this.subscribed
    },
    openDialog: function() {
      this.open = true
    },

    logout() {
      this.deleteCookie('user')
      this.isUserAuthenticated = false
      localStorage.clear()

      this.$router.push({ name: 'Landing' })
    },
    deleteCookie(cookie) {
      document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`
    }
  },

  computed: {
    imgHeight: function() {
      var offset = 320
      console.log('new image height is ' + (this.pageHeight - offset))
      return this.pageHeight - offset
    },
    isAuthenticated: {
      get() {
        return this.$store.state.isUserAuthenticated
      }
    }
  }
}
</script>

<style scoped>
.offWhite {
  background-color: #e5dcd6;
  position: relative;
}

.toolBarLogo {
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-shadow: 1px 2px 2px black;
  font-family: Roboto;
}

.yellowNext {
  color: #c8e213;
  text-shadow: 1px 2px 2px black;
}
</style>

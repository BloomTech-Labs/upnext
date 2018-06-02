<template>
    <v-toolbar
      style="z-index: 1; backgroundColor: 	#e5dcd6"
      fixed
    >

      <v-toolbar-items>
        <SignUpModal style="backgroundColor: #e5dcd6" class="ml-4"></SignUpModal>
      </v-toolbar-items>

     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>


     <v-content style="textAlign: center; fontSize: 50px; fontWeight: bold; color: white; textShadow: 1px 2px 2px black"> Up<span style="color: #C8E123; textShadow: 1px 2px 2px black">Next</span></v-content>



     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>


    <v-toolbar-items>
      <LoginModal style="backgroundColor: #e5dcd6" class="ml-3 mx-1"></LoginModal>

      <ViewButton></ViewButton>
    </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import SignUpModal from './SignUpModal.desktop.vue'
import LoginModal from './LoginModal.desktop.vue'
import ViewButton from './ViewEventsButton.desktop.vue'

export default {
  name: 'Toolbar',
  components: {
    SignUpModal,
    LoginModal,
    ViewButton
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
      authorized: false
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
    }
  },
}
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

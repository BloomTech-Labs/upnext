<template>

    <!-- Toolbar section -->


  <v-content>
    <SubscribedEvents  v-if="!this.isAdmin" :events="events" :title="titles[0]" style="marginTop: 5%"></SubscribedEvents>
    <SubscribedEvents v-if="this.isAdmin" :events="events" :title="titles[2]" style="marginTop: 5%"></SubscribedEvents>

    <SubscribedEvents :events="events" :title="titles[1]" style="marginTop: 5%"></SubscribedEvents>
  </v-content>

</template>

<script>
import SubscribedEvents from './SubscribedEventListing.desktop.vue'
import EventsMixin from './AdminEventsList.mixin'

export default {
  data() {
    return {
      titles: ['Subscribed Events', 'Public Events', 'Created Events']
    }
  },
  computed: {
        isAdmin: {
      get () {
        return this.$store.state.isAdmin
      }
    }
  },
  name: 'PublicEventsList',
  components: {
    SubscribedEvents
  },
  mixins: [EventsMixin]
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
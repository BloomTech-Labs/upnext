<template>

    <!-- Toolbar section -->


  <v-content>
    <SubscribedEvents :title="titles[0]" style="marginTop: 5%"></SubscribedEvents>

    <SubscribedEvents :title="titles[1]" style="marginTop: 5%"></SubscribedEvents>
  </v-content>

</template>

<script>
import SubscribedEvents from './SubscribedEventListing.desktop.vue'

export default {
  data() {
    return {
      titles: ['Subscribed Events', 'Public Events']
    }
  },
  name: 'PublicEventsList',
  components: {
    SubscribedEvents
  }
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

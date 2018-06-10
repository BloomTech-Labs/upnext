<template>
  <v-app light style="backgroundColor: #EAEAEA">
    <!-- Toolbar section -->



      <!-- This is the beginning of card listing -->
  <section>
    <v-content>
    <h1 class="thankYou"> Thank you for your purchase! </h1>
    <h1 class="thankYou"> We hope you have a great time at your event! </h1>
    
    </v-content>
    </section>
  <!-- End of Card listing section -->
</v-app>
</template>

<script>
import Toolbar from "./Toolbar.desktop.vue";

export default {
  name: "PublicEventsList",
  components: {
    Toolbar
  },
  data: () => ({

  })
};
</script>

<style scoped>
.thankYou {
  margin-top: 20rem;
  text-align: center;
  font-size: 40px;
}
</style>

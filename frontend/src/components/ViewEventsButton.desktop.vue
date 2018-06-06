<template>
  <v-app light>
    <v-layout max-width="500px" row justify-center>
      <v-dialog  max-width="500px">
        <v-btn
        slot="activator"
        text="View Events"
        class="viewEventsButton"
        style="background-color: #0182e7; color: white;"
        light>View Events
        </v-btn>
      </v-dialog>
    </v-layout>
  </v-app>
</template>

<script>
//const axios = require('axios');

export default {
  data: () => ({
  })
};
</script>

<style scoped>
.viewEventsButton {
  overflow:hidden; 
  background-color: #0182E7; 
  color: white; 
  text-shadow: 1px 1px 2px black; 
  margin: 10px
}

</style>
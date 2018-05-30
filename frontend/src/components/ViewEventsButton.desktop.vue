<template>
  <v-app light>
    <v-layout max-width="500px" row justify-center>
      <v-dialog  max-width="500px">
        <v-btn
        slot="activator"
        text="View Events"
        style="overflow:hidden; background-color: #0182E7; color: white; text-shadow: 1px 1px 2px black; padding: 10px; margin: 10px"
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
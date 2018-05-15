<template>
  <v-app dark>
    <v-layout row justify-center>
      <v-card>
        3
      </v-card>
      <v-card>
        4 score and 25 years in the past
      </v-card>
    </v-layout>
  </v-app>
</template>

<script>
//const axios = require('axios');

import LoginMixin from './Login.mixin';

export default {
  mixins: [LoginMixin]
};
</script>

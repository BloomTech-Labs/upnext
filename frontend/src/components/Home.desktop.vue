<template>
  <div>
    <v-app>
      <v-toolbar
        app
        :clipped-left="clipped"
        xs
      >
        <v-toolbar-title >Up Next</v-toolbar-title>
        <v-btn color="blue" flat depressed dark @click.stop="miniVariant = !miniVariant">
          Home
        </v-btn>



        <v-spacer></v-spacer>

        <v-btn color="blue" flat depressed dark @click.stop="miniVariant = !miniVariant">
          EVENTS
        </v-btn>
        <v-btn color="blue" flat depressed dark @click.stop="miniVariant = !miniVariant">
          SETTINGS
        </v-btn>
        <v-btn color="blue" flat depressed dark @click.stop="miniVariant = !miniVariant">
          LOGOUT
        </v-btn>

      </v-toolbar>

      <v-content>
        <router-view></router-view>
      </v-content>

    </v-app>
  </div>
</template>

<script>
import HomeMixin from './Home.mixin'

export default {
  mixins: [HomeMixin]
}
</script>

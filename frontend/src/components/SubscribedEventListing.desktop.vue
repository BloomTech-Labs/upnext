<template>

    <!-- Toolbar section -->


    <v-content>
        <h1 style="marginTop; textAlign: center; fontSize: 60px; backgroundColor: white;  ">{{title}}</h1>



        <!-- This is the beginning of card listing -->

        <v-container>
            <v-layout row wrap>
              <v-flex xs8 lg10 style="marginTop: 1%; marginLeft: 10%">
                <v-expansion-panel  popout expand>
                  <v-expansion-panel-content style="backgroundColor: 		#4378a2; color: white; padding: 1rem" v-for="(item,i) in 3" :key="i">
                    <div slot="header" style="fontSize: 18px; fontWeight: bold; textShadow: 1px 1px 2px black">Title, Location, (miles away) {{i}}</div>
                    <v-card style=" padding: 1rem">
                      <v-card-text style="lineHeight: 2.5rem; fontSize: 18px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>

                    </v-card>
                    <!-- TODO : ADD @CLICK TO THE BTN COMPONENT BELOW -->
                    <v-btn style="backgroundColor: #E7741A; color: white; textShadow: 1px 2px 2px black;"> View Details </v-btn>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-flex>
            </v-layout>
          </v-container>
      </v-content>

  <!-- End of Card listing section -->

</template>

<script>
export default {
  name: 'SubscribedEvents',
  components: {},
  props: ['title'],
  data: () => ({})
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

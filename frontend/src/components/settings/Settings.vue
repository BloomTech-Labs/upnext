  <template>
  <v-app>
    <v-container fill-height>
      <v-layout column align-left>

        <v-flex class="text-xs-center d-flex">
          <v-layout >
          <v-flex xs4 class="pt-0">
          <v-navigation-drawer permanent light class="pl-0 sidebar" >
            
            <v-list dense class="pt-0">
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>settings</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Settings</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>

            <v-divider></v-divider>

            <v-list dense class="pt-0">
              <v-list-tile @click.prevent="displayAccountSettings">
                <v-list-tile-action>
                  <v-icon>security</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Account</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>

            <v-list dense class="pt-0">
              <v-list-tile @click.prevent="displayBillingSettings">
                <v-list-tile-action>
                  <v-icon>credit_card</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Billing</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>

            <v-list dense class="pt-0">
              <v-list-tile @click="goToEvents">
                <v-list-tile-action>
                  <v-icon>arrow_back</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Back to events</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>
          
          </v-flex>
          </v-layout>
          <v-layout>
          <v-flex xs12>
          <main>
            <template v-if="!showAccountSettings">
            <v-slide-y-transition mode="out-in">
              <account-settings></account-settings>
            </v-slide-y-transition>
            </template>
          </main>
          </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>

</template>

<script>
import SettingsMixin from './Settings.mixin'
import AccountSettings from './accountSettings.vue'

export default {
  mixins: ['SettingsMixin'],
  components: { AccountSettings }
}
</script>

<style scoped>
.title-next {
  color: #c8e123;
  text-shadow: 1px 2px 2px black;
}

.title-container {
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-shadow: 1px 2px 2px black;
}
.sidebar {
  position: absolute;
  max-height: 45%;
}
</style>
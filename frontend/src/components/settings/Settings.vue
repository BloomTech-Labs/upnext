  <template>
  <v-app>
    <v-container fill-height mt-2>
      <v-layout column align-left>

        <v-flex class="text-xs-center d-flex">
          <!-- SIDEBAR COMPONENT -->
          <v-layout>
            <v-flex class="pt-0 " >
              <v-navigation-drawer permanent light class="pl-0 sidebar mt-2 mr-4">

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
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-btn flat @click.prevent="goToEvents">
                        <v-icon>arrow_back</v-icon>
                        <v-list-tile-content>Back to Events</v-list-tile-content>
                      </v-btn>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list>
                <v-card class="account-details" v-if="showAccountSettings">
                <v-card-title>
                  Contact Info:
                </v-card-title>
                <v-card-text>
                  <span class="setting-heading">Email:</span>
                  <span>{{email || 'a@mail.com'}}</span>
                </v-card-text>
                <v-card-text>
                  <span class="setting-heading">Phone:</span>
                  <span>{{phoneNumber || '902-867-5309'}}</span>
                </v-card-text>

                <v-card-title>
                  Notifications:
                </v-card-title>
                <v-card-text>
                  <span class="setting-heading">Text alerts:</span> {{receiveTexts}}
                </v-card-text>

                <v-card-text>
                  <span class="setting-heading">Email alerts:</span> {{receiveEmails}}
                </v-card-text>
              </v-card>
              </v-navigation-drawer>

              
            </v-flex>
          </v-layout>
          <!--END ACCOUNT INFO DISPLAY -->
          <v-layout class="account-settings-container">
            <v-flex xs12>
              <main>
                <template v-if="showAccountSettings">
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
import SettingsMixin from './Settings.mixin.js'
import AccountSettings from './accountSettings.vue'

export default {
  mixins: [SettingsMixin],
  components: { AccountSettings }
}
</script>

<style scoped>
.title-next {
  color: #c8e123;
  text-shadow: 1px 2px 2px black;
}

.sidebar {
  position: absolute;
  right: 50%;
  max-width: 20%;
}
.setting-heading {
  font-weight: 900;
  margin-right: 0;
  margin-left: 0;
  padding-left: 0;
  font-size: 1rem;
}
.account-details {
  margin-top: 15%;
}
.account-settings-container {
  margin-right: 0;
  padding-right: 0;
  min-width: 15%;
  position: relative;
}
</style>
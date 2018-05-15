<template>

  <v-layout justify-center>
    <v-flex xs8>
      <v-toolbar color="yellow darken-1">
        <v-toolbar-title>Schedule</v-toolbar-title>
      </v-toolbar>

      <v-list>

        <v-list-tile>
          <v-list-tile-content>
            <v-layout justify-space-between>
              <v-flex class="ml-3 mt-3" xs4>1)</v-flex>
              <v-flex class="ml-3 mt-3" xs4>Group1</v-flex>
              <v-flex class="ml-3 mt-3" xs4>8:00</v-flex>
            </v-layout>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-layout v-show="adminCreate" justify-space-between>
              <v-flex v-show="adminShow" class="mx-3" xs4><v-btn icon><v-icon>flag</v-icon></v-btn></v-flex>
              <v-flex xs4 class="mx-3"><v-btn icon><v-icon>edit</v-icon></v-btn></v-flex>
              <v-flex xs4 class="mx-3"><v-btn icon><v-icon>delete</v-icon></v-btn></v-flex>
            </v-layout>
            <v-checkbox v-show="nonAdmin" class="mr-5 mt-3" label="Sub" v-model="value" value="value"></v-checkbox>
          </v-list-tile-action>
        </v-list-tile>

        <v-divider inset></v-divider>

        <v-list-tile>
          <v-list-tile-content>
            <v-layout justify-space-between>
              <v-flex class="ml-3 mt-3" xs4>2)</v-flex>
              <v-flex class="ml-3 mt-3" xs4>Group2</v-flex>
              <v-flex class="ml-3 mt-3" xs4>9:00</v-flex>
            </v-layout>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-layout v-show="adminCreate" justify-space-between>
              <v-flex v-show="adminShow" class="mx-1" xs4><v-btn icon><v-icon>flag</v-icon></v-btn></v-flex>
              <v-flex xs4 class="mx-1"><v-btn icon><v-icon>edit</v-icon></v-btn></v-flex>
              <v-flex xs4 class="mx-1"><v-btn icon><v-icon>delete</v-icon></v-btn></v-flex>
            </v-layout>
            <v-checkbox v-show="nonAdmin" class="mr-5 mt-3" label="Sub" v-model="value" value="value"></v-checkbox>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider inset></v-divider>

      </v-list>

    </v-flex>
  </v-layout>

</template>

<script>
export default {
  props: ['adminCreate', 'adminShow', 'nonAdmin']
};
</script>


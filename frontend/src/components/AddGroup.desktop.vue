<template>
  <v-layout justify-center>
      <v-flex xs8>
        <v-card>
            <v-toolbar color="yellow darken-1">
              <v-toolbar-title>Add a group</v-toolbar-title>
            </v-toolbar>

            <v-layout justify-space-around>
              <v-flex xs4>
                <v-text-field
                  id="title"
                  name="input-1"
                  label="Group Name"
                ></v-text-field>
              </v-flex>
              <v-flex xs4>
                <v-text-field
                  id="title"
                  name="input-1"
                  label="Time"
                ></v-text-field>
              </v-flex>

              <v-btn class="mt-3" color="yellow">add</v-btn>
            </v-layout>

        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
export default {};
</script>

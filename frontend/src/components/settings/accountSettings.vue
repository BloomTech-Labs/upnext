<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-card class="pl-3">
      <v-layout pt-3 pb-3>
        <v-card-title>Notification Settings</v-card-title>
      </v-layout>
      <v-layout>
        <v-flex xs4>
          <v-checkbox v-model="receiveEmails"  label="Email"></v-checkbox>
        </v-flex>
        <v-flex xs4>
          <v-checkbox v-model="receiveTexts" label="Text"></v-checkbox>
        </v-flex>
      </v-layout>
    </v-card>
    <v-card class="pr-5 pl-5 mt-3 elevation-3">
      <v-card-title>Change your password</v-card-title>
      <v-text-field label="Old Password" v-model="oldPassword" type="password"></v-text-field>
      <v-text-field label="New Password" v-model="newPassword" type="password"></v-text-field>
      <v-text-field label="Confirm Password" type="password" :rules="confirmPasswordRules" v-model="confirmPassword"></v-text-field>
      <v-btn @click="submitNewSettings" :disabled="!valid">
        submit
      </v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-card>
  </v-form>
</template>

<script>
import SettingsMixin from './Settings.mixin'
export default { mixins: [SettingsMixin], name: 'AccountSettings' }
</script>


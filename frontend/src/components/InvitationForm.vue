<template>
  <div class="card">
    <h3>Textarea</h3>
    <textarea v-model="inputTextarea" @keypress.enter="addEmailInvite" @keypress.tab="addEmailInvite" placeholder="add contacts to invite"></textarea><br>
    <span>Added:</span>
    <template >
      <chip :key="index" v-for="(contact, index) in invitationList" close>{{contact}}</chip>
    </template>
    <v-chip></v-chip>
  </div>

</template>

<script>
 export default {
 data () {
    return {
      invitationList: ['jon@jon.com'],
      inputTextarea: ""
      }
    },
  computed: {

  }
}
</script>



<style>
.card {
  margin: 0.5rem;
  padding: 1rem;
  border: 1px solid #000;
}
</style>
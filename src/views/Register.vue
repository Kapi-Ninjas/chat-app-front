<template>
  <div>
    <h1>Enter your name!</h1>
    <form @submit.prevent="send">
      <input type="text" name="name" v-model="username" />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Register extends Vue {
  username = '';

  send() {
    this.$socket.emit('join', this.username);
    this.$router.push({
      name: 'Chat',
    });
  }
}
</script>

<style scoped lang="scss">
input {
  width: 500px;
  height: 30px;
  border: 3px solid #dfe6e9;
  border-radius: 4px;
  background-color: #2D3436;
}
</style>

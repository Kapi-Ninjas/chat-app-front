<template>
  <div>
    <div v-for="(msg, i) in messages" :key="i">
      <div v-bind:class="{ warning: msg.username === 'Admin' }">
        {{ msg.username }}: {{ msg.message }}
      </div>
    </div>
    <form @submit.prevent="send">
      <input type="text" name="message" v-model="message" />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Chat extends Vue {
  message = '';

  messages: { username: string; message: string }[] = [];

  mounted() {
    this.$socket
      .on('receive', (username: string, message: string) => {
        this.messages.push({ username, message });
      })
      .on('register', (username: string) => {
        this.messages.push({ username: 'Admin', message: `${username} has just entered the chat!` });
      });
  }

  send() {
    this.$socket.emit('message', this.message);
    this.message = '';
  }
}
</script>

<style lang="scss" scoped>
.warning {
  color: red;
}
</style>

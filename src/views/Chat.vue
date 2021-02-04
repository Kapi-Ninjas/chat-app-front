<template>
  <div>
    <div v-for="(msg, i) in messages" :key="i">
      <div>{{ msg }}</div>
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

  messages: string[] = [];

  mounted() {
    this.$socket.on('receive', (message: string) => {
      this.messages.push(message);
    });
  }

  send() {
    this.$socket.emit('message', this.message);
    this.message = '';
  }
}
</script>

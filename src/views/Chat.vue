<template>
  <div class="chat">
    <div class="messages-holder">
      <div class="message-list">
        <div v-for="(msg, i) in messages" :key="i">
          <div
            class="message"
            v-bind:class="{ warning: msg.username === 'Admin' }"
          >
            {{ msg.username }}: {{ msg.message }}
          </div>
        </div>
      </div>
    </div>

    <form class="input-holder" @submit.prevent="send">
      <input type="text" name="message" v-model="message" />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface Message {

  readonly username: string;

  readonly message: string;

}

@Component
export default class Chat extends Vue {
  message = '';

  messages: Message[] = [];

  mounted() {
    this.$service.getMessages()
      .then((messages: Message[]) => {
        this.messages = messages;
      });

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
div.chat {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

form.input-holder {
  width: 100%;
  display: flex;

  > input {
    width: inherit;
    margin: 0 4px 0 4px;
  }

  > button {
    margin: 0 4px 0 4px;
  }
}

div.messages-holder {
  width: 100%;
  height: 100%;

  div.message-list {
    height: 100%;
    padding: 8px;
    border: #fafafa 1px solid;

    div.message {
      color: lime;
    }

    div.message.warning {
      color: red;
    }
  }
}
</style>

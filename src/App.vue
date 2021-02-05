<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/chat">Chat</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2D3436;
}
</style>

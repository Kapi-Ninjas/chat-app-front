import Vue from 'vue';
import { io } from 'socket.io-client';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const socket = io('http://adbf353a2213.ngrok.io', { transports: ['websocket'] });
Vue.prototype.$socket = socket;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

import Vue from 'vue';
import { io } from 'socket.io-client';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const socket = io('http://localhost:3333', { transports: ['websocket'] });
Vue.prototype.$socket = socket;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

import Vue from 'vue';
import { io } from 'socket.io-client';

import App from './App.vue';
import router from './router';
import Service from './modules/api-service';

Vue.config.productionTip = false;

const socket = io('http://localhost:3333', { transports: ['websocket'] });
Vue.prototype.$socket = socket;
Vue.prototype.$service = Service;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

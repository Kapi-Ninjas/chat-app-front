import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Register from '../views/Register.vue';
import Chat from '../views/Chat.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Register',
    component: Register,
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

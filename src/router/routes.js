import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Wallpapers from '../views/Wallpapers.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/wallpapers',
    name: 'wallpapers',
    component: Wallpapers,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

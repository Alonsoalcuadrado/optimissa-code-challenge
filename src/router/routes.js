import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Wallpapers from '../views/Wallpapers.vue';
import WallpapersDetails from '../views/WallpapersDetails.vue';

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
  {
    path: '/wallpapers/:id',
    name: 'wallpapers-details',
    component: WallpapersDetails,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

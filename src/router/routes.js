import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Wallpapers from '../views/Wallpapers.vue';
import WallpapersDetails from '../views/WallpapersDetails.vue';
import RickAndMorty from '../views/RickAndMorty.vue';

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
  {
    path: '/rickandmorty',
    name: 'rickandmorty',
    component: RickAndMorty,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

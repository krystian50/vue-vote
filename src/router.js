import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/score',
      name: 'score',
      component: () => import(/* webpackChunkName: "score" */ './views/Score.vue'),
    },
    {
      path: '/vote',
      name: 'vote',
      component: () => import(/* webpackChunkName: "vote" */ './views/Vote.vue'),
    },
  ],
});

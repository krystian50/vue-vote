import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import roleGuard from './role.guard';

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
      component: () => import(/* webpackChunkName: "admin" */ '../views/Score.vue'),
    },
    {
      path: '/vote',
      name: 'vote',
      component: () => import(/* webpackChunkName: "user" */ '../views/Vote.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      beforeEnter: roleGuard('admin'),
      component: () => import(/* webpackChunkName: "admin" */ '../views/Settings.vue'),
    },
  ],
});

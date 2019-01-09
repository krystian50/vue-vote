import Vue from 'vue';

import '@/components/_components';
import App from './App.vue';
import router from './router';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
// add dev-tools on prod for devmeeting purpose
// don't it in real production app
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

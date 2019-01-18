import Vue from 'vue';
import BaseButton from './BaseButton.vue';
import BaseLoader from './BaseLoader.vue';

// Always register globally ONLY base components
Vue.component('BaseButton', BaseButton);
Vue.component('BaseLoader', BaseLoader);

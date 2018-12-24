import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseMutations } from 'vuexfire';
import votes from './modules/votes/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    votes,
  },
  mutations: {
    // your mutations
    ...firebaseMutations,
  },
});

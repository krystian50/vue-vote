import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import { firebaseMutations } from 'vuexfire';
import votes from './modules/votes';
import user from './modules/user';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({ user: state.user }), // only save user module
});

export default new Vuex.Store({
  modules: {
    votes,
    user,
  },
  mutations: {
    // your mutations
    ...firebaseMutations,
  },
  plugins: [vuexLocal.plugin],
});

import { votesRef } from '@/repositories/firebase.repository';
import { ADD_VOTE, RESET_VOTES, SET_LOADING_VOTES } from './mutations.types';

/* eslint no-param-reassign: ["error", { "props": false }] */
export default {
  [ADD_VOTE]: (state, vote) => {
    votesRef.add({ ...vote });
  },
  [RESET_VOTES]: (state) => {
    state.votes.forEach((vote) => { votesRef.doc(vote.id).delete(); });
  },
  [SET_LOADING_VOTES]: (state, loading) => {
    console.log(loading);
    state.loadingVotes = loading;
  },
};

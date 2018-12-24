import { firebaseAction } from 'vuexfire';
import { votesRef } from '@/repositories/firebase.repository';
import { INIT_VOTES_REF, SET_VOTES_REF, ADD_USER_VOTE } from './actions.types';
import { ADD_VOTE } from './mutations.types';

export default {
  [SET_VOTES_REF]: firebaseAction(({ bindFirebaseRef }, ref) => {
    bindFirebaseRef('votes', ref);
  }),

  [INIT_VOTES_REF]: ({ dispatch }) => {
    dispatch(SET_VOTES_REF, votesRef);
  },

  [ADD_USER_VOTE]: ({ commit }) => {
    // some extra logic will be here to prevent multiple votes from the same user
    // it will be connected with user module
    commit(ADD_VOTE);
  },
};

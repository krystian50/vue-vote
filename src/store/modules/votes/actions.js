import { firebaseAction } from 'vuexfire';
import { votesRef } from '@/repositories/firebase.repository';
import { INIT_VOTES_REF, SET_VOTES_REF, ADD_USER_VOTE } from '@/store/actions.types';
import { ADD_VOTE, SET_LOADING_VOTES } from '@/store/mutations.types';

export default {
  [SET_VOTES_REF]: firebaseAction(({ bindFirebaseRef, commit }, ref) => {
    commit(SET_LOADING_VOTES, true);
    bindFirebaseRef('votes', ref)
      .then(() => { commit(SET_LOADING_VOTES, false); });
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

import { firebaseAction } from 'vuexfire';
import RepositoryFactory from '@/repositories/repository.factory';
import {
  INIT_VOTES_REF,
  SET_VOTES_REF,
  ADD_USER_VOTE,
  RESET_VOTES,
} from '@/store/actions.types';
import { SET_LOADING_VOTES } from '@/store/mutations.types';

const firebaseRepository = RepositoryFactory.get('firebase');

export default {
  [SET_VOTES_REF]: firebaseAction(({ bindFirebaseRef, commit }, ref) => {
    commit(SET_LOADING_VOTES, true);
    bindFirebaseRef('votes', ref)
      .then(() => { commit(SET_LOADING_VOTES, false); });
  }),

  [INIT_VOTES_REF]: ({ dispatch }) => {
    dispatch(SET_VOTES_REF, firebaseRepository.votesRef);
  },

  [RESET_VOTES]: () => {
    firebaseRepository.resetVotes();
  },

  [ADD_USER_VOTE]: (state, vote) => {
    // some extra logic will be here to prevent multiple votes from the same user
    // it will be connected with user module
    firebaseRepository.addVote(vote);
  },
};

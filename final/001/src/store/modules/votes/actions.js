import { firebaseAction } from 'vuexfire';
import RepositoryFactory from '@/repositories/repository.factory';
import {
  INIT_VOTES_REF,
  SET_VOTES_REF,
  ADD_VOTES,
  RESET_VOTES,
} from '@/store/actions.types';
import { SET_LOADING_VOTES } from '@/store/mutations.types';

const votesRepository = RepositoryFactory.get('votes');

export default {
  [SET_VOTES_REF]: firebaseAction(
    async ({ bindFirebaseRef, commit }, ref) => {
      commit(SET_LOADING_VOTES, true);
      await bindFirebaseRef('votes', ref);
      commit(SET_LOADING_VOTES, false);
    },
  ),

  [INIT_VOTES_REF]: ({ dispatch }) => {
    dispatch(SET_VOTES_REF, votesRepository.votesRef);
  },

  [RESET_VOTES]: () => {
    votesRepository.resetVotes();
  },

  [ADD_VOTES]: (state, vote) => {
    votesRepository.addVote(vote);
  },
};

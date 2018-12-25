import { votesRef } from '@/repositories/firebase.repository';
import { ADD_VOTE, RESET_VOTES } from './mutations.types';

export default {
  [ADD_VOTE]: (state, vote) => {
    votesRef.push(vote);
  },
  [RESET_VOTES]: () => {
    votesRef.remove();
  },
};

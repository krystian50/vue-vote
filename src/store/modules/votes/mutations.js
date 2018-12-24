import { votesRef } from '@/repositories/firebase.repository';
import { ADD_VOTE } from './mutations.types';

export default {
  [ADD_VOTE]: (store, vote) => {
    votesRef.push(vote);
  },
};

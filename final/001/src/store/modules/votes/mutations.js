import { SET_LOADING_VOTES } from '@/store/mutations.types';


/* eslint no-param-reassign: ["error", { "props": false }] */
export default {
  [SET_LOADING_VOTES]: (state, loading) => {
    state.loadingVotes = loading;
  },
};

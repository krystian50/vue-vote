import { countBy } from 'lodash/fp';
import { voteOptions } from '@/consts/vote-options.consts';
import { USER_MODULE } from '@/store/modules.types';
import {
  VOTES_GROUPED,
  VOTES_LOADING,
  HAS_USER_VOTED,
  USER_ID,
} from '@/store/getters.types';

/**
 * @description transforms array of string into object with 0 values
 * @param {Array<String>} arr  array of keys
 * @returns {{key: 0}} object with keys based on arr and 0 as values
 */
const initializeEmpty = arr => Object.assign({}, ...Array.from(arr, k => ({ [k]: 0 })));

/**
 * @description transforms firebase array into object grouped by vote property
 */
const groupVotes = countBy('vote');

/**
 * @description contains object with key value, in eg. { no: 0, yes: 0}
 */
const emptyOptionsObject = initializeEmpty(voteOptions);

export default {
  [VOTES_GROUPED]: state => ({ ...emptyOptionsObject, ...groupVotes(state.votes) }),
  [VOTES_LOADING]: state => state.loadingVotes,
  [HAS_USER_VOTED]: (state, getters, rootState, rootGetters) => {
    const currentUserId = rootGetters[USER_MODULE + USER_ID];
    return state.votes.findIndex(({ userId }) => userId === currentUserId) !== -1;
  },
};

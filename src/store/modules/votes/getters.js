import { countBy } from 'lodash/fp';
import { voteOptions } from '@/consts/vote-options.consts';

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
const currentUserId = 'randomUser';

export default {
  groupedVotes: state => ({ ...emptyOptionsObject, ...groupVotes(state.votes) }),
  votesLoading: state => state.loadingVotes,
  hasUserVote: state => state.votes.findIndex(({ userId }) => userId === currentUserId) !== -1,
};

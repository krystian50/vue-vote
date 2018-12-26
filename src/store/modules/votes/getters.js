import {
  countBy,
  values,
  omit,
  compose,
} from 'lodash/fp';
import { isUndefined } from 'util';
import { voteOptions } from '@/consts/vote-options.consts';

/**
 * @description transforms array of string into object with 0 values
 * @param {Array<string>} arr  array of keys
 * @returns {{key: 0}} object with keys based on arr and 0 as values
 */
const initializeEmpty = arr => Object.assign({}, ...Array.from(arr, k => ({ [k]: 0 })));

/**
 * @description transforms firebase object into object grouped by vote property
 */
const groupVotes = compose(
  countBy('vote'),
  values,
  omit('.key'),
);

/**
 * @description contains object with key value, in eg. { no: 0, yes: 0}
 */
const emptyOptionsObject = initializeEmpty(voteOptions);

export default {
  groupedVotes: state => ({ ...emptyOptionsObject, ...groupVotes(state.votes) }),
  loading: state => isUndefined(state.votes),
};

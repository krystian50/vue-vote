import {
  countBy,
  values,
  omit,
  compose,
  isNull,
} from 'lodash/fp';
import { isUndefined } from 'util';

const groupVotes = compose(
  countBy('vote'),
  values,
  omit('.key'),
);

// empty data from ref object has .value property with null value
const isEmpty = refValue => !refValue || isNull(refValue['.value']);

export default {
  groupedVotes: state => (isEmpty(state.votes) ? null : groupVotes(state.votes)),
  loading: state => isUndefined(state.votes),
};

import {
  countBy,
  values,
  omit,
  compose,
} from 'lodash/fp';

const groupVotes = compose(
  countBy('vote'),
  values,
  omit('.key'),
);

export default {
  groupedVotes: state => groupVotes(state.votes),
};

<template>
  <div class="vote">
    <VoteOptions
      @voted="onVoted"
    />
  </div>
</template>
<script>
import { VOTES_MODULE } from '@/store/modules.types';
import { createNamespacedHelpers } from 'vuex';
import { ADD_VOTE } from '@/store/modules/votes/mutations.types';
import Vote from '@/models/vote.model';
import VoteOptions from './vote/VoteOptions.vue';

const { mapMutations } = createNamespacedHelpers(VOTES_MODULE);

export default {
  name: 'Vote',
  components: {
    VoteOptions,
  },
  methods: {
    ...mapMutations({
      addVote: ADD_VOTE,
    }),
    onVoted(type) {
      this.addVote(new Vote('randomUser', type));
    },
  },
};
</script>

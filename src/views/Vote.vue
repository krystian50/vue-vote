<template>
  <div class="vote">
    <h1>This is a vote page</h1>
    <button @click="onClick()">
      Add vote
    </button>
  </div>
</template>
<script>
import { VOTES_MODULE } from '@/store/modules.types';
import { createNamespacedHelpers } from 'vuex';
import { ADD_VOTE } from '@/store/modules/votes/mutations.types';
import Vote from '@/models/vote.model';

const { mapMutations } = createNamespacedHelpers(VOTES_MODULE);

export default {
  name: 'Vote',
  methods: {
    ...mapMutations({
      addVote: ADD_VOTE,
    }),
    onClick() {
      this.addVote(new Vote('yes'));
    },
  },
};
</script>

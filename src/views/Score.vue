<template>
  <div class="score">
    Score
    <VoteOptions v-if="!loading">
      <template slot-scope="optionProps">
        <span class="score__group-item-value">
          {{ groupedVotes && groupedVotes[optionProps.option] ?
            groupedVotes[optionProps.option] : 0 }}
        </span>
        <span class="score__group-item-key">
          {{ optionProps.label }}
        </span>
      </template>
    </VoteOptions>
    <BaseButton
      type="text"
      label="Reset"
      @click="reset()"
    />
  </div>
</template>

<script>
import { VOTES_MODULE } from '@/store/modules.types';
import { createNamespacedHelpers } from 'vuex';
import { RESET_VOTES } from '@/store/modules/votes/mutations.types';
import VoteOptions from '@/components/VoteOptions.vue';

const { mapGetters, mapMutations } = createNamespacedHelpers(VOTES_MODULE);

export default {
  name: 'Score',
  components: {
    VoteOptions,
  },
  computed: {
    ...mapGetters(['groupedVotes', 'loading']),
  },
  methods: {
    ...mapMutations({
      reset: RESET_VOTES,
    }),
  },
};
</script>

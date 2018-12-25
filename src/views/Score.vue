<template>
  <div class="score">
    Score
    <ul>
      <li
        v-for="(value, key) of groupedVotes"
        :key="key"
      >
        {{ key }} - {{ value }}
      </li>
    </ul>
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

const { mapGetters, mapMutations } = createNamespacedHelpers(VOTES_MODULE);

export default {
  name: 'Score',
  computed: {
    ...mapGetters(['groupedVotes']),
  },
  methods: {
    ...mapMutations({
      reset: RESET_VOTES,
    }),
  },
};
</script>

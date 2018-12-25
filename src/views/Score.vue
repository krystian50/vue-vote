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
  </div>
</template>

<script>
import { VOTES_MODULE } from '@/store/modules.types';
import { createNamespacedHelpers } from 'vuex';

const { mapGetters } = createNamespacedHelpers(VOTES_MODULE);

export default {
  name: 'Score',
  computed: {
    ...mapGetters(['groupedVotes']),
  },
};
</script>

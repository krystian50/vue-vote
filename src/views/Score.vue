<template>
  <div
    v-if="!loading"
    class="score"
  >
    <VoteOptions>
      <template slot-scope="optionProps">
        <div
          class="score__item"
          :style="{ color: optionProps.color }"
        >
          <span class="score__item-value">
            {{ groupedVotes && groupedVotes[optionProps.option] ?
              groupedVotes[optionProps.option] : 0 }}
          </span>
          <span class="score__item-label">
            {{ optionProps.label }}
          </span>
        </div>
      </template>
    </VoteOptions>
    <BaseButton
      variant="text"
      label="Reset"
      @click="reset()"
    />
  </div>
  <span v-else>
    Loading
  </span>
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

<style lang="scss">
.score {
  &__item-value,
  &__item-label {
    display: block;
  }

  &__item-value {
    font-size: 60px;
  }

  &__item-label {
    font-size: 33px;
  }
}
</style>

<template>
  <div class="score">
    <div
      v-if="!votesLoading"
      class="score__container"
    >
      <VoteOptions>
        <template slot-scope="optionProps">
          <div
            class="score__item"
            :style="{ color: optionProps.color }"
          >
            <span class="score__item-value">
              {{ groupedVotes && groupedVotes[optionProps.option] }}
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
    <div
      v-else
      class="score__loader-container"
    >
      <BaseLoader />
    </div>
  </div>
</template>

<script>
import { VOTES_MODULE } from '@/store/modules.types';
import { mapGetters, mapMutations } from 'vuex';
import { RESET_VOTES } from '@/store/modules/votes/mutations.types';
import VoteOptions from '@/components/VoteOptions.vue';

export default {
  name: 'Score',
  components: {
    VoteOptions,
  },
  computed: {
    ...mapGetters(VOTES_MODULE, ['groupedVotes', 'votesLoading']),
  },
  methods: {
    ...mapMutations(VOTES_MODULE, {
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

  &__loader-container {
    width: 100%;
    height: 100%;
    display: flex;
  }
}
</style>

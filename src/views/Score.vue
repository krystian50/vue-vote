<template>
  <div class="score">
    <div
      v-if="!votesLoading"
      class="score__container"
    >
      <div class="score__rate-container">
        <span class="score__rate">
          {{ Math.round(positiveVotesRate * 10000) / 100 }} %
        </span>
      </div>
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
        v-if="superuser"
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
import { mapGetters, mapMutations } from 'vuex';
import VoteOptions from '@/components/VoteOptions.vue';
import { RESET_VOTES } from '@/store/modules/votes/mutations.types';
import { VOTES_MODULE, USER_MODULE } from '@/store/modules.types';
import { positiveOptionKey, voteOptions } from '@/consts/vote-options.consts';

export default {
  name: 'Score',
  components: {
    VoteOptions,
  },
  computed: {
    ...mapGetters(VOTES_MODULE, ['groupedVotes', 'votesLoading']),
    ...mapGetters(USER_MODULE, ['superuser']),
    votesSum() {
      return voteOptions.reduce((acc, key) => (acc + this.groupedVotes[key]), 0);
    },
    positiveVotesRate() {
      return this.groupedVotes[positiveOptionKey] / (this.votesSum || 1);
    },
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

  &__rate-container {
    color: #4caf50;
    font-size: 77px;
    line-height: 234px;
    border: 4px solid #4caf50;
    display: block;
    width: 250px;
    height: 250px;
    border-radius: 125px;
    margin: 37px auto;
  }
}
</style>

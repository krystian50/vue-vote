<template>
  <div class="score">
    <div
      v-if="!votesLoading"
      class="score__container"
    >
      <ScoreRate :rate="positiveVotesRate" />
      <VoteOptions>
        <template slot-scope="optionProps">
          <div
            class="score__item"
            :style="{ color: optionProps.color }"
          >
            <Transition
              name="slide-fade"
              mode="out-in"
            >
              <span
                :key="optionProps.option + groupedVotes && groupedVotes[optionProps.option]"
                class="score__item-value"
              >
                {{ groupedVotes && groupedVotes[optionProps.option] }}
              </span>
            </Transition>
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
import { RESET_VOTES } from '@/store/modules/votes/mutations.types';
import { VOTES_MODULE, USER_MODULE } from '@/store/modules.types';
import { positiveOptionKey, voteOptions } from '@/consts/vote-options.consts';
import VoteOptions from '@/components/VoteOptions.vue';
import ScoreRate from './score/Rate.vue';

export default {
  name: 'Score',
  components: {
    VoteOptions,
    ScoreRate,
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
}

.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .15s ease-in;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-20px) scale(1.2);
}
</style>

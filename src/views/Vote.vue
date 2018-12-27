<template>
  <div
    v-if="!hasUserVoted"
    class="vote"
  >
    <h1 class="vote__header">
      Do you know?
    </h1>
    <VoteOptions>
      <BaseButton
        slot-scope="optionProps"
        class="vote__button"
        :style="{ color: optionProps.color }"
        variant="icon"
        @click="onVoted(optionProps.option)"
      >
        <i
          class="vote__button-icon"
          :style="{
            content: `url(${require('../assets/' + optionProps.icon)})`
          }"
        />
        <span class="vote__button-label">
          {{ optionProps.label }}
        </span>
      </BaseButton>
    </VoteOptions>
  </div>
  <AnimatedCheckMark v-else />
</template>
<script>
import { VOTES_MODULE } from '@/store/modules.types';
import { createNamespacedHelpers } from 'vuex';
import { ADD_VOTE } from '@/store/modules/votes/mutations.types';
import Vote from '@/models/vote.model';
import VoteOptions from '@/components/VoteOptions.vue';
import AnimatedCheckMark from '@/components/AnimatedCheckMark.vue';

const { mapMutations } = createNamespacedHelpers(VOTES_MODULE);

export default {
  name: 'Vote',
  components: {
    VoteOptions,
    AnimatedCheckMark,
  },
  data: () => ({
    hasUserVoted: false, // will be changed to vuex implementation
  }),
  methods: {
    ...mapMutations({
      addVote: ADD_VOTE,
    }),
    onVoted(type) {
      this.hasUserVoted = true;
      this.addVote(new Vote('randomUser', type));
    },
  },
};
</script>

<style lang="scss">
.vote {
  &__button {
    border-radius: 100px;
    height: 200px;
    width: 120px;
    margin: 0 40px;
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  &__button-icon {
    display: block;
    margin: 0 auto;
    color: inherit;

    &:active {
      transform: scale(0.9);
    }
  }

  &__button-label {
    display: block;
    text-align: center;
    width: 100%;
    margin-top: 10px;
    font-size: 20px;
  }

  &__header {
    font-size: 60px;
    padding-top: 50px;
  }
}
</style>

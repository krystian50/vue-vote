<template>
  <div
    class="vote"
  >
    <div
      v-if="!hasVoted && !loading"
      class="vote__container"
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
              content: `url(${require('@/assets/' + optionProps.icon)})`
            }"
          />
          <span class="vote__button-label">
            {{ optionProps.label }}
          </span>
        </BaseButton>
      </VoteOptions>
    </div>
    <AnimatedCheckMark v-else-if="hasVoted" />
    <BaseLoader v-else-if="loading" />
  </div>
</template>
<script>
import { VOTES_MODULE, USER_MODULE } from '@/store/modules.types';
import { mapGetters, mapMutations } from 'vuex';
import { ADD_VOTE } from '@/store/mutations.types';
import Vote from '@/models/vote.model';
import VoteOptions from '@/components/VoteOptions.vue';
import AnimatedCheckMark from '@/components/AnimatedCheckMark.vue';
import { USER_ID, HAS_USER_VOTED, VOTES_LOADING } from '@/store/getters.types';

export default {
  name: 'Vote',
  components: {
    VoteOptions,
    AnimatedCheckMark,
  },
  computed: {
    // This is a way to bind multiple modules properties into your component
    // in App component you can find different aproach
    ...mapGetters(USER_MODULE, {
      userId: USER_ID,
    }),
    ...mapGetters(VOTES_MODULE, {
      hasVoted: HAS_USER_VOTED,
      loading: VOTES_LOADING,
    }),
  },
  methods: {
    ...mapMutations(VOTES_MODULE, {
      addVote: ADD_VOTE,
    }),
    onVoted(type) {
      this.addVote(new Vote(this.userId, type));
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

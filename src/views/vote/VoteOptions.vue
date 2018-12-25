<template>
  <div class="vote-options">
    <BaseButton
      v-for="option of voteOptions"
      :key="option"
      class="vote-options__button"
      :style="{ color: voteOptionsColors[option] }"
      type="icon"
      @click="onOptionChoose(option)"
    >
      <i
        class="vote-options__button-icon"
        :style="{ content: `url(${require('../../assets/' + voteOptionsIcons[option])})` }"
      />
      <span class="vote-options__button-label">
        {{ voteOptionsLabels[option] }}
      </span>
    </BaseButton>
  </div>
</template>
<script>
import {
  voteOptions,
  voteOptionsLabels,
  voteOptionsColors,
  voteOptionsIcons,
} from '@/consts/vote-options.consts';

export default {
  name: 'VoteOptions',
  data: () => ({
    voteOptions,
    voteOptionsLabels,
    voteOptionsColors,
    voteOptionsIcons,
  }),
  methods: {
    onOptionChoose(type) {
      console.log(type); // eslint-disable-line
      this.$emit('voted', type);
    },
  },
};
</script>
<style lang="scss">
.vote-options {
  padding: 10% 0;

  &__button {
    border-radius: 100px;
    height: 200px;
    width: 120px;
    margin: 0 40px;
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
  }

  &__button:focus {
    outline: none;
  }

  &__button-icon {
    display: block;
    margin: 0 auto;
    color: inherit;
  }

  &__button-icon:active {
    transform: scale(0.9);
  }

  &__button-label {
    display: block;
    text-align: center;
    width: 100%;
    margin-top: 10px;
  }
}
</style>

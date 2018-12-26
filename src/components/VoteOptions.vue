<template>
  <div class="vote-options">
    <div
      v-for="option of voteOptions"
      :key="option"
      class="vote-options__option"
    >
      <slot
        :option="option"
        :color="voteOptionsColors[option]"
        :icon="voteOptionsIcons[option]"
        :label="voteOptionsLabels[option]"
      />
    </div>
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
};
</script>
<style lang="scss">
.vote-options {
  padding: 2% 10%;
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}
</style>

<template>
  <div class="vote-options">
    <VoteOptions>
      <BaseButton
        slot-scope="optionProps"
        class="vote-options__button"
        :style="{ color: optionProps.color }"
        type="icon"
        @click="onOptionChoose(optionProps.option)"
      >
        <i
          class="vote-options__button-icon"
          :style="{
            content: `url(${require('../../assets/' + optionProps.icon)})`
          }"
        />
        <span class="vote-options__button-label">
          {{ optionProps.label }}
        </span>
      </BaseButton>
    </VoteOptions>
  </div>
</template>
<script>
import VoteOptions from '@/components/VoteOptions.vue';

export default {
  name: 'VoteOptionsContainer',
  components: {
    VoteOptions,
  },
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

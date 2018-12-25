<template>
  <button
    class="vote-options-button"
    :class="'vote-options-button--' + buttonType"
    @click="onClick()"
  >
    <i
      class="vote-options-button__icon"
      :class="'vote-options-button__icon--' + buttonType"
    />
    <span class="vote-options-button__label">
      {{ label }}
    </span>
  </button>
</template>
<script>
import { voteOptionsLabels } from '@/consts/vote-options.consts';

export default {
  name: 'VoteOptionsButton',
  props: {
    buttonType: {
      type: String,
      required: true,
    },
  },
  computed: {
    label() {
      return voteOptionsLabels[this.buttonType];
    },
  },
  methods: {
    onClick() {
      this.$emit('click', this.buttonType);
    },
  },
};
</script>
<style lang="scss">
.vote-options-button {
  border-radius: 100px;
  height: 200px;
  width: 120px;
  margin: 0 40px;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;

  &__icon {
    display: block;
    margin: 0 auto;
    color: inherit;
  }

  &__icon--yes {
    content: url("../../assets/face-happy.png");
      fill: #ff0000;
  }

  &__icon--no {
    content: url("../../assets/face-sad.png");
  }

  &__icon--duno {
    content: url("../../assets/face-neutral.png");
  }

  &__label {
    display: block;
    text-align: center;
    width: 100%;
  }
}

.vote-options-button--yes {
  color: #4caf50;
}
.vote-options-button--duno {
  color: #ffc107;
}
.vote-options-button--no {
  color: #f44336;
}
</style>

<template>
  <button
    class="button"
    :class="[
      loading ? 'loading' : '',
      variant
    ]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script>
const buttonTypes = ['text', 'icon'];

export default {
  name: 'BaseButton',
  inheritAttrs: false,
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    variant: {
      type: String,
      required: true,
      validator: value => buttonTypes.indexOf(value) !== -1,
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>
<style lang="scss" scoped>
.button {
  &.text {
    background-color: #9c0304;
    padding: 15px 50px;
    color: #ffffff;
    border: none;
    font-size: 21px;
    outline: none;
  }
}
</style>

<template>
  <button
    class="button"
    :class="[
      loading ? 'loading' : '',
      type
    ]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span v-if="label">
      {{ label }}
    </span>
    <slot v-else />
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

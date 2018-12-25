<template>
  <button
    class="button"
    :class="[
      loading ? 'loading' : '',
      type
    ]"
  >
    <span v-if="label">
      {{ label }}
    </span>
    <slot v-else />
  </button>
</template>
<script>
export default {
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

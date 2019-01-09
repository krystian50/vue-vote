<template functional>
  <div
    class="score-rate"
    :style="{ color: props.color, 'border-color': props.color }"
  >
    <span>
      {{ props.rate | percentage }} %
    </span>
  </div>
</template>
<script>
import Percentage from '@/filters/percentage.filter';

const between = (x, min, max) => (x >= min && x <= max);

export default {
  filters: {
    Percentage,
  },
  props: {
    rate: {
      type: Number,
      required: true,
      validator: val => between(val, 0, 1),
    },
    color: {
      type: String,
      required: false,
      default: 'black',
    },
  },
};
</script>
<style lang="scss">
.score-rate {
  font-size: 65px;
  line-height: 245px;
  border: 4px solid;
  display: block;
  width: 260px;
  height: 260px;
  border-radius: 130px;
  margin: 37px auto;
}
</style>

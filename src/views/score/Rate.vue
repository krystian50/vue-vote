<template functional>
  <div class="score-rate">
    <span>
      {{ Math.round(props.rate * 10000) / 100 }} %
    </span>
  </div>
</template>
<script>
const between = (x, min, max) => (x >= min && x <= max);

export default {
  props: {
    rate: {
      type: Number,
      required: true,
      validator: val => between(val, 0, 1),
    },
  },
};
</script>
<style lang="scss">
.score-rate {
  color: #4caf50;
  font-size: 65px;
  line-height: 245px;
  border: 4px solid #4caf50;
  display: block;
  width: 260px;
  height: 260px;
  border-radius: 130px;
  margin: 37px auto;
}
</style>

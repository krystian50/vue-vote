<template>
  <div
    id="app"
    class="app"
  >
    <TheHeader />
    <main class="app__content">
      <RouterView />
    </main>
  </div>
</template>

<script>
import { VOTES_MODULE } from '@/store/modules.types';
import { INIT_VOTES_REF } from '@/store/modules/votes/actions.types';
import { createNamespacedHelpers } from 'vuex';
import TheHeader from '@/components/TheHeader.vue';

const { mapActions } = createNamespacedHelpers(VOTES_MODULE);

export default {
  name: 'App',
  components: {
    TheHeader,
  },
  created() {
    this.initVotesRef();
  },
  methods: {
    ...mapActions({
      initVotesRef: INIT_VOTES_REF,
    }),
  },
};
</script>

<style lang="scss">
.app {
  height: 100vh;
  text-align: center;

  &__content {
    height: calc(100% - 56px);
    overflow: auto;
    background-color: #343a40cc;
  }
}
</style>

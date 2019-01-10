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
import { createNamespacedHelpers } from 'vuex';
import { VOTES_MODULE } from '@/store/modules.types';
import { INIT_VOTES_REF } from '@/store/actions.types';
import TheHeader from '@/components/TheHeader.vue';

// This is an example how you can map your modules properties(actions, mutations, getters, state)
// In other components you can find another aproach, choose one of them or create your own one
const { mapActions: mapVotesActions } = createNamespacedHelpers(VOTES_MODULE);

export default {
  name: 'App',
  components: {
    TheHeader,
  },
  created() {
    this.initVotesRef();
  },
  methods: {
    ...mapVotesActions({
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

<template>
  <div class="home">
    <img
      class="home__logo"
      alt="app logo"
      src="https://15.polyconf.com/assets/partners/devmeetings.png"
    >
    <h1 class="home__title">
      DevMeetings: warsztaty dla programistów z pasją
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss">
.home {
  &__logo {
    max-width: 60%;
    margin: 100px 0;
  }
}
</style>

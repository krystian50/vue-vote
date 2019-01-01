<template>
  <Navbar
    toggleable="md"
    type="dark"
    variant="dark"
  >
    <NavbarToggle target="nav_collapse" />

    <NavbarBrand to="/">
      VoteApp
    </NavbarBrand>

    <Collapse
      id="nav_collapse"
      is-nav
    >
      <NavbarNav class="ml-auto">
        <NavItem
          to="vote"
        >
          Vote
        </NavItem>
        <NavItem
          to="score"
        >
          Score
        </NavItem>
        <NavItem
          v-if="superuser"
          to="/settings"
        >
          Settings
        </NavItem>
      </NavbarNav>
    </Collapse>
  </Navbar>
</template>
<script>
import Navbar from 'bootstrap-vue/es/components/navbar/navbar';
import Collapse from 'bootstrap-vue/es/components/collapse/collapse';
import NavbarNav from 'bootstrap-vue/es/components/navbar/navbar-nav';
import NavbarToggle from 'bootstrap-vue/es/components/navbar/navbar-toggle';
import NavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand';
import NavItem from 'bootstrap-vue/es/components/nav/nav-item';
import { mapGetters } from 'vuex';
import { USER_MODULE } from '@/store/modules.types';

export default {
  components: {
    Navbar,
    NavItem,
    Collapse,
    NavbarNav,
    NavbarToggle,
    NavbarBrand,
  },
  computed: {
    ...mapGetters(USER_MODULE, ['superuser']),
  },
};
</script>

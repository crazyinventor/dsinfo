<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        CrazyInventor
      </router-link>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"  @click="showNav = !showNav" :class="{ 'is-active': showNav }">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-start" @click="hideNavBar">
        <router-link to="/about" class="navbar-item">
          About
        </router-link>

        <router-link to="/portfolio" class="navbar-item">
          Portfolio
        </router-link>

        <router-link to="/contact" class="navbar-item">
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data: function () {
    return {
      showNav: false
    }
  },
  methods: {
    hideNavBar: function() {
      this.showNav = false;
    }
  }
}
</script>

<style>
</style>

<template>
  <footer class="has-text-white">
    <div class="columns">
      <div class="column has-text-left">
        <a
          href="https://www.linkedin.com/in/schneiderdavidb/"
          target="_dsinfo_linkedin"
          >
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>

      </div>
      <div class="column has-text-centered has-text-left-mobile">
        Powered by <a href="https://vuejs.org/" target="_dsinfo_vjs">Vue.js</a>.
      </div>
      <div class="column has-text-right has-text-left-mobile">
        &copy; 2020 <a
          href="https://www.davidschneider.info/"
          class="has-text-gray"
          >David Schneider</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  padding: 0 1em 1em;
}

a {
  color: #bbb;
  text-decoration: none;
}

a:hover {
  color: #fff;
  text-decoration: none;
}
</style>

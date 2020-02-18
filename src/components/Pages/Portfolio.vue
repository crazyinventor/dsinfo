<template>
  <div>
    <div class="hero page-portfolio">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Portfolio
          </h1>
        </div>
      </div>
    </div>
    <div class="container">
      <Portfolio/>
    </div>
  </div>
</template>

<script>

import Portfolio from '../Elements/Portfolio';

export default {
  name: 'PortfolioPage',
  components: {
    Portfolio
  }
}
</script>

<style scoped>
</style>

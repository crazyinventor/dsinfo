<template>
  <div id="portfolio-list">
    <PortfolioItem />
    <PortfolioItem />
    <PortfolioItem />
  </div>
</template>

<script>
import PortfolioItem from './PortfolioItem';

export default {
  name: 'Portfolio',
  components: {
    PortfolioItem
  }
}
</script>

<style scoped>
#portfolio-list {
  margin: 1em;
}
</style>

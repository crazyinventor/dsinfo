<template>
  <div id="portfolio-list">
    <div v-for="(item,index) in items" :key="index">
      <PortfolioItem
        :item="item"
        />
    </div>
  </div>
</template>

<script>
import PortfolioItem from './PortfolioItem';

export default {
  name: 'Portfolio',
  components: {
    PortfolioItem
  },
  data: function(){
    return {
      items: [
        {
          title: "crazyinventor/infrastructure-as-a-code",
          description: "say something about it",
          link: "https://github.com/crazyinventor/infrastructure-as-a-code"
        },
        {
          title: "crazyinventor/infrastructure-as-a-code",
          description: "say something about it",
          link: "https://github.com/crazyinventor/infrastructure-as-a-code"
        }
      ]
    };
  }
}
</script>

<style scoped>
#portfolio-list {
  margin: 1em;
}
</style>

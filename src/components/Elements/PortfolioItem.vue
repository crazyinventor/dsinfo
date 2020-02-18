<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <i class="fas fa-reply" aria-hidden="true"></i>
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <h1>{{ item.title }}</h1>
          <p>{{ item.description }}</p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item" aria-label="reply">
              <span class="icon is-small">
                <i class="fas fa-reply" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'PortfolioItem',
  props: ['item'],
}
</script>

<style scoped>
</style>

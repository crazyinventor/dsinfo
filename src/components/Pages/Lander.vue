<template>
  <div id="lander">
    <div class="hero is-bold page-lander">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Hello World!
          </h1>
          <h2 class="subtitle">
            My name is David Schneider. Welcome to my personal website.
          </h2>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child notification page-about">
            <div class="container">
              <p class="title">About Me</p>
              <p>Born in Germany in 1981 nothing was able to hold me down exploring the world.</p>
              <ButtonLink routeName="/about" linkText="Read the full story" />
            </div>
          </div>
        </div>
        <div class="tile is-parent is-vertical">
          <div class="tile is-child notification page-portfolio">
            <div class="container">
              <p class="title">Portfolio</p>
              <p>Would you like to see a selection of my work?</p>
              <ButtonLink routeName="/portfolio" linkText="Checkout my portfolio" />
            </div>
          </div>
          <div class="tile is-child notification page-contact">
            <div class="container">
              <p class="title">Contact Me</p>
              <p>Need to get in touch? I have created a contact form and left other means to contact me.</p>
              <ButtonLink routeName="/contact" linkText="Send me a message" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ButtonLink from '../Elements/ButtonLink.vue'

export default {
  name: 'WebsiteLander',
  components: {
    ButtonLink
  }
}
</script>

<style scoped>
.hero {
  margin-bottom: 0.5em;
}
#lander>.tile {
  padding-left: 0.5em;
  padding-right: 0.5em;
}
</style>

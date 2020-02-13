<template>
  <div class="full-height">
    <NavBar/>
    <main class="content">
      <router-view></router-view>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    Footer,
    NavBar
  }
}
</script>

<style>

.full-height {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main.content {
  flex: 1;
  padding-top: 3.25em;
}
</style>

<template>
  <div id="app">
    <NavBar/>
    <main>
      <div class="container">
        <router-view></router-view>
      </div>
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
</style>

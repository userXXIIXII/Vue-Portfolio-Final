<template>
  <div class="app-container">
    <Header />
    <main class="content">
      <transition :name="$route.meta.transition || 'fade'" mode="out-in">
        <router-view />
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script> 

<style>
  html, body {
    height: 100%;
    margin: 0;
  }

  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content {
    flex: 1;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s ease;
  }

  .fade-enter-from, .fade-leave-to {
   opacity: 0;
  }

</style>


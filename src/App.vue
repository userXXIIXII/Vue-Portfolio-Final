<template>
  <Header />
  <main class="content">
    <Transition name="fade" mode="out-in">
      <router-view />
    </Transition>
  </main>
  <Footer />
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
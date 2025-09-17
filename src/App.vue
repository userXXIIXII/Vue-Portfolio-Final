<template>
  <Header />
  <main class="content">
<<<<<<< HEAD
      <router-view />
=======
    <Transition name="fade" mode="out-in">
      <router-view />
    </Transition>
>>>>>>> 503e0269e3d7ed1fb46f4db828a8d9ffb8999352
  </main>
  <Footer />
</template>

<<<<<<< HEAD
=======

>>>>>>> 503e0269e3d7ed1fb46f4db828a8d9ffb8999352
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
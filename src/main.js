import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// Import Vue Router
import { createRouter, createWebHistory } from 'vue-router'
import Accueil from './components/Intro.vue'        // new landing page
import About from './components/About.vue'
import Competence from './components/Competence.vue'
import Projets from './components/Projets.vue'
import Contact from './components/Contact.vue'


// Define routes
const routes = [
  { path: '/', component: Accueil },        // Landing page
  { path: '/about', component: About }, 
  { path: '/competences', component: Competence },   
  { path: '/projets', component: Projets }, // Projects page
  { path: '/contact', component: Contact }

]

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Create and mount Vue app with router
createApp(App)
  .use(router)  // ⚡ important: tell Vue to use the router
  .mount('#app')

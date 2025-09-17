import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

<<<<<<< HEAD
// Import Vue Router
import { createRouter, createWebHistory } from 'vue-router'
import Intro from './components/Intro.vue'        // new landing page
=======
import { createRouter, createWebHistory } from 'vue-router'
import Intro from './components/Intro.vue'        
>>>>>>> 503e0269e3d7ed1fb46f4db828a8d9ffb8999352
import About from './components/About.vue'
import Competence from './components/Competence.vue'
import Projets from './components/Projets.vue'
import Contact from './components/Contact.vue'

<<<<<<< HEAD

// Define routes
const routes = [
  { path: '/', component: Intro },        // Landing page
  { path: '/about', component: About }, 
  { path: '/competences', component: Competence },   
  { path: '/projets', component: Projets }, // Projects page
=======
const routes = [
  { path: '/', component: Intro },     
  { path: '/about', component: About }, 
  { path: '/competence', component: Competence},   
  { path: '/projets', component: Projets }, 
>>>>>>> 503e0269e3d7ed1fb46f4db828a8d9ffb8999352
  { path: '/contact', component: Contact }

]

<<<<<<< HEAD
// Create router
=======

>>>>>>> 503e0269e3d7ed1fb46f4db828a8d9ffb8999352
const router = createRouter({
  history: createWebHistory(),
  routes
})

<<<<<<< HEAD
// Create and mount Vue app with router
createApp(App)
  .use(router)  // ⚡ important: tell Vue to use the router
  .mount('#app')
=======
createApp(App)
  .use(router) 
  .mount('#app')
>>>>>>> 503e0269e3d7ed1fb46f4db828a8d9ffb8999352

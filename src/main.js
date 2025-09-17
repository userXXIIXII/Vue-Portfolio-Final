import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import { createRouter, createWebHistory } from 'vue-router'
import Intro from './components/Intro.vue'        
import About from './components/About.vue'
import Competence from './components/Competence.vue'
import Projets from './components/Projets.vue'
import Contact from './components/Contact.vue'

// Define routes
const routes = [
  { path: '/', component: Intro },        // Landing page
  { path: '/about', component: About }, 
  { path: '/competences', component: Competence },   
  { path: '/projets', component: Projets }, // Projects page
  { path: '/contact', component: Contact }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App)
  .use(router) 
  .mount('#app')


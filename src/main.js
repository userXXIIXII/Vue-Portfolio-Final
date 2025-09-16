import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import { createRouter, createWebHistory } from 'vue-router'
import Intro from './components/Intro.vue'        
import About from './components/About.vue'
import Experiences from './components/Experiences.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

const routes = [
  { path: '/', component: Intro },     
  { path: '/about', component: About }, 
  { path: '/experiences', component: Experiences},   
  { path: '/projects', component: Projects }, 
  { path: '/contact', component: Contact }

]


const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App)
  .use(router) 
  .mount('#app')
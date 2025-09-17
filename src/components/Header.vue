<template>
  <header :style="{ backgroundImage: `url('${theme}')` }">
    <div class="header-container">
      <div class="logo-title">
        <img src="../assets/logo.png"  alt="adLogo" class="logoHeader" />
        <h1>Mon Portfolio</h1>
      </div>
      <nav>
        <router-link to="/">Accueil</router-link>
        <router-link to="/about">A Propos</router-link>
        <router-link to="/competences">Comptétences</router-link>
        <router-link to="/projets">Projets</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>

import theme from '../assets/themeNav.jpg';


</script>

<style scoped>

header {
  height: 180px;
  background-size: cover;
  background-position: center;
}

.header-container {
  display: flex;               
  align-items: center;         
  justify-content: space-between; 
  height: 100%;
  padding: 0 20px;             
}

.logo-title {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logoHeader {
  height: 150px;
  width: 150px;
  margin: 0;
  display: block;
}

nav {
  display: flex;
  gap: 15px;         /* space between links */
}

nav a {
  display: inline-block;
  color: white;
  font-size: 1rem;
  transition: color 0.3s ease,
              transform 0.3s ease,
              font-size 0.3s ease;

}

nav a:hover {
  transform: scale(1.1);
}

nav a.router-link-active {
  color: lightgray;
  font-weight: bolder;
  border-bottom: 2px solid lightgray;
  font-size: 1.4rem;
  transform: translateY(-5px);
}


</style>
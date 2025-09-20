<template>
  <header :style="{ backgroundImage: `url('${theme}')` }">
    <div class="header-container">
      <div class="logo-title">
        <router-link to="/">
          <img src="../assets/logo.png"  alt="adLogo" class="logoHeader" />
        </router-link>
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
  filter: drop-shadow(10px 10px 10px black);
}

nav {
  display: flex;
  gap: 15px;         /* space between links */
}

nav a {
  display: inline-block;
  text-shadow: 5px 5px 5px black;
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


@media (max-width: 375px) {

  header {
    height: 100px;
  }

  .logoHeader {
    height: 60px;
    width: 60px;
  }

  .logo-title {
    font-size: 1rem;
  }

  nav {
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }

  nav a {
    font-size: 0.5rem;
  }

  nav a.router-link-active {
    font-size: 1rem;
    transform: translateY(0);
    border-bottom: 1px solid lightgrey;
  }

}

</style>
<template>
    <header :style="{ backgroundImage: `url(${theme})` }">
    <div class="header-container">
      <div class="logo-title">
        <img :src="logo" alt="logo" class="logoHeader" />
        <h1>Mon Portfolio</h1>
      </div>
      <nav>
        <router-link to="/">Accueil</router-link>
        <router-link to="/about">A Propos</router-link>
        <router-link to="competence">Comptétences</router-link>
        <router-link to="/projets">Projets</router-link>
        <router-link to="contact">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
    import theme from "../assets/themeNav.jpg"; 
    import logo from "../assets/logo.png";
</script> 

<style scoped>

    header {
        background-size: cover;
        background-position: center;
        height: 180px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-size: cover;
        background-position: center;
        z-index: 1000; 
    }

    .header-container {
        display: flex;               
        align-items: center;         
        justify-content: space-between; 
        height: 100%;
        padding: 0 20px;            
    }

    .logoHeader {
        height: 150px;
        width: 150px;
        margin: 0;
        display: block;
    }

    .logo-title {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    nav {
    display: flex;
    gap: 15px;        
    }

    nav a {
    display: inline-block;
    color: white;
    font-size: 1rem;
    transition: color 0.3s ease,
                transform 0.3s ease,
                font-size 0.3s ease;
    }

    nav a.router-link-active {
    color: lightgray;
    font-weight: bolder;
    border-bottom: 2px solid lightgray;
    font-size: 1.4rem;
    transform: translateY(-5px);
    }    

@media (max-width: 480px) {
  .header-container {
    flex-direction: row;           /* keep logo-title and nav in one row */
    justify-content: space-between;/* logo left, nav right */
    align-items: center;           /* vertically centered */
    padding: 0 10px;
    height: 100%;
    gap: 5px;
  }

  .logo-title {
    display: flex;
    flex-direction: row;           /* logo + H1 side by side */
    align-items: center;
    gap: 8px;
  }

  .logoHeader {
    height: 60px;                  /* smaller logo */
    width: 60px;
  }

  .logo-title h1 {
    font-size: 1rem;               /* smaller text */
  }

  nav {
    display: flex;
    flex-direction: column;        /* stack links vertically */
    align-items: flex-end;         /* align to the right side */
    gap: 3px;
  }

  nav a {
    font-size: 0.8rem;             /* smaller font for mobile */
  }
}


</style>
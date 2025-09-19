<template>
    <section class="intro" :style="{ backgroundImage: `url('${theme}')`}">
        <img :src="profilePic" alt="My Photo" class="profile-photo">
        <p>Salut! Je suis</p>
        <h1>Aarin Deb</h1>
        <h2>Front-End & Back-End Développeur</h2>
    </section>
</template>

<script setup>
    import theme from "../assets/themeBody.jpg";
    import profilePic from "../assets/introPic.jpg";
</script>


<style scoped>
    .intro {
        flex: 1;
        display: flex;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        text-align: center;
        height: 100%;
    }

    p {
        margin-bottom: -10px;
    }

    h1 {
        margin-bottom: 10px;
    }

    .profile-photo {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        object-fit: cover;
        margin: 25px 0 20px 0;
        transition: transform 0.3s ease;
    }

    .profile-photo:hover {
        transform: scale(1.2);
    }
    
</style>
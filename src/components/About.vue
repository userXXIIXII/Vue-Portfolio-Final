<template>
    <section :style="{backgroundImage: `url('${theme}')`}">
        <p>Découvrez-en plus</p>
        <h1>Qui suis-je?</h1>

        <div class="section-details">

            <div class="details-container">
                <img :src="experienceIcon" alt="ecperience icon" class="icon">
                <h3>Expériences</h3>
                <p>3+ années <br>Full-Stack Développeur</br></p>
            </div>

            <div class="details-container">
                <img :src="educationIcon" alt="education icon" class="icon">
                <h3>Education</h3>
                <p>Titre Professionnel Développeur Web
                <br>et Web Mobile</br></p>
            </div>
        </div>

        <p class="bio">
            Ayant suivi une formation intensive en développement web et web mobile, 
            j'ai acquis une solide base de compétences couvrant les principaux
            langages de programmation, frameworks et technologies nécessaires
            pour concevoir, développer et déployer des applications web complètes.
            Cette formation m'a permis de maîtriser les concepts fondamentaux
            du développement web, notamment HTML, CSS, JavaScript,
            ainsi que l'utilisation de frameworks tels que React, Angular 
            et Node.js. J'ai également acquis une expérience pratique en 
            travaillant sur des projets réels, ce qui m'a permis d'affiner
            mes compétences techniques et de développer ma capacité à 
            résoudre efficacement les problèmes rencontrés lors du 
            développement d'applications web.
        </p>
    </section>
</template>

<script setup>
    import theme from "../assets/themeBody.jpg";
    import experienceIcon from "../assets/experience_icon.png";
    import educationIcon from "../assets/education_icon.png";
</script>

<style scoped>
    section {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
    }

    .details-container {
        padding: 1.5rem;
        width: 400px;
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 2rem;
        border: 0.1rem solid rgb(163, 163, 163);
        text-align: center;
    }

    .icon {
        height: 50px;
        width: 50px;
    }

    .section-details {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        margin: 2rem 0;
    }

    .bio {
        width: 900px;
        margin: 0 auto;
        padding: 50px;
        color: white;
    }
</style>
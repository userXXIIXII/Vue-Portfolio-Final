<template>
    <section :style="{backgroundImage: `url('${theme}')`}">
                <p>Parourez mes</p>
        <h1>Projets</h1>

        <div class="section-details">

            <div :style="{backgroundImage: `url('${themeBox}')`}" 
            class="details-container">
                <img :src="cvIcon" alt="CV Icon" class="icon">
                <h3>Projet n°1</h3>
                <div class="button-container">
                    <a href="https://github.com/userXXIIXII/CV-CEF" target="_blank">
                        <button>GitHub</button>
                    </a>
                    <a href="https://userxxiixii.github.io/CV-CEF/" target="_blank">
                        <button>Démo</button>
                    </a>
                </div>
            </div>

            <div :style="{backgroundImage: `url('${themeBox}')`}" 
            class="details-container">
                <img :src="websiteIcon" alt="Website Icon" class="icon">
                <h3>Projet n°2</h3>
                <div class="button-container">
                    <a href="https://github.com/userXXIIXII/Vue-Portfolio-Final" target="_blank">
                        <button>GitHub</button>
                    </a>
                    <a href="" target="_blank">
                        <button>Démo</button>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import theme from "..//assets/themeBody2.jpg"
    import themeBox from "..//assets/themeNav.jpg";
    import cvIcon from "../assets/cv-icon.png";
    import websiteIcon from "..//assets/website-icon.png";
</script>

<style scoped>
    section {        
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
    }

    .details-container {
        border: 0.1rem solid white;
        border-radius: 2rem;

        text-align: center;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        width: 400px;
        padding: 1.5rem;
    }

    .section-details {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        margin: 2rem 0;
    }

    .button-container {
        display: flex;
        flex-direction: row;
    }

    .button-container {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    button {
        border: 0.05rem solid white;
        border-radius: 2rem;
    }

    .icon {
        height: 150px;
        width: 150px;
    }
</style>
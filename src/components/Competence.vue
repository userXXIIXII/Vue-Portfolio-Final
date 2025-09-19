<template>
<section :style="{backgroundImage: `url('${theme}')`}">
    <p>Découvrez mes</p>
    <h1>Compétences</h1>
    <div class="competences">

        <transition name="slide" appear>
        <div class="comp-container" :style="{ backgroundImage: `url('${themeBox}')`}" >
            <h2>Développement Front-End</h2>
            <div class="article-container">
                <div class="comp-details">
                    <img :src="htmlIcon" alt="html" class="icon">
                    <div>
                        <h3>HTML5</h3>
                        <p>Expérimenté</p>
                    </div>
                </div>

                <div class="comp-details">
                    <img :src="cssIcon" alt="CSS" class="icon">
                    <div>
                        <h3>CSS</h3>
                        <p>Compétent</p>
                    </div>
                </div>
                <div class="comp-details">
                    <img :src="jsIcon" alt="Javascript" class="icon">
                    <div>
                        <h3>JavaScript</h3>
                        <p>Habile</p>
                    </div>
                </div>
                <div class="comp-details">
                    <img :src="vueJsIcon" alt="VueJS" class="icon">
                    <div>
                        <h3>Vue JS</h3>
                        <p>Expert</p>
                    </div>
                </div>
                <div class="comp-details">
                    <img :src="angularIcon" alt="Angular" class="icon">
                    <div>
                        <h3>Angular</h3>
                        <p>Doué</p>
                    </div>
                </div>
            </div>
        </div>
        </transition>

        <transition name="slide" appear>
        <div class="comp-container" :style="{ backgroundImage: `url('${themeBox}')` }">
            <h2>Développement Back-End</h2>
            <article class="article-container">
                <li class="comp-details">
                    <img :src="nodeJsIcon" alt="NodeJs" class="icon">
                    <div>
                        <h3>Node JS</h3>
                        <p>Chevronné</p>
                    </div>
                </li>

                <li class="comp-details">
                    <img :src="exIcon" alt="Express" class="icon">
                    <div>
                        <h3>Express</h3>
                        <p>Intérmédiaire</p>
                    </div>
                </li>
                <li class="comp-details">
                    <img :src="phpIcon" alt="PHP" class="icon">
                    <div>
                        <h3>PHP</h3>
                        <p>Solide</p>
                    </div>
                </li>
                <li class="comp-details">
                    <img :src="gitIcon" alt="gitHub" class="icon">
                    <div>
                        <h3>gitHub</h3>
                        <p>Avancé</p>
                    </div>
                </li>
                <li class="comp-details">
                    <img :src="cIcon" alt="C" class="icon">
                    <div>
                        <h3>C#</h3>
                        <p>Doué</p>
                    </div>
                </li>
            </article>
        </div>
        </transition>
    </div>
</section>
</template>

<script setup>
    import theme from "../assets/themeBody.jpg";
    import themeBox from "../assets/themeNav.jpg";
    
    import htmlIcon from "../assets/HTML-icon.png";
    import cssIcon from "../assets/CSS-icon.png";
    import jsIcon from "../assets/JS_icon.png";
    import vueJsIcon from "../assets/VueJS-icon.png";
    import angularIcon from "../assets/Angular-icon.png";

    import nodeJsIcon from "../assets/NodeJs-icon.png";
    import exIcon from "../assets/express-icon.png";
    import phpIcon from "../assets/PHP-icon.png";
    import gitIcon from "../assets/github_icon.png";
    import cIcon from "../assets/C-icon.png";
</script>

<style scoped>

    section {
        flex: 1;
        display: flex;
        flex-direction: column;
        background-position: center;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
    }

    .competences {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        margin: 2rem 0;
    }

    .comp-container {
        border-radius: 2rem;
        border: 0.1rem solid white;
        text-align: center;
        padding: 2rem;
        width: 100%;
        max-width: 500px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        box-shadow: 10px 10px 20px black;
    }

    .article-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        justify-items: center;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .exp-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        width: 120px;
    }

    .icon {
        height: 50px;
        width: 50px;
    }

    .experience {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        margin: 2rem 0;
    }
    
        /* Transition Slide In */
    .slide-enter-active {
    transition: all 0.8s ease;
    }
    .slide-enter-from {
    transform: translateX(-150px);
    opacity: 0;
    }
    .slide-enter-to {
    transform: translateX(0);
    opacity: 1;
    }

</style>
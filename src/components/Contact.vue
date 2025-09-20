<template>
    <div :style="{ backgroundImage: `url('${theme}')`}" class="main-container">
    <div>
        <p>Dennons vie à vos idées</p>
        <h1>Collaborez avec moi</h1>
    </div>
    <div class="section-container">
        <section class="section-left">
            <h1 class="nom">Aarin Deb</h1>
            <h2>Développeur Full-Stack</h2>

            <div class="contact-container">
                <div class="info">
                    <img :src="phoneIcon" alt="Phone Icon" class="icon">
                    <p>07 67 25 14 98</p>
                </div>

                <div class="info">
                    <img :src="mailIcon" alt="Mail Icon" class="icon">
                    <p>aarindeb2003@gmail.com</p>
                </div>

                <div class="info">
                    <img :src="adresseIcon" alt="Adresse Icon" class="icon">
                    <p>Paris, FRANCE</p>
                </div>
            </div>

            <div>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aarindeb2003@gmail.com&su=Collaborons%20Ensemble!&body=Hello!"
                target="_blank">
                    <button :style="{ backgroundImage: `url('${themeBox}')`}">Écrivez-moi pour commencer</button>
                </a>
            </div>
        </section>

        <section class="section-right">
            <img :src="photoContact" alt="Photo Contact" class="photoContact">
        </section>
    </div>
    </div>
</template>

<script setup>
    import theme from "..//assets/themeBody.jpg";
    import themeBox from "..//assets/themeNav.jpg";

    import phoneIcon from "..//assets/phone-icon.png";
    import mailIcon from "..//assets/email-icon.png";
    import adresseIcon from "..//assets/adresse-icon.png";

    import photoContact from "..//assets/photo-contact.jpg";
</script>

<style scoped>
    .icon {
        height: 40px;
        width: 40px;
    }

    .main-container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        height: 100%;

        background-position: center;
        background-size: cover;
    }

    .section-container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .section-left {
        display: flex;
        flex-direction: column;
    }

    .photoContact {
        max-width: 100%;
        height: 400px;
        border: 0.05rem solid white;
        border-radius: 0.75rem;
        box-shadow: 10px 10px 20px black;
    }

    .contact-container {
        height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .info {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    .titre

    .nom {
        font-size: 2.5rem;
    }

    button {
        cursor: pointer;
        transition: 0.3s ease;
        border: 0.05rem solid white;
        box-shadow: 10px 10px 20px black;
    }

    button:hover {
        transform: scale(1.15);
    }

</style>
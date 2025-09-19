<template>

    <section class="footer">

        <div class="info">
            <img :src="phoneIcon" alt="Phone Icon" class="icon">
            <p>07 67 25 14 98</p>
        </div>

        <div class="info">
            <img :src="mailIcon" alt="Mail Icon" class="icon">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aarindeb2003@gmail.com&su=Collaborons%20Ensemble!&body=Hello!" 
            target="_blank">aarindeb2003@gmail.com</a>
        </div>

        <div class="info">
            <img :src="linkedinIcon" alt="LinkedIn Icon" class="icon">
            <a href="https://www.linkedin.com/in/aarin-deb/" target="_blank">LinkedIn</a>
        </div>

    </section>

</template>

<script setup>

    import phoneIcon from "../assets/phone-icon.png";
    import mailIcon from "../assets/email-icon.png";
    import linkedinIcon from "../assets/linkedin_icon.png";

</script>

<style scoped>

    .footer {
        height: 100px;
        text-align: center;
        background-image: url(../assets/themeNAV.jpg);
        background-position: center;
        background-size: cover;
        padding-bottom: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .icon {
        height: 30px;
    }

    .info {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        font-size: 1rem;
        color: white;
        transition: font-size 0.3s ease, color 0.3s ease;
        text-shadow: 5px 5px 5px black;
    }

    .info:hover {
        font-size: 1.4rem;
        color: lightgrey;
        font-weight: bolder;
    }

    a:hover {
        font-weight: bolder;
    }
</style>
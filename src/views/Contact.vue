<template>
    <div>
        <div class="pic">
            <div class="pic-black">
                <div class="marge-top"></div>
                <h1>צור קשר</h1>
            </div>
        </div>
        <div class="contact-details">
            <h1 class="contact-details-header">גודיז ראשון לציון</h1>
            <p>לזרוב 23, ראשון לציון</p>
            <p>טלפון</p>
            <p>03-654-3207</p>
            <p>שעות פעילות</p>
            <p>א’ – ה’ 10:30-0:00</p>
            <p>ו’ סגור</p>
            <p>שבת 20:00-0:00</p>
        </div>
        <div class="contact-form">
            <form action="" method="get">
                <h2 class="contact-form-header">צור קשר</h2>
                <p class="small-input full-name">
                <label for="full-name">שם מלא</label>
                <input type="text" name="full-name" required>
                </p>
                <p class="small-input">
                <label for="email">דוא"ל</label>
                <input type="email" name="email" required>
                </p>
                <p>
                <label for="subject">נושא</label>
                <input type="text" name="subject" required>
                </p>
                <p>
                <label for="message">הודעה</label>
                <textarea id="message" rows="4" cols="50" required></textarea>
                </p>
                <input type="submit" value="שליחה">
            </form>
        </div> 
        
        <Footer></Footer> 
        <div class="marging-footer"></div>      
    </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
    name: "Contact",
    components: {
        Footer
    },
     created() {
        window.scrollTo(0,0);
    }
}
</script>

<style scoped>

    .pic{
        width: 100%;
        background-image: url('../assets/food6.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
    }

    .pic-black{
        background-color: rgba(0,0,0,0.5);
        height: 25rem;
    }

    .marge-top{
        height: 13rem;
    }

    h1{
        color: white;
        font-size: 2.5rem;
    }

    .contact-details{
        width: 90%;
        max-width: 40rem;
        padding: 3rem;
        background-color: beige;
        margin: 2rem auto;
    }

    .contact-details-header{
        color: rgb(204, 116, 2);
        font-size: 2rem;
    }

    .contact-details p{
        color: rgb(204, 116, 2);
        font-size: 1.5rem;
        margin: 1rem;
    }

    .contact-form{
        width: fit-content;
        margin: auto;
    }

    .contact-form-header{
        color: black;
        font-size: 2rem;
        margin: 2rem;
    }

    label{
        color: rgb(204, 116, 2);
        float: right;
        font-size: 1.3rem;
        margin: 0.5rem;
    }

    label::after{
        content: ' *';
    }

    input, textarea{
        background-color: beige;
        border: 1px solid black;
        border-radius: 0.5rem;
        display: block;
        text-align: right;
        font-size: 1rem;
        margin: 1.5rem auto;
        padding: 0.7rem;
        width: 18rem;
        clear: both;
    }

    input[type="submit"]{
        background-color: rgb(204, 116, 2);
        color: white;
        border: none;
        font-size: 1.5rem;
        text-align: center;
        border-radius: 0.5rem;
        margin: 2rem auto;
    }

   input[type="submit"]:hover{
       background-color: rgb(252, 194, 113);
        font-weight: bold;
        cursor: pointer;
        color: black;
    }

    textarea{
        resize: none;
        font-family: 'Alef', sans-serif;
    }

    .marging-footer{
        height: 3.3rem;
        display: block;
    }

    @media (min-width: 43rem)
    {
        .contact-form{
            display: inline-block;
            margin: 2rem auto;
        }

        form{
            float: right;
        }

        input, textarea{
            margin: 0;
            clear: both;
            width: 100%;
        }

        .full-name{
            margin-left: 2%;
        }

        .small-input{
            float: right;
            width: 49%;
        }

        .marging-footer{
            display: none;
        }
    }

    @media (min-width: 65rem)
    {
        .contact-details{
            float: left;
            max-width: 30rem;
            margin: 4rem 2% auto 9%;
        }
    }

    @media (min-width: 78rem)
    {
        input, textarea{
            display: inline;
        }
    }

</style>
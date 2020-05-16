<template>
    <div class="container">
        <div class="marging-header"></div>
        <div class="frame">
            <div class="menu">
                <h1>תפריט אירועים</h1>
                <h2>מנות פתיחה</h2>
                <h3>פתיחה</h3>
                <EventsMenuItem v-for="(item, index) in opening" :description="item.description" :name="item.name" :key.sync="index">
                </EventsMenuItem>
                <h3>ראשונות - 3 סוגים לבחירה + חציל ים תיכון</h3>
                <EventsMenuItem v-for="(item, index) in firsts" :description="item.description" :name="item.name" :key.sync="index">
                </EventsMenuItem>
                <h2>סלטים</h2>
                <h3>סלטים - 3 סוגים לבחירה</h3>
                <EventsMenuItem v-for="(item, index) in salads" :description="item.description" :name="item.name" :key.sync="index">
                </EventsMenuItem>
                <h2>מנות עיקריות</h2>
                <h3>עיקריות - 4 סוגים לבחירה</h3>
                <EventsMenuItem v-for="(item, index) in main" :description="item.description" :name="item.name" :key.sync="index">
                </EventsMenuItem>
                <h2>מיוחדים במינם</h2>
                <h3>בתוספת תשלום</h3>
                <EventsMenuItem v-for="(item, index) in special" :description="item.description" :name="item.name" :key.sync="index">
                </EventsMenuItem>
                <h2>שתייה וקינוחים</h2>
                <h3>שתייה קלה</h3>
                <EventsMenuItem v-for="(item, index) in drinks" :description="item.description" :name="item.name" :key.sync="index">
                </EventsMenuItem>
                <h3>קינוחים</h3>
                <EventsMenuItem v-for="(item, index) in dessert" :description="item.description" :name="item.name" :key.sync="index">
                </EventsMenuItem>
            </div>
        </div>
        <Footer></Footer>
        <div class="margin-footer"></div>
    </div>
</template>

<script>
import firebase from '../firebaseConfig.js'
import EventsMenuItem from "@/components/EventsMenuItem.vue";
import Footer from "@/components/Footer.vue";

const database = firebase.database();
let opening = database.ref("eventsMenu/opening");
let firsts = database.ref("eventsMenu/firsts");
let salads = database.ref("eventsMenu/salads");
let main = database.ref("eventsMenu/main");
let special = database.ref("eventsMenu/special");
let drinks = database.ref("eventsMenu/drinks");
let dessert = database.ref("eventsMenu/dessert");

export default {
    name: "EventsMenu",
    components: {
        EventsMenuItem,
        Footer
    },
    data(){
        return{
            opening: [],
            firsts: [],
            salads: [],
            main: [],
            special: [],
            drinks: [],
            dessert: []
        }
    }, 
    mounted(){
        window.scrollTo(0,0);
        opening.once("value", opening => {
            opening.forEach(item => {
                this.opening.push({
                name: item.child("name").val(),
                description: item.child("description").val()
                });
            });
        });
         firsts.once("value", firsts => {
            firsts.forEach(item => {
                this.firsts.push({
                name: item.child("name").val(),
                description: item.child("description").val()
                });
            });
        });
         salads.once("value", salads => {
            salads.forEach(item => {
                this.salads.push({
                name: item.child("name").val(),
                description: item.child("description").val()
                });
            });
        });
         main.once("value", main => {
            main.forEach(item => {
                this.main.push({
                name: item.child("name").val(),
                description: item.child("description").val()
                });
            });
        });
         special.once("value", special => {
            special.forEach(item => {
                this.special.push({
                name: item.child("name").val(),
                description: item.child("description").val()
                });
            });
        });
         drinks.once("value", drinks => {
            drinks.forEach(item => {
                this.drinks.push({
                name: item.child("name").val(),
                description: item.child("description").val()
                });
            });
        });
         dessert.once("value", dessert => {
            dessert.forEach(item => {
                this.dessert.push({
                name: item.child("name").val(),
                description: item.child("description").val()
                });
            });
        });
    }   
}
</script>

<style scoped>

    .marging-header{
        height: 8rem;
    }

    .frame{
        padding: 1rem;
        border: 5px solid #c45a0f;
        margin: 0 1rem 2rem 1rem;
    }

    .menu{
        border: 3px solid #c45a0f;
        padding: 1rem;
    }

    h1{
        color: #c45a0f;
        margin: 1rem auto;
    }

    h2{
        color: #c45a0f;
        margin: 2rem auto 0.5rem auto;
    }

    h3{
        color: #c45a0f;
        margin: 1.5rem auto;
    }

    .margin-footer{
        height: 3rem;
        display: block;
    }

    @media (min-width: 43rem){
        .container{
            background-image: url('../assets/background.jpg');
            background-position: center;
            background-size: cover;
            background-attachment: fixed;
        }

        .frame{
            border: none;
            padding: 3rem;
            margin: 0;
        }

        .menu{
            background-color: white;
            max-width: 45rem;
            margin: auto;
        }

        .margin-footer{
            display: none;
        }
    }
    
</style>
<template>
    <div>
        <div class="marge-top"></div>
        <h1>גלריה</h1>
        <div class="gallery-pics">
            <img src="" class="pic1 gallery-pic">
            <img src="" class="pic2 gallery-pic">
            <img src="" class="pic3 gallery-pic">
            <img src="" class="pic4 gallery-pic">
            <img src="" class="pic5 gallery-pic">
            <img src="" class="pic6 gallery-pic">
            <img src="" class="pic7 gallery-pic">
            <img src="" class="pic8 gallery-pic">
            <img src="" class="pic9 gallery-pic">
            <img src="" class="pic10 gallery-pic">
            <img src="" class="pic11 gallery-pic">
            <img src="" class="pic12 gallery-pic">
            <img src="" class="pic13 gallery-pic">
            <img src="" class="pic14 gallery-pic">
        </div>
        <Footer></Footer>
        <div class="marging-footer"></div>
    </div>    
</template>

<script>
import firebase from "../firebaseConfig";
import Footer from "@/components/Footer.vue";

export default {
    name: "Gallery",
    components: {
        Footer
    },
    mounted: function(){
        window.scrollTo(0,0);

        firebase.storage().ref().child('/gallery/pic1.jpg').getDownloadURL().then(function(downloadURL) {
                var img = document.querySelector(".pic1");
                img.src = downloadURL;             
            });
        firebase.storage().ref().child('/gallery/pic2.jpg').getDownloadURL().then(function(downloadURL) {
                var img = document.querySelector(".pic2");
                img.src = downloadURL;             
            });
         firebase.storage().ref().child('/gallery/pic3.jpg').getDownloadURL().then(function(downloadURL) {
                var img = document.querySelector(".pic3");
                img.src = downloadURL;             
            });
        firebase.storage().ref().child('/gallery/pic4.jpg').getDownloadURL().then(function(downloadURL) {
                var img = document.querySelector(".pic4");
                img.src = downloadURL;             
            });
            firebase.storage().ref().child('/gallery/pic5.jpg').getDownloadURL().then(function(downloadURL) {
                var img = document.querySelector(".pic5");
                img.src = downloadURL;             
            });
        firebase.storage().ref().child('/gallery/pic6.jpg').getDownloadURL().then(function(downloadURL) {
                var img = document.querySelector(".pic6");
                img.src = downloadURL;             
            });
        firebase.storage().ref().child('/gallery/pic7.jpg').getDownloadURL().then(function(downloadURL) {
                var img = document.querySelector(".pic7");
                img.src = downloadURL;             
            });
        firebase.storage().ref().child('/gallery/pic8.jpg').getDownloadURL().then(function(downloadURL) {
                var img = document.querySelector(".pic8");
                img.src = downloadURL;             
            });
        firebase.storage().ref().child('/gallery/pic9.jpg').getDownloadURL().then(function(downloadURL) {
                var img = document.querySelector(".pic9");
                img.src = downloadURL;             
            });
        firebase.storage().ref().child('/gallery/pic10.jpg').getDownloadURL().then(function(downloadURL) {
                var img = document.querySelector(".pic10");
                img.src = downloadURL;             
            });
        firebase.storage().ref().child('/gallery/pic11.jpg').getDownloadURL().then(function(downloadURL) {
                var img = document.querySelector(".pic11");
                img.src = downloadURL;             
            });
        firebase.storage().ref().child('/gallery/pic12.jpg').getDownloadURL().then(function(downloadURL) {
                var img = document.querySelector(".pic12");
                img.src = downloadURL;             
            });
        firebase.storage().ref().child('/gallery/pic13.jpg').getDownloadURL().then(function(downloadURL) {
                var img = document.querySelector(".pic13");
                img.src = downloadURL;             
            });
        firebase.storage().ref().child('/gallery/pic14.jpg').getDownloadURL().then(function(downloadURL) {
                var img = document.querySelector(".pic14");
                img.src = downloadURL;             
            });
    }
}
</script>

<style scoped>

    .marge-top{
        height: 7rem;
    }

    h1{
        margin: 3rem auto;
        font-size: 2.5rem;
        color: black;
    }

    .gallery-pics{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: fit-content;
        margin: auto;
        padding: 0.5rem;
        max-width: 80rem;
    }

    .gallery-pic{
        width: 18rem;
        height: 18rem;
        margin: 1rem 0.5rem; 
        border-radius: 5px;  
        transition: 0.3s;  
    }

    .gallery-pic:hover{
        opacity: 0.7;
    }

    .marging-footer{
        height: 3.3rem;
        display: block;
    }

    @media (min-width: 43rem)
    {

        .gallery-pic{
            margin: 1rem;    
        }
        .marging-footer{
            display: none;
        }
    }

</style>
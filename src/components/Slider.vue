<template>
    <div>
        <ul>
            <li><img src="" class="pic1"></li>
            <li><img src="" class="pic2"></li>
            <li><img src="" class="pic3"></li>
            <li><img src="" class="pic4"></li>
        </ul>
    </div>
</template>

<script>
    
import firebase from "../firebaseConfig";

export default {
    name: "Slider",
    mounted: function () {
        firebase.storage().ref().child('/wine1.jpg').getDownloadURL().then(function(downloadURL) {
                var img = document.querySelector(".pic1");
                img.src = downloadURL;             
            });

        firebase.storage().ref().child('/cake3.jpg').getDownloadURL().then(function(downloadURL) {
            var img = document.querySelector(".pic2");
            img.src = downloadURL;             
        });

        firebase.storage().ref().child('/food8.jpg').getDownloadURL().then(function(downloadURL) {
            var img = document.querySelector(".pic3");
            img.src = downloadURL;             
        });

        firebase.storage().ref().child('/food4.jpg').getDownloadURL().then(function(downloadURL) {
            var img = document.querySelector(".pic4");
            img.src = downloadURL;             
        });
  
  }
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        position: relative;
    }
    li {
        position: absolute;
        margin-top: 6.1rem;
        width: 100%;
        height: 20rem;
    }
    img{
        border-radius: 3px;
        box-shadow: 0 0 5px 0 hsla(0,0%,30%, .3);
        width: 100%;
        height: 100%;
    }
    li:nth-child(4) {
        animation: xfade 16s 0s infinite;
    }
    li:nth-child(3) {
        animation: xfade 16s 4s infinite;
    }
    li:nth-child(2) {
        animation: xfade 16s 8s infinite;
    }
    li:nth-child(1) {
        animation: xfade 16s 12s infinite;
    }
    @keyframes xfade{
        17% {
            opacity:1;
        }
        25% {
            opacity:0;
        }
        92% {
            opacity:0;
        }
    }

    @media (min-width: 43rem)
    {
        li {
            margin-top: 7.6rem;
            height: 30rem;
        }
    }

    @media (min-width: 70rem)
    {
        li {
            height: 35rem;
        }
    }

    @media (min-width: 84rem)
    {
        li {
            height: 38rem;
        }
    }

</style>
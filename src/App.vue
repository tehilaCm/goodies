<template>
  <div id="app"> 
    <div class="mobile-nav-items">
      <p class="close" @click="closeMobileNav()">X</p>
      <router-link to="/"><span @click="closeMobileNav()">דף הבית</span></router-link>
      <router-link to="/menu"><span @click="closeMobileNav()">תפריט</span></router-link> 
      <router-link to="/eventsMenu"><span @click="closeMobileNav()">תפריט אירועים</span></router-link>
      <router-link to="/gallery"><span @click="closeMobileNav()">גלריה</span></router-link>
      <router-link to="/contact"><span @click="closeMobileNav()">צור קשר</span></router-link>
    </div>
    <div class="backdrop" @click="closeMobileNav()"></div>
    <div class="nav">
      <router-link to="/">
      <div class="icon-background">
        <h1 class="icon">Goodies</h1>
      </div>
      </router-link>
      <img src="@/assets/menu.png" class="mobile-menu-icon" @click="openMobileNav()">
      <nav>
          <ul>
              <li><router-link to="/">דף הבית</router-link></li>
              <li><router-link to="/menu">תפריט</router-link></li>
              <li><router-link to="/eventsMenu">תפריט אירועים</router-link></li>
              <li><router-link to="/gallery">גלריה</router-link></li>
              <li><router-link to="/contact">צור קשר</router-link></li>
          </ul>
      </nav>
    </div>
    <router-view />
    <div class="side-bar">
      <a href="https://www.google.co.il/maps/place/%D7%9C%D7%96%D7%A8%D7%95%D7%91+23,+%D7%A8%D7%90%D7%A9%D7%95%D7%9F+%D7%9C%D7%A6%D7%99%D7%95%D7%9F%E2%80%AD/@31.9925383,34.775233,17z/data=!3m1!4b1!4m5!3m4!1s0x1502b3806ca076fd:0xabcb23267ca6eea9!8m2!3d31.9925338!4d34.7730443?hl=iw" target="_blank">
      <div class="side-bar-item" title="מפה">
        <img src="@/assets/location.png">
      </div>
      </a>
       <router-link to="/contact">
      <div class="side-bar-item" title="צור קשר">
        <img src="@/assets/call.png">
      </div>
      </router-link>
      <div class="side-bar-item" title="Facebook">
        <img src="@/assets/facebook.png">
      </div>
      <div class="side-bar-item" title="Instagram">
        <img src="@/assets/instagram.png">
      </div>
    </div>
    <div class="scroll-up" onClick="window.scroll({ top: 0,left: 0,behavior: 'smooth' });">
      ^  
    </div>
  </div>
</template>

<script>
// import firebase from "./firebaseConfig";
 
// const database = firebase.database();
// const notesRef = database.ref("test/notes");


export default {
  name: 'app',
  methods: {
    openMobileNav: function(){
      let mobileMenuIcon = document.querySelector(".mobile-menu-icon");
      let $ = require('jquery');

      $( ".backdrop" ).fadeToggle( "fast", "linear" );
      $( ".mobile-nav-items" ).slideToggle( "slow" );
      
      mobileMenuIcon.style.display = "none";
    },

    closeMobileNav: function(){
      let mobileMenuIcon = document.querySelector(".mobile-menu-icon");
      let $ = require('jquery');
      $( ".backdrop" ).fadeToggle( "fast", "linear" );
      $( ".mobile-nav-items" ).slideToggle( "slow" );

      setTimeout(()=>{ 
        mobileMenuIcon.style.display = "block";
      },500);

      // this.fireTest();
    }
    // },

    // fireTest: function()
    // {
    //   //write to database
    //     notesRef.push({content:"yesss", title: "noooo"});

    //     //read from database
    //     notesRef.once("value", notes => {
    //     notes.forEach(note => {
    //       this.notes.push({
    //         id: note.ref.key,
    //         title: note.child("title").val(),
    //         content: note.child("content").val()
            
    //       });
    //     });
    //   });
    //   console.log(this.notes);
    // }
  }
};

const debounce = (fn) => {
  let frame;
  return (...params) => {
        if (frame) { 
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
            fn(...params);
    });
  } 
};
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}
document.addEventListener('scroll', debounce(storeScroll), { passive: true });
storeScroll();


//scroll-up
let $ = require('jquery');
window.addEventListener("scroll",function(){
  if(window.pageYOffset > 600){
      $( ".scroll-up" ).show( "slow" );
  }
  else if(window.pageYOffset < 500){
       $( ".scroll-up" ).hide( "slow" );
  }
},false);

</script>

<style>

  html {
  scroll-behavior: smooth;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .backdrop{
    position: fixed;
    display: none;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    background: rgba(252, 194, 113, 0.4);
  }

  .nav{
    background-color: black;
    left: 0;
    position: fixed;
    z-index: 1;
    width: 100%;
    display: flex;
  }

  nav{
    width: 90%;
    padding: 0.5rem;
    margin: auto 0;
    display: none;
  }

  .icon-background{
    background-color: rgb(252, 194, 113);
    border-radius: 50%;
    height: 5.5rem;
    width: 5.5rem;
    margin: 0.3rem 1rem;
    cursor: pointer;
  }

  .icon{
    display: inline-block;
    color: black;
    height: fit-content;
    margin-top: 35%;
    font-size: 1.3rem;
    cursor: pointer;
  }

  nav ul{
      direction: rtl;
      text-align: center!important;
      width: 100%;
  }

  nav ul > li{
      float: none;
      display: inline-block;
      margin: 0.7rem;
  }

  nav ul li > a{
      padding-bottom: 21px;
      padding-top: 16px;
      text-decoration: none;
      margin: 1rem;
      color: ivory;
      font-size: 1.2rem;
  }

  nav ul li > a:hover{
    color: rgb(252, 194, 113);
  }

  .mobile-menu-icon{
    width: 3rem;
    height: 3rem;
    right: 1rem;
    margin: 1.7rem 0rem;
    position: absolute;
    cursor: pointer;
  }

  .close{
    display: block;
    text-align: right;
    font-weight: bold;
    font-size: 1.3rem;
    margin: 1.5rem;
    cursor: pointer;
    color: ivory;
  }

  .mobile-nav-items{
    width: 13rem;
    height: 100%;
    display: none;
    position: fixed;
    right: 0;
    z-index: 10;
    background-color: black;
  }

  .mobile-nav-items a{
    display: block;
    margin: 1rem;
    text-decoration: none;
    color: ivory;
    cursor: pointer;
  }

  .mobile-nav-items a:hover{
     color: rgb(252, 194, 113);
  } 

  .side-bar {
    position: fixed;
    bottom: 0;
    z-index: 4;
    width: 100%;
  }

  .side-bar-item {
    background-color: rgba(252, 194, 113, 0.9);
    padding: 1rem 0.5rem;
    width: calc(100%/4);
    display: inline-block;
    cursor: pointer;
  }

  .side-bar-item:hover {
    background-color: rgb(204, 116, 2);
  }

  .side-bar-item img{
    width: 1.4rem;
    vertical-align: middle;
  }

  .scroll-up {
    width: 2.5rem;
    height: 2.5rem;
    color: rgb(204, 116, 2);
    position: fixed;
    bottom: 7rem;
    right: 2rem;
    z-index: 5;
    border: 1px solid rgb(204, 116, 2);
    background-color: rgb(254, 255, 168);
    border-radius: 50%;
    padding: 0.5rem;
    font-size: 1.7rem;
    font-weight: bold;
    display: none;
    cursor: pointer;
  }

  @media (min-width: 43rem)
  {

    .scroll-up {
      bottom: 6rem;
      right: 3rem;
    }

    nav{
      display: block;
    }

    .icon-background{
      height: 7rem;
      width: 7rem;
    }
    .icon{
      font-size: 1.7rem;
    }

  .mobile-menu-icon{
      visibility: hidden;
      display: none;
    }

    html:not([data-scroll="0"]) .icon-background {
      width: 4rem;
      height: 4rem;
    }

    html:not([data-scroll="0"]) .icon {
      font-size: 1rem;
    }

    html:not([data-scroll="0"]) nav ul li > a {
      font-size: 1.1rem;
    }

    .side-bar {
      position: fixed;
      left: 0;
      top: 16rem;
      z-index: 4;
      width: fit-content;
      height: fit-content;
    }

    .side-bar-item {
      width: 4rem;
      display: block;
    }
  }

</style>

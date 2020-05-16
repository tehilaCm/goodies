<template>
  <div class="home">
    <Slider></Slider>
    <div class="section-1">
      <h1 class="headline">ראשון לציון Goodies</h1>
      <div class="breaking-line"></div>
      <p class="description">מסעדת גודיז בראשון לציון היא מסעדה איטלקית חלבית דגים כשרה השוכנת באותו מתחם של מסעדת קמפניה הבשרית</p>
      <p class="description">המטבח שלנו שם דגש על מטעמי ארץ המגף, והתפריט בהתאם, משופע בפיתויים כגון: פשטות איכותיות, לזניה מהבילה או מנות ניוקי למשל</p>
      <p class="description">מלבד האוכל המושע המקום מגיש גם עיצוב מודרני, מוזיקה טובה והרבה סטייל. ביקור בגודיז מאפשר להרגיש בתל אביב אבל לוותר בשמחה על חיפושי החנייה המפרכים ועומסי התנועה של העיר הגדולה</p>
      <router-link to="/menu">
        <button class="menu-btn">תפריט</button>
      </router-link>
    </div>
    <div class="yolo">
      <p>You</p>
      <p>only</p>
      <p>live</p>
      <p>once</p>
    </div>
    <img src="" class="img-1 home-photos">
    <div class="section-2">
      <h1 class="headline">אירועים Goodies</h1>
      <div class="breaking-line"></div>
      <p class="description">בגודיז ניתן גם לערוך אירועי יוקרה בכל חלל המסעדה, או בחלקו, להחל מכ-25 ועד כ-140 מוזמנים, עם אופציה לכ-30 נוספים במרפסת בחוץ</p>
      <p class="description">בנוסף למקום חדר פרטי אקסקלוסיבי המיועד לאירועים אינטימיים של עד 14-20 סועדים</p>
      <router-link to="/eventsMenu">
        <button class="menu-btn">תפריט אירועים</button>
      </router-link>
    </div>
    <img src="" class="img-2 home-photos">
    <div class="section-3">
      <h1 class="headline">צור קשר</h1>
      <div class="breaking-line"></div>
      <div class="contact">
        <div class="contact-choise">
          <i class="material-icons contact-icon">email</i>
          <p>goodies1020@gmail.com</p>
        </div>
        <div class="contact-choise">
          <i class="material-icons contact-icon">access_time</i>
          <p><b>א'-ה'</b> 10:30-24:00</p>
          <p><b>ו' סגור, שבת</b> 20:00-24:00</p>
        </div>
        <div class="contact-choise">
          <i class="material-icons contact-icon">location_on</i>
          <p>מסעדת גודיז</p>
          <p>לזרוב 23, ראשון לציון</p>
        </div>
        <div class="contact-choise">
          <i class="material-icons contact-icon">call</i>
          <p>טלפון</p>
          <p>03-654-3207</p>
        </div>
        <div class="breaking-line"></div>
      </div>
      </div>
      <img src="" class="img-3 home-photos">
      <Footer></Footer>
      <div class="marging-footer"></div>
  </div>
</template>

<script>
import firebase from "../firebaseConfig";
import Footer from "@/components/Footer.vue";
import Slider from "@/components/Slider.vue";

export default {
  name: "Home",
  components: {
    Slider,
    Footer
  },
  mounted: function () {
    window.scrollTo(0,0);

    firebase.storage().ref().child('/food5.jpg').getDownloadURL().then(function(downloadURL) {
            var img = document.querySelector(".img-1");
            img.src = downloadURL;             
        });
    firebase.storage().ref().child('/food7.jpg').getDownloadURL().then(function(downloadURL) {
        var img = document.querySelector(".img-2");
        img.src = downloadURL;             
    });
    firebase.storage().ref().child('/cake6.jpg').getDownloadURL().then(function(downloadURL) {
        var img = document.querySelector(".img-3");
        img.src = downloadURL;             
    });
  }
};
</script>

<style scoped>
  .home{
      display: grid;
      grid-template-rows: 26rem;
    }

  .headline{
    margin: 4rem 0.5rem 2rem 0.5rem;
    color: black;
  }

  .description{
    margin: 0.5rem 1rem;
  }

  .breaking-line{
    border-top: 1px solid black;
    width: 90%;
    margin: 2rem auto 4rem auto;
  }

  .menu-btn{
    background-color: rgb(204, 116, 2);
    margin: 1.5rem auto 3rem auto;
    width: 13rem;
    height: 3rem;
    font-size: 1rem;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
  }

  .menu-btn:hover {
    border: 3px solid rgb(204, 116, 2);
    background-color: ivory;
    color: rgb(204, 116, 2);
  }

  .yolo{
    display: none;
  }

  .home-photos{
    width: 100%;
    height: 20rem;
    margin: auto;
  }

  .contact{
    display: flex;
    flex-wrap: wrap;
  }

  .contact-choise{
    width: 15rem;
    height: 8rem;
    margin: 2rem auto;
  }

  .contact-icon{
    color: rgb(204, 116, 2);
    font-size: 4rem;
  }

  .marging-footer{
    height: 3.3rem;
    display: block;
  }

  @media (min-width: 43rem)
    {
      .home{
        grid-template-rows: 37.6rem;
      }

      .marging-footer{
        display: none;
      }

      .headline{
        font-size: 3rem;
      }

      .description{
        margin: 0.5rem auto;
        padding: 0 5rem;
        font-size: 1.3rem;
        max-width: 70rem;
      }

      .contact{
        padding: 0 3rem;
      }

      .home-photos{
        height: 30rem;
      }
    }

    @media (min-width: 70rem)
    {
      .home{
        grid-template-rows: 42.6rem;
      }

      .section-1{
        background-color: white;
      }

      .yolo{
        display: block;
        margin-top: 10rem;
        text-align: left;
        padding-left: 25%;
        font-size: 6rem;
        color: lightcoral;
      }

      .yolo p{
        font-family: 'Courgette', cursive;
        height: 6rem;
      }

      .img-1{
        position: fixed;
        z-index: -1;
        top: 55%;
        left: 55%;
      }

      .section-2{
        width: 50rem;
        margin: auto;
        background-color: rgba(255, 255, 255, 0.6);
        margin: 10rem auto;
      }

      .section-2 .headline{
        margin: auto;
      }

      .section-2 .breaking-line{
        display: none;
      }

      .img-2{
        position: fixed;
        z-index: -1;
        top: 0;
        right: 55%;
      }

      .section-3{
        background-color: white;
      }
    }

    @media (min-width: 83.5rem)
    {
      .home{
        grid-template-rows: 45.1rem;
      }
    }
</style>
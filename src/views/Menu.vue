<template>
    <div class="menu">
        <div class="marge-top"></div>
        <h1 class="headline">תפריט גודיז</h1>
        <div class="categories">
            <div v-for="(category, index) in categories" :key.sync="index" class="category">
                <a v-on:click="updateSelectedCategory">
                    <div class="category">
                        {{category}}
                    </div>
                </a>
            </div>
        </div>
        <div v-if="this.selectedCategory === 'ראשונות'" class="menu-items">
            <h2>ראשונות</h2>
            <MenuItem v-for="(item, index) in menuFirsts" :description="item.description" :name="item.name" :price="item.price" :key.sync="index">
            </MenuItem>
        </div>
        <div v-else-if="this.selectedCategory === 'סלטים'" class="menu-items">
            <h2>סלטים</h2>
            <MenuItem v-for="(item, index) in menuSalads" :description="item.description" :name="item.name" :price="item.price" :key.sync="index">
            </MenuItem>
        </div>
        <div v-else-if="this.selectedCategory === 'פסטות'" class="menu-items">
            <h2>פסטות לבחירה</h2>
            <MenuItem v-for="(item, index) in menuPastaChoise" :description="item.description" :name="item.name" :price="item.price" :key.sync="index">
            </MenuItem>
            <h2>רטבים על בסיס שמנת</h2>
            <MenuItem v-for="(item, index) in menuPastaCream" :description="item.description" :name="item.name" :price="item.price" :key.sync="index">
            </MenuItem>
            <h2>רטבים על בסיס עגביות</h2>
            <MenuItem v-for="(item, index) in menuPastaSpecial" :description="item.description" :name="item.name" :price="item.price" :key.sync="index">
            </MenuItem>
            <h2>ספיישל גודיז</h2>
            <MenuItem v-for="(item, index) in menuPastaTomato" :description="item.description" :name="item.name" :price="item.price" :key.sync="index">
            </MenuItem>
        </div>
        <div v-else-if="this.selectedCategory === 'פיצות'" class="menu-items">
            <h2>פיצות</h2>
            <MenuItem v-for="(item, index) in menuPizza" :description="item.description" :name="item.name" :price="item.price" :key.sync="index">
            </MenuItem>
        </div>
        <div v-else-if="this.selectedCategory === 'דגים'" class="menu-items">
            <h2>דגים</h2>
            <MenuItem v-for="(item, index) in menuFish" :description="item.description" :name="item.name" :price="item.price" :key.sync="index">
            </MenuItem>
        </div>
        <div v-else class="menu-items">
            <h2>קינוחים</h2>
            <MenuItem v-for="(item, index) in menuDessert" :description="item.description" :name="item.name" :price="item.price" :key.sync="index">
            </MenuItem>
        </div>
        <div class="margin-bottom"></div>
        <Footer></Footer>
        <div class="marging-footer"></div>
    </div>    
</template>

<script>
import Footer from "@/components/Footer.vue";
import MenuItem from "@/components/MenuItem.vue";
import firebase from "../firebaseConfig";
 
const database = firebase.database();
const firsts = database.ref("firsts");
const salads = database.ref("salads");
const pastaChoise = database.ref("pasta/choise");
const pastaCream = database.ref("pasta/cream");
const pastaSpecial = database.ref("pasta/special");
const pastaTomato = database.ref("pasta/tomato");
const pizza = database.ref("pizza");
const fish = database.ref("fish");
const dessert = database.ref("dessert");

export default {
    name: "Menu",
    components: {
      MenuItem,
      Footer
    },
    data(){
      return{
          menuFirsts: [],
          menuSalads: [],
          menuPastaChoise: [],
          menuPastaCream: [],
          menuPastaSpecial: [],
          menuPastaTomato: [],
          menuPizza: [],
          menuFish: [],
          menuDessert: [],
          categories: ["ראשונות", "סלטים", "פסטות", "פיצות", "דגים", "קינוחים"],
          selectedCategory: "ראשונות"
      }
    },
    methods: {
        updateSelectedCategory: function(event){
            this.selectedCategory = event.target.innerHTML.replace(/\s+/g, '');
        }
    },

    mounted(){
        window.scrollTo(0,0);

        firsts.once("value", menuFirsts => {
        menuFirsts.forEach(item => {
          this.menuFirsts.push({
            name: item.child("name").val(),
            description: item.child("description").val(),
            price: item.child("price").val()
          });
        });
      });
       salads.once("value", menuSalads => {
        menuSalads.forEach(item => {
          this.menuSalads.push({
            name: item.child("name").val(),
            description: item.child("description").val(),
            price: item.child("price").val()
          });
        });
      });
       pastaChoise.once("value", menuPastaChoise => {
        menuPastaChoise.forEach(item => {
          this.menuPastaChoise.push({
            name: item.child("name").val(),
            description: item.child("description").val(),
            price: item.child("price").val()
          });
        });
      });
      pastaCream.once("value", menuPastaCream => {
        menuPastaCream.forEach(item => {
          this.menuPastaCream.push({
            name: item.child("name").val(),
            description: item.child("description").val(),
            price: item.child("price").val()
          });
        });
      });
      pastaSpecial.once("value", menuPastaSpecial => {
        menuPastaSpecial.forEach(item => {
          this.menuPastaSpecial.push({
            name: item.child("name").val(),
            description: item.child("description").val(),
            price: item.child("price").val()
          });
        });
      });
      pastaTomato.once("value", menuPastaTomato => {
        menuPastaTomato.forEach(item => {
          this.menuPastaTomato.push({
            name: item.child("name").val(),
            description: item.child("description").val(),
            price: item.child("price").val()
          });
        });
      });
       pizza.once("value", menuPizza => {
        menuPizza.forEach(item => {
          this.menuPizza.push({
            name: item.child("name").val(),
            description: item.child("description").val(),
            price: item.child("price").val()
          });
        });
      });
       fish.once("value", menuFish => {
        menuFish.forEach(item => {
          this.menuFish.push({
            name: item.child("name").val(),
            description: item.child("description").val(),
            price: item.child("price").val()
          });
        });
      });
       dessert.once("value", menuDessert => {
        menuDessert.forEach(item => {
          this.menuDessert.push({
            name: item.child("name").val(),
            description: item.child("description").val(),
            price: item.child("price").val()
          });
        });
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
    
    h2{
        color: rgb(204, 116, 2);
        text-align: right;
        margin: 3rem auto 1rem auto;
    }
    .menu-items{
        width: 80%;
        margin: auto;
        min-height: calc(100vh - 25rem);
    }

    .categories{
        border-top: 1px solid rgb(204, 116, 2);
        border-bottom: 1px solid rgb(204, 116, 2);
        margin: auto;
        margin-bottom: 2rem;
        width: 90%;
        direction: rtl;
    }
    
    .category{
        display: inline-block;
        margin: 0.5rem 0.5rem;
    }

    .category a{
        cursor: pointer;
    }

    .category a:hover{
        color: rgb(204, 116, 2);
    }

    .margin-bottom{
        height: 4rem;
    }

    .marging-footer{
        height: 3.3rem;
        display: block;
    }

  @media (min-width: 43rem)
  {
    .categories{
      width: 80%;
    } 

    .menu-items{
      width: 70%;
    }

    .marging-footer{
      display: none;
    }
  }
    
</style>
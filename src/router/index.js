import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/menu",
    name: "Menu",
    component: () =>
      import("../views/Menu.vue")
  },
  {
    path: "/eventsMenu",
    name: "EventsMenu",
    component: () =>
      import("../views/EventsMenu.vue")
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import("../views/Gallery.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import("../views/Contact.vue")
  }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

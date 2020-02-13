// src/router.js

import Vue from "vue";
import Router from "vue-router";
import WebsiteLander from "./components/Pages/Lander.vue";
import AboutPage from "./components/Pages/About.vue";
import PortfolioPage from "./components/Pages/Portfolio.vue";
import ContactPage from "./components/Pages/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "lander",
      component: WebsiteLander
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage
    },
    {
      path: "/Portfolio",
      name: "Portfolio",
      component: PortfolioPage
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage
    }
  ]
});

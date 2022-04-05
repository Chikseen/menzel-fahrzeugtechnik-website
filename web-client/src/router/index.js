import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServiceView from "../views/ServiceView.vue";
import ContactView from "../views/ContactView.vue";
import AboutView from "../views/AboutView.vue";
import GalerieView from "../views/GalerieView.vue";
import ImpressumView from "../views/ImpressumView";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/service",
    name: "service",
    component: ServiceView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/galerie",
    name: "galerie",
    component: GalerieView,
  },
  {
    path: "/impressum",
    name: "impressum",
    component: ImpressumView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

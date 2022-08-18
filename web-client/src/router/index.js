import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ServiceView from "@/views/ServiceView.vue";
import ContactView from "@/views/ContactView.vue";
import AboutView from "@/views/AboutView.vue";
import GalerieView from "@/views/GalerieView.vue";
import ImpressumView from "@/views/ImpressumView";

// Service Views
import Tuev from "@/views/ServiceViews/Tuev";
import Tiers from "@/views/ServiceViews/Tiers";
import AC from "@/views/ServiceViews/AC";
import Repair from "@/views/ServiceViews/Repair";
import GlasService from "@/views/ServiceViews/GlasService";

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
    name: "service",
    path: "/service/",
    component: ServiceView,
    children: [
      {
        path: "tuev",
        name: "tuev",
        component: Tuev,
      },
      {
        path: "tiers",
        name: "tiers",
        component: Tiers,
      },
      {
        path: "ac",
        name: "ac",
        component: AC,
      },
      {
        path: "repair",
        name: "repair",
        component: Repair,
      },
      {
        path: "glasService",
        name: "glasService",
        component: GlasService,
      },
    ],
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

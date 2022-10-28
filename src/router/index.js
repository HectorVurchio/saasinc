import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Services from "../views/ServicesView.vue";
import Employment from "../views/EmploymentView.vue";
import Contact from "../views/ContactView.vue";
import Entrance from "../views/EntranceView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sasinc/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/sasinc/employment",
    name: "Employment",
    component: Employment,
  },
  {
    path: "/sasinc/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/sasinc/entrance",
    name: "Entrance",
    component: Entrance,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

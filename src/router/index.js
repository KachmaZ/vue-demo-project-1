import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Range from "@/views/Range.vue";
import Users from "@/views/Users.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/range",
    name: "Range",
    component: Range,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  // Single user's page
  {
    path: "/users/:userId",
    component: () => import("@/views/Profile.vue"), //Lasy render.
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

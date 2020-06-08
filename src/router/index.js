import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignIn.vue"),
  },

  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },

  {
    path: "/user",
    name: "UserAccount",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UserAccount.vue"),
  },

  {
    path: "/nda",
    name: "GenerateNDA",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GenerateNDA.vue"),
  },

  {
    path: "/ndadoc",
    name: "NDA",
    component: () => import(/* webpackChunkName: "about" */ "../views/NDA.vue"),
  },

  {
    path: "/sign",
    name: "SubmitSignature",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SubmitSignature.vue"),
  },

  {
    path: "/countersign",
    name: "CounterSign",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CounterSign.vue"),
  },

  {
    path: "/signed",
    name: "SignedNDA",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignedNDA.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

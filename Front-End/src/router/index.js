import Vue from "vue";
import VueRouter from "vue-router";
// import Signup from "../views/Signup.vue";
// import Signin from "../views/Signin.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Registration",
  //   component: Signup
  // },
  // {
  //   path: "/log",
  //   name: "Log in    ",
  //   component: Signin
  // },
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

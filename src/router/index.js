import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Login from "@/views/Login";
import Pokeguiapp from "@/views/Pokeguiapp";
import { getAuth as auth } from "firebase/auth";

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/Pokeguiapp',
  },
  {
    path: '/Pokeguiapp',
    name: 'Pokeguiapp',
    component: Pokeguiapp,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      login: true,
    },
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let user = auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.login);
  if (!user && authRequired) {
    next("login");
  } else if (user && !authRequired) {
    next("home");
  } else {
    next();
  }
});

export default router;

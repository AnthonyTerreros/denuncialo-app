import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Denuncia from "../components/denuncias/Denuncia.vue";
import DenunciaView from "../views/DenunciasView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import Header from "@/components/shared/Header.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/",
      // name: "init",
      component: Header,
      meta: {
        requireAuth: true,
        roles: ["Administrador", "Usuario"],
      },
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/denuncias",
      name: "denuncias",
      component: DenunciaView,
    },
    {
      path: "/denuncias/:id",
      name: "denuncia",
      component: Denuncia,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const needAuth = to.meta.requireAuth;
  const cookieAuth = $cookies.get("auth");
  if (needAuth && !cookieAuth) {
    next("login");
    return;
  }
  next();
});

export default router;

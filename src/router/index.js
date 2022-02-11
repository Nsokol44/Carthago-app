import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
          title: 'Home'
        }
      },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
  
  router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Carthago`;
    next();
  });
  
  export default router;
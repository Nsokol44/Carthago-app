import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Data from "../views/Data.vue";
import Contribute from "../views/Contribute.vue";
import Articles from "../views/Articles.vue";
import Analytics from "../views/Analytics.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Profile from "../views/Profile.vue";
import Admin from "../views/Admin.vue";
import BlogPreview from "../views/BlogPreview.vue";
import ViewBlog from "../views/ViewBlog.vue";
import EditBlog from "../views/EditBlog.vue";
import About from "../views/About.vue";
import Learn from "../views/Learn.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";


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
    {
        path: "/data",
        name: "Data",
        component: Data,
        meta: {
          title: 'Data'
        }
      },
    {
        path: "/contribute",
        name: "Contribute",
        component: Contribute,
        meta: {
          title: 'Contribute',
          requiresAuth: true,
          requiresAdmin: true,
        }
      },
    {
        path: "/articles",
        name: "Articles",
        component: Articles,
        meta: {
          title: 'Articles'
        }
      },
    {
        path: "/aboutus",
        name: "About",
        component: About,
        meta: {
          title: 'About'
        }
      },
      {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
          title: 'Login',
          requiresAuth: false,
        }
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
          title: 'Register',
          requiresAuth: false,
        }
      },
      {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: ForgotPassword,
        meta: {
          title: 'Forgot Password',
          requiresAuth: false,
        }
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: {
          title: 'Profile',
          requiresAuth: true,
        }
      },
      {
        path: "/admin",
        name: "Admin",
        component: Admin,
        meta: {
          title: 'Admin',
          requiresAuth: true,
          requiresAdmin: true,
        }
      },
      {
        path: "/post-preview",
        name: "BlogPreview",
        component: BlogPreview,
        meta: {
          title: 'Preview Blog Post',
          requiresAuth: true,
          requiresAdmin: true,
        }
      },
      {
        path: "/view-blog/:blogid",
        name: "ViewBlog",
        component: ViewBlog,
        meta: {
          title: 'View Blog Post',
          requiresAuth: false,
        }
      },
      {
        path: "/edit-blog/:blogid",
        name: "EditBlog",
        component: EditBlog,
        meta: {
          title: 'Edit Blog Post',
          requiresAuth: true,
          requiresAdmin: true,
        }
      },
      {
        path: "/analytics",
        name: "Analytics",
        component: Analytics,
        meta: {
          title: 'Analytics',
        }
      },
      {
        path: "/learn",
        name: "Learn",
        component: Learn,
        meta: {
          title: 'Learn',
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
  
  router.beforeEach(async (to, from, next) => {
    let user = firebase.auth().currentUser;
    let admin = null;
    if (user) {
      let token = await user.getIdTokenResult();
      admin = token.claims.admin;
    }
    if (to.matched.some((res) => res.meta.requiresAuth)) {
      if (user) {
        if(to.matched.some((res) => res.meta.requiresAdmin)) {
          if (admin) {
            return next()
          }
          return next({name: "Home"});
        }
        return next()
      }
      return next({name: "Home"});
    }
    return next();
  });
  
  export default router;
  
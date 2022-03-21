import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import("vuetify/dist/vuetify.min.css");
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

Vue.config.productionTip = false
Vue.use(vuetify);
Vue.use(Vue2Editor);


  let app; 
  firebase.auth().onAuthStateChanged(() => {
    if(!app) {
      new Vue({
        vuetify,
        router,
        store,
        render: (h) => h(App),
      }).$mount("#app");
    }
  });
  
  
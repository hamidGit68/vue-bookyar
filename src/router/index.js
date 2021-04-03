import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

/* this file is used for vue router. */
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },

  {
    path: "/science",
    name: "Science",
    component: () =>
      import(/* webpackChunkName: "science" */ "../views/Science.vue")
  },

  {
    path: "/religous",
    name: "Religous",
    component: () =>
      import(/* webpackChunkName: "religous" */ "../views/Religous.vue")
  },
  {
    path: "/university",
    name: "University",
    component: () =>
      import(/* webpackChunkName: "university" */ "../views/University.vue")
  },
  {
    path: "/bestselers",
    name: "BestSelers",
    component: () =>
      import(/* webpackChunkName: "bestSelers" */ "../views/BestSelers.vue"),
    props: true
  },
  {
    path: "/suggestbooks",
    name: "SuggestBook",
    component: () =>
      import(/* webpackChunkName: "suggestBook" */ "../views/SuggestBook.vue"),
    props: true
  },
  {
    path: "/translateserv",
    name: "TranslateServ",
    component: () =>
      import(
        /* webpackChunkName: "translateServ" */ "../views/TranslateServ.vue"
      ),
    props: true
  },
  {
    path: "/publishbook",
    name: "PublishBook",
    component: () =>
      import(/* webpackChunkName: "publishBook" */ "../views/PublishBook.vue"),
    props: true
  },
  {
    path: "/bookStore",
    name: "bookStore",
    component: () =>
      import(/* webpackChunkName: "bookStore" */ "../views/bookStore.vue"),
    props: true
  }
];

const router = new VueRouter({
  routes
});

export default router;

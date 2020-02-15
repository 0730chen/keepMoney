import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Money from "@/views/Money.vue";
import Statistics from "@/views/Statistics.vue";

Vue.use(VueRouter);


const routes = [
  {
    path: '/money',
    name: 'Home',
    component:Money
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/statistics',
    name:'statistics',
    component: Statistics
  }
];

const router = new VueRouter({
  routes
});

export default router

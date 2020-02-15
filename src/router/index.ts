import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Money from "@/views/Money.vue";
import Statistics from "@/views/Statistics.vue";
import Label from "@/views/Label.vue";

Vue.use(VueRouter);


const routes = [
  {
    path: '/money',
    name: 'Money',
    component:Money
  },
  {
    path: '/label',
    name:'label',
    component: Label
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

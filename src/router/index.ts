import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Money from "@/views/Money.vue";
import Statistics from "@/views/Statistics.vue";
import Label from "@/views/Label.vue";
import NotFound from "@/views/NotFound.vue";
import EditLabel from "@/views/EditLabel.vue";

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
  },
  {
    path:'/label/edit/:id',
    name:'labelsEdit',
    component: EditLabel
  },
  {
    path:'*',
    component: NotFound
  },
];

const router = new VueRouter({
  routes
});

export default router

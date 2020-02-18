import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icons from "@/components/Icons.vue";
import TagsModel from "@/models/TagsModel";

Vue.config.productionTip = false;
Vue.component('Nav',Nav);
Vue.component('Layout',Layout);
Vue.component('Icons',Icons);

window.tagList = TagsModel.fetch()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

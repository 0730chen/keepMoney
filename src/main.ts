import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icons from "@/components/Icons.vue";
import TagsModel from "@/models/TagsModel";
import moneyModel from "@/models/moneyModel";

Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icons', Icons);

window.tagList = TagsModel.fetch();
window.createTag = (name: string) => {
    const status = TagsModel.create(name)
    if (status === 'duplicated') {
        window.alert('标签重复')
    }
    if (status === 'success') {
        window.alert('创建成功')
    }
}
window.removeTag = (id: string)=>{
  return TagsModel.delete(id);
};
window.updateTag = (id: string,name: string)=>{
  TagsModel.update(id,name)
}
window.recordList = moneyModel.fetch()
window.createRecord = (data: RecordItem)=>{
  moneyModel.create(data)
}
window.saveRecord = ()=>{
  moneyModel.save()
}
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Vuex from 'vuex'
import clone from "@/lib/clone";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      recordList:[] as RecordItem[],
      localStorageKeyName:'recordList'
    },
    mutations: {
      initRecordList(state){
        state.recordList = JSON.parse(window.localStorage.getItem(state.localStorageKeyName) || '[]') as RecordItem[];
      },
      createRecord(state,record){
        const record2: RecordItem = clone(record);
        record2.createAt = new Date();
        state.recordList.push(record2);
        // recordStore.saveRecords();
      },
      saveRecords(state){
        window.localStorage.setItem(state.localStorageKeyName, JSON.stringify(state.recordList));
      }
    },
    actions: {},
    modules: {}
})

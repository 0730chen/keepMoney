import Vue from 'vue'
import Vuex from 'vuex'
import clone from "@/lib/clone";
import createId from "@/lib/idCreate";

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        recordList: [] as RecordItem[],
        TagList: [] as Tag[],
        Tag: {id: '99', name: '请添加标签'},
        localStorageKeyRecord: 'recordList',
        localStorageKeyTag: 'tagList'
    },
    mutations: {
        initRecordList(state) {
            state.recordList = JSON.parse(window.localStorage.getItem(state.localStorageKeyRecord) || '[]') as RecordItem[];
        },
        initTagList(state) {
            state.TagList = JSON.parse(window.localStorage.getItem(state.localStorageKeyTag) || '[]') as Tag[];
            if (state.TagList.length === 0) {
                state.TagList = [{id: '0', name: '衣服'}, {id: '1', name: '娱乐'}]
            }
        },
        createRecord(state, record) {
            const record2: RecordItem = clone(record);
            record2.createAt = new Date().toISOString();
            state.recordList.push(record2);
        },
        createTag(state, name) {
            const names = state.TagList.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                window.alert('标签名重复了');
                return 'duplicated';
            }
            const id = createId().toString();
            state.TagList.push({id, name: name});
            window.alert('添加成功');
            return 'success';
        },
        saveRecords(state) {
            window.localStorage.setItem(state.localStorageKeyRecord, JSON.stringify(state.recordList));
        },
        findTag(state, id) {
            state.Tag = state.TagList.filter(t => t.id === id)[0]
        },
        updateTag(state, obj) {
            const idList = state.TagList.map(item => item.id);
            const {id, name} = obj
            if (idList.indexOf(id) >= 0) {
                const names = state.TagList.map(item => item.name);
                if (names.indexOf(name) >= 0) {
                    return 'duplicated';
                } else {
                    const tag = state.TagList.filter(item => item.id === id)[0];
                    tag.name = name;
                    return 'success';
                }
            } else {
                return 'not found';
            }
        },

        saveTag(state) {
            window.localStorage.setItem(state.localStorageKeyTag, JSON.stringify(state.TagList));
        },
        deleteTag(state, id) {
            let index = -1;
            for (let i = 0; i < state.TagList.length; i++) {
                if (state.TagList[i].id === id) {
                    index = i;
                    break;
                }
            }
            state.TagList.splice(index, 1);
            return true;
        },
    },
    actions: {},
    modules: {}
})

const localStrogeKeyName = 'recordList'
const model={
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStrogeKeyName) || '[]');
    },
    save(data){
        window.localStorage.setItem('recordList',JSON.stringify(data))
    }
}
export {model}
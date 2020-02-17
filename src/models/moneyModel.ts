const localStrogeKeyName = 'moneyModel'
const moneyModel = {
    clone(data: RecordItem[]|RecordItem){
        return JSON.parse(JSON.stringify(data))
    },
    fetch() {
        return JSON.parse(window.localStorage.getItem(localStrogeKeyName) || '[]') as RecordItem[];
    },
    save(data: RecordItem[]) {
        window.localStorage.setItem(localStrogeKeyName, JSON.stringify(data))
    }
}
export default moneyModel
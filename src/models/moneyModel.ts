const localStrogeKeyName = 'moneyModel'
const moneyModel = {
    data:[] as RecordItem[],
    clone(data: RecordItem[]|RecordItem){
        return JSON.parse(JSON.stringify(data))
    },
    fetch() {
        const result = JSON.parse(window.localStorage.getItem(localStrogeKeyName) || '[]') as RecordItem[];
        return result
    },
    save(data: RecordItem[]) {
        window.localStorage.setItem(localStrogeKeyName, JSON.stringify(this.data))
    }
}
export default moneyModel
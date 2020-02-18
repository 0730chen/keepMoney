import clone from "@/lib/clone";

const localStrogeKeyName = 'moneyModel'
const moneyModel = {
    data:[] as RecordItem[],
    clone(data: RecordItem[]|RecordItem){
        return JSON.parse(JSON.stringify(data))
    },
    create(record: RecordItem){
        const record2: RecordItem = clone(record)
        record2.createAt = new Date()
        this.data.push(record2);
        this.save()
    },
    fetch() {
        const result = JSON.parse(window.localStorage.getItem(localStrogeKeyName) || '[]') as RecordItem[];
        return result
    },
    save() {
        window.localStorage.setItem(localStrogeKeyName, JSON.stringify(this.data))
    }
}
export default moneyModel
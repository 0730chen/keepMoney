const localStrogeKeyName = 'tagList'
type TagListModel={
    data: string[];
    fetch: () => string[];
    create: (name: string) => 'success'|'duplicated';
    save: () => void;
}
const TagsModel: TagListModel ={
    data:[],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStrogeKeyName) || '[]')
        return this.data
    },
    create(name: string){
        if(this.data.indexOf(name) >=0){return 'duplicated'}
        this.data.push(name)
        this.save()
        return 'success'
    },
    save() {
        window.localStorage.setItem(localStrogeKeyName, JSON.stringify(this.data))
    }
}

export default  TagsModel
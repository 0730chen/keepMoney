const localStrogeKeyName = 'tagList';
type Tag = {
    id: string;
    name: string;
}
type TagListModel={
    data: Tag[];
    fetch: () => Tag[];
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
        const names = this.data.map(item=>item.name)
        if(names.indexOf(name) >=0){return 'duplicated'}
        this.data.push({'id':name,'name':name});
        this.save();
        return 'success'
    },
    save() {
        window.localStorage.setItem(localStrogeKeyName, JSON.stringify(this.data))
    }
}

export default  TagsModel
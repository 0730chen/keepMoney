const localStrogeKeyName = 'tagList';
type Tag = {
    id: string;
    name: string;
}
type TagListModel={
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success'|'duplicated';
    update: (id: string,name: string) => 'success'|'duplicated'|'Not Found';
    delete: (id: string) => boolean;
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
    update(id: string,name: string){
        const idList = this.data.map(item=>item.id)
        if(idList.indexOf(id) >=0){
            const nameList = this.data.map(item =>item.name)
            if(nameList.indexOf(name) >= 0){
                return 'duplicated'
            }else{
                const tag = this.data.filter(item=>item.id===id)[0]
                tag.name = name;
                tag.id = name
                this.save()
                return 'success'
            }
        }else{
            return 'Not Found'
        }
    },
    delete(id: string){
        let index = -1
        for(let i = 0;i<this.data.length;i++){
            if(this.data[i].id ===id){
                index = i;
                break;
            }
        }
        this.data.splice(index,1);
        this.save();
        return true

    },
    save() {
        window.localStorage.setItem(localStrogeKeyName, JSON.stringify(this.data))
    }
}

export default  TagsModel
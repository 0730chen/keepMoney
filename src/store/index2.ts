import TagsModel from "@/models/TagsModel";
import moneyModel from "@/models/moneyModel";

const store = {
    tagList: TagsModel.fetch(),
    createTag(name: string) {
        const status = TagsModel.create(name)
        if (status === 'duplicated') {
            window.alert('标签重复')
        }
        if (status === 'success') {
            window.alert('创建成功')
        }
    },
    removeTag(id: string) {
        return TagsModel.delete(id);
    },
    updateTag: (id: string, name: string) => {
        TagsModel.update(id, name)
    },
    recordList: moneyModel.fetch(),
    createRecord: (data: RecordItem) => {
        moneyModel.create(data)
    },
    saveRecord: () => {
        moneyModel.save()
    }
}
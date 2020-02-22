type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createAt?: string;
}
type RootState = {
    recordList: RecordItem[];
    tagList: Tag[];
    currentTag?: Tag;
}
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated';
    update: (id: string, name: string) => 'success' | 'duplicated' | 'Not Found';
    delete: (id: string) => boolean;
    save: () => void;
}

interface Window {
    tagList: Tag[];
    createTag: (name: string) => void;
    removeTag: (id: string) => boolean;
    updateTag: (id: string, name: string) => void;
    recordList: RecordItem[];
    createRecord: (record: RecordItem) => void;
    saveRecord: () => void;
}



